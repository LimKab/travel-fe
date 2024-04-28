import { Box, CardMedia, Chip, Stack } from "@mui/material"
import { useEffect, useState } from "react";

function SlidingNameImage({ image, name, url }) {
    const [fadeIn, setFadeIn] = useState(true)

    useEffect(() => {
        setFadeIn(true)
        const timeout = setTimeout(() => setFadeIn(false), 2900)
        return () => clearTimeout(timeout)
    }, [image])

    return (
        <>
            <Box mb={2} sx={{
                transition: 'opacity 1s',
                opacity: fadeIn ? 1 : 0.5,
            }}>
                <Stack spacing={1} alignItems='center'>
                    <Chip label={name}
                        // variant="outlined"
                        component="a"
                        href={url}
                        clickable
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ width: 200, bgcolor: '#BFBFBF' }}
                    />

                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            sx={{ width: 200, height: 180, borderRadius: '8px' }}
                            image={image}
                            alt={name}
                        />
                    </a>
                </Stack>
            </Box>
        </>
    )
}
export default SlidingNameImage