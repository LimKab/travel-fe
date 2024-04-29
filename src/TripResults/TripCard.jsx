import React from 'react'
import './trip.css'
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material'
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import TripModal from '../contexts/TripModal';
import { useContext, useState } from 'react';
import Comments from './Comments'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function TripCard({ item }) {

    const { showTripModal, setShowTripModal } = useContext(TripModal)
    const [showHotelComments, setShowHotelComments] = useState(false)
    const [showRestaurantComments, setShowRestaurantComments] = useState(false)
    const [showAttractionComments, setShowAttractionComments] = useState(false)

    const navigate = useNavigate()

    const hotels = [1, 2, 3]
    const restaurants = [1, 2, 3]
    const attractions = [1, 2, 3, 4, 5]

    const handleSave = async () => {
        try {
            const response = await fetch(``, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // body: JSON.stringify(trip)
            })
            const data = await response.json()
            console.log(data)
        }
        catch {

        }
    }
    return (
        <Modal open={showTripModal} className="trip-modal">

            <Container className='outer-container'>
                <div className='destination-and-filters'>
                    <h2>Rome, Italy</h2>
                    <div className='filters'>
                        <Chip label="season" className='chip' />
                        <Chip label="budget" className='chip' />
                        <Chip label="vibe" className='chip' />
                    </div>
                </div>

                <Carousel className='carousel' next={() => { if (showHotelComments) setShowHotelComments(false) }} prev={() => { if (showHotelComments) setShowHotelComments(false) }} autoPlay={false} indicatorContainerProps={{
                    style: {
                        marginLeft: '-8rem', position: 'absolute', top: '80%', zIndex: 1
                    }
                }}>
                    {
                        hotels.map((hotel, i) => <div className="inner-containers" key={i} >
                            <Container className='inner-left-container'>
                                <Chip label="Name of Hotel" variant="outlined" className='sliding-place-name' />
                                <Rating name="read-only" readOnly className="average-rating-stars" value={4.5} precision={0.1} />
                                <h4 className="average-rating-number">{hotel}</h4>
                                <p className='sliding-place-details'>Details...</p>
                                <div className='see-reviews' onClick={() => { setShowHotelComments(!showHotelComments) }}>
                                    <p className='view-comments'>See reviews</p>
                                    <ReviewsIcon className='reviews-icon' />
                                </div>
                                <Tooltip className='tooltip' placement='top' title="Write a review">
                                    <IconButton>

                                        <RateReviewOutlinedIcon className='write-review-icon' />
                                    </IconButton>
                                </Tooltip>
                            </Container>
                            <Container className='inner-right-container' style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg")` }}></Container>
                        </div>)
                    }
                </Carousel>
                {showHotelComments && <Comments />}

                <Carousel className='carousel' next={() => { if (showRestaurantComments) setShowRestaurantComments(false) }} prev={() => { if (showRestaurantComments) setShowRestaurantComments(false) }} autoPlay={false} indicatorContainerProps={{
                    style: {
                        marginLeft: '-8rem', position: 'absolute', top: '80%', zIndex: 1
                    }
                }}>
                    {
                        restaurants.map((restaurant, i) => <div className="inner-containers" key={i}>
                            <Container className='inner-left-container'>
                                <Chip label="Restaurant Name" variant="outlined" className='sliding-place-name' />
                                <Rating name="read-only" readOnly className="average-rating-stars" value={3.2} precision={0.1} />
                                <h4 className="average-rating-number">3.2</h4>
                                <p className='sliding-place-details'>Details...</p>
                                <div className='see-reviews' onClick={() => { setShowHotelComments(!showHotelComments) }}>
                                    <p className='view-comments'>See reviews</p>
                                    <ReviewsIcon className='reviews-icon' />
                                </div>
                                <Tooltip className='tooltip' placement='top' title="Write a review">
                                    <IconButton>
                                        <RateReviewOutlinedIcon className='write-review-icon' />
                                    </IconButton>
                                </Tooltip>
                            </Container>
                            <Container className='inner-right-container' style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2019/02/21/19/00/restaurant-4011989_1280.jpg")` }}></Container>
                        </div>)
                    }
                </Carousel>
                {showRestaurantComments && <Comments />}

                <Carousel next={() => { if (showAttractionComments) setShowAttractionComments(false) }} prev={() => { if (showAttractionComments) setShowAttractionComments(false) }} autoPlay={false} indicatorContainerProps={{
                    style: {
                        marginLeft: '-8rem', position: 'absolute', top: '80%', zIndex: 1
                    }
                }}>
                    {
                        attractions.map((attraction, i) => <div className="inner-containers" key={i}>
                            <Container className='inner-left-container'>
                                <Chip label="Attraction Name" variant="outlined" className='sliding-place-name' />
                                <Rating name="read-only" readOnly className="average-rating-stars" value={3.2} precision={0.1} />
                                <h4 className="average-rating-number">3.2</h4>
                                <p className='sliding-place-details'>Details...</p>
                                <div className='see-reviews' onClick={() => { setShowHotelComments(!showHotelComments) }}>
                                    <p className='view-comments'>See reviews</p>
                                    <ReviewsIcon className='reviews-icon' />
                                </div>
                                <Tooltip className='tooltip' placement='top' title="Write a review">
                                    <IconButton>

                                        <RateReviewOutlinedIcon className='write-review-icon' />
                                    </IconButton>
                                </Tooltip>
                            </Container>
                            <Container className='inner-right-container' style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/08/23/16/20/westminster-902972_1280.jpg")` }}></Container>
                        </div>)
                    }
                </Carousel>
                {showAttractionComments && <Comments />}

                <Button variant="contained" disableElevation className='trip-card-buttons' onClick={() => setShowTripModal(false)}>Back</Button>
                <Button variant="contained" disableElevation className='trip-card-buttons' onClick={handleSave}>Save this trip</Button>
            </Container>
        </Modal>
    )
}
export default TripCard