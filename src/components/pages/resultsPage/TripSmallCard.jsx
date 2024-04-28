import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SlidingNameImage from '../../smallerComponents/SlidingNameImage';
import { Button, Stack } from '@mui/material';

function TripSmallCard({ item }) {
    return (
        <>
            <Card sx={{ display: 'flex', width: '100%', justifyContent: "center", alignItems: "center", borderRadius: '8px' }}>
                <Box sx={{ flexDirection: 'column' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'baseline' }, flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" mr={2}>
                            {item.cityInfo[0].country}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" component="div">
                            {item.cityName}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '50vh', sm: '100vh' } }}>
                        <Stack spacing={2} alignItems='center' justifyContent='space-evenly' flexDirection={{ xs: 'column', sm: 'row' }} sx={{ width: '100%' }}>
                            <SlidingNameImage image={item.topAttractions[0].image} name={item.topAttractions[0].name} url={item.topAttractions[0].website} />
                            <SlidingNameImage image={item.topHotels[0].image} name={item.topHotels[0].name} url={item.topHotels[0].website} />
                            <SlidingNameImage image={item.topRestaurants[0].image} name={item.topRestaurants[0].name} url={item.topRestaurants[0].website} />
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, m: 2, mr: '18px' }}>
                        <Button variant="contained" disableElevation sx={{ width: 200, borderRadius: '8px' }}>see more</Button>
                    </Box>
                </Box>
            </Card >
        </>
    )
}
export default TripSmallCard