import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { useContext } from 'react';
import TripModal from '../../../contexts/TripModal';
import TripCard from '../../../TripResults/TripCard';
import SlidingShowcase from '../../smallerComponents/SlidingShowcase';

function TripSmallCard({ item }) {
    const { showTripModal, setShowTripModal } = useContext(TripModal)
    const { tripToSeeMore, setTripToSeeMore } = useContext(TripModal)

    const handleClick = () => {
        setTripToSeeMore(item)
        setShowTripModal(true)
    }
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

                    <Box sx={{ display: 'flex', width: { xs: '50vh', sm: '100vh' } }}>
                        <Stack justifyContent='space-evenly' sx={{ width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
                            <SlidingShowcase places={item.topAttractions} />
                            <SlidingShowcase places={item.topHotels} />
                            <SlidingShowcase places={item.topRestaurants} />
                        </Stack>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mb: 2, mr: { sm: '26px' } }}>
                        <Button variant="contained" disableElevation sx={{ width: 200, borderRadius: '8px' }}
                            onClick={handleClick}>see more</Button>
                    </Box>
                </Box>
            </Card >

            {showTripModal && <TripCard tripToSeeMore={tripToSeeMore} />}
        </>
    )
}
export default TripSmallCard