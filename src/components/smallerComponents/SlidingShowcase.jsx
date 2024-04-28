import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import SlidingNameImage from './SlidingNameImage';

function SlidingShowcase({ places }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % places.length)
        }, 3000)

        return () => clearInterval(intervalId)
    }, [places.length])

    return (
        <Box>
            {places.length > 0 && <SlidingNameImage
                image={places[currentIndex].image}
                name={places[currentIndex].name}
                url={places[currentIndex].website}
            />}
        </Box>
    );
}

export default SlidingShowcase;
