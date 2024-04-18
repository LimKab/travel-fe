function TravelVideo() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <iframe
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                src="https://www.youtube.com/embed/EColTNIbOko"
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Travel Video"
            ></iframe>
        </div>
    )
}
export default TravelVideo