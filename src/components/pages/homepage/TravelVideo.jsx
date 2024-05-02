function TravelVideo() {

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <video
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'  // Ensures video covers the entire container without distortion
                }}
                autoPlay
                loop
                muted
                playsInline // This attribute is important for autoplay in iOS web browsers
            >
                <source src='assets/tutorial.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
export default TravelVideo