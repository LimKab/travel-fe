import React from 'react';
import YouTube from 'react-youtube';

class VideoBackground extends React.Component {
    videoDuration = null; // Duration of the video
    cutSeconds = 10; // Seconds to cut from the end of the video

    onReady = (event) => {
        // Save the reference to the player
        this.player = event.target;
        // Mute the video
        this.player.mute();
        // Fetch and save the duration of the video
        this.videoDuration = this.player.getDuration();
        this.player.playVideo();
    };

    onPlay = (event) => {
        // Constantly check the time and reset if near the end
        const checkTime = () => {
            if (this.player.getCurrentTime() >= this.videoDuration - this.cutSeconds) {
                this.player.seekTo(0);
            } else {
                setTimeout(checkTime, 500); // Check every 500ms
            }
        };
        checkTime();
    };

    render() {
        const opts = {
            height: '100vh',
            width: 550,
            playerVars: {
                autoplay: 1, // Play automatically
                controls: 0, // Do not show video controls
                cc_load_policy: 0, // Do not show closed captions
                fs: 0, // Hide the full screen button
                iv_load_policy: 3, // Do not show video annotations
                loop: 1, // Enable looping
                modestbranding: 1, // Minimize YouTube logo
                playlist: 'Atf_Af1q_5w', // Necessary for looping, same video ID here
                rel: 0, // Do not show related videos at the end
                showinfo: 0, // Do not show video title and uploader
                mute: 1 // Mute the video
            },
        };

        return (
            <YouTube
                videoId="Atf_Af1q_5w" // Replace 'videoId' with the actual YouTube video ID
                className="video-iframe"
                opts={opts}
                onReady={this.onReady}
                onPlay={this.onPlay}
            />
        );
    }
}

export default VideoBackground;
