import YouTube from 'react-youtube';

function TravelVideoWrapper() {
    const handleTouchStart = (event) => {
    };

    return <TravelVideo onHandleTouchStart={handleTouchStart} />;
}

function TravelVideo({ onHandleTouchStart }) {
    const videoId = "khAY1pZQdUc";  // ID of the YouTube video
    const opts = {
        playerVars: {
            autoplay: 1, // Autoplay the video
            controls: 0, // Hide video controls
            loop: 1, // Loop the video
            mute: 1, // Mute the video
            playlist: videoId // Set playlist to the same video ID for looping

        }
    };

    return (
        <div style={{ position: 'relative', maxWidth: '100vw', maxHeight: '100vh', width: '100%', height: '100%' }}>
            {/* <YouTube videoId="khAY1pZQdUc" opts={opts} onReady={(event) => event.target.playVideo()} /> */}
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={(event) => event.target.playVideo()}
            />
        </div>
    );
}

export default TravelVideoWrapper;
