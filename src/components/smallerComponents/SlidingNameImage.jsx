import { Box, CardMedia, Chip, Stack } from "@mui/material"

function SlidingNameImage({ image, name, url }) {
    return (
        <>
            <Box mb={2}>
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