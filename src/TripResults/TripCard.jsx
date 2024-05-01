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
import Comments from './Comments';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { json } from 'react-router-dom';
import TripDataContext from '../contexts/TripDataContext';
import WriteReview from '../components/smallerComponents/WriteReview';
import { loadStoredToken } from '../utils/utility';
import SignUp from '../components/modals/SignUp';

function TripCard() {

    const { showTripModal, setShowTripModal } = useContext(TripModal)
    const [showHotelReviews, setShowHotelReviews] = useState(false)
    const [showRestaurantReviews, setShowRestaurantReviews] = useState(false)
    const [showAttractionReviews, setShowAttractionReviews] = useState(false)
    const { tripData, setTripData } = useContext(TripDataContext)
    const [hotelReviews, setHotelReviews] = useState([])
    const [restaurantReviews, setRestaurantReviews] = useState([])
    const [attractionReviews, setAttractionReviews] = useState([])
    const { showTripDialog, setShowTripDialog } = useContext(TripModal)
    const { tripToSeeMore, setTripToSeeMore } = useContext(TripModal)
    const { formData } = useContext(TripDataContext)
    const [placeName, setPlaceName] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    const [address, setAddress] = useState('')
    const [placeType, setPlaceType] = useState('')

    const placeInfo = {
        placeName: placeName,
        address: address,
        placeType: placeType
    }

    const handleSeeHotelReviews = async () => {
        setShowHotelReviews(!showHotelReviews)
        try {
            const response = await fetch(``, {
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            })
            const data = await response.json()
            console.log(data)
            if (data) setHotelReviews(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSeeRestaurantReviews = async () => {
        setShowRestaurantReviews(!showRestaurantReviews)
        try {
            const response = await fetch(`http://0.0.0.0:3001/`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify()
            })
            const data = await response.json()
            console.log(data)
            if (data) setRestaurantReviews(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSeeAttractionReviews = async () => {
        setShowAttractionReviews(!showAttractionReviews)
        try {
            const response = await fetch(``, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify()
            })
            const data = await response.json()
            console.log(data)
            if (data) setAttractionReviews(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSave = async () => {
        const token = loadStoredToken()
        if (!token) {
            setShowSignUp(true)
            return
        }
        try {
            const response = await fetch(`https://travel-guides-be-1.onrender.com/`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: json.stringify()
            })
            const data = await response.json()
        }
        catch {

        }
    }

    // const handleSave = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/review`)
    //         const data = await response.json()
    //         console.log(data)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <>
            <Modal open={showTripModal} className="trip-modal">
                <Container className='outer-container'>
                    <div className='destination-and-filters'>
                        <h2>{tripToSeeMore?.cityName}, {tripToSeeMore?.cityInfo[0].country}</h2>
                        <div className='filters'>
                            <Chip label={formData.experience} className='chip' />
                            <Chip label={formData.season} className='chip' />
                            <Chip label={formData.budget} className='chip' />
                        </div>
                    </div>

                    <Carousel className='carousel' next={() => { if (showHotelReviews) setShowHotelReviews(false) }} prev={() => { if (showHotelReviews) setShowHotelReviews(false) }} autoPlay={false} indicatorContainerProps={{
                        style: {
                            marginLeft: '-8rem', position: 'absolute', top: '80%', zIndex: 1
                        }
                    }}>
                        {
                            (tripToSeeMore.topHotels).map((hotel, i) => <div className="inner-containers" key={i} >
                                <Container className='inner-left-container'>
                                    <div className='top-row'>
                                        <Chip label={tripToSeeMore?.topHotels[i].name} variant="outlined" className='sliding-place-name' />
                                        <div className='average-rating'>
                                            <Rating name="read-only" readOnly className="average-rating-stars" value={4.5} precision={0.1} />
                                            <h4 className="average-rating-number">4.0</h4>
                                        </div>
                                    </div>
                                    <p className='sliding-place-details'>{tripToSeeMore?.topHotels[i].description}</p>
                                    {tripToSeeMore?.topHotels[i].website != null && <a href={tripToSeeMore?.topHotels[i].website} target="_blank" className='sliding-place-details'>Visit their website</a>}
                                    <div className='see-reviews' onClick={handleSeeHotelReviews}>
                                        <p className='view-comments'>See reviews</p>
                                        <ReviewsIcon className='reviews-icon' />
                                    </div>
                                    <Tooltip className='tooltip' placement='top' title="Write a review" onClick={() => {
                                        setPlaceName(hotel.name)
                                        setAddress(hotel.address)
                                        setPlaceType('hotel')
                                        setShowTripDialog(!showTripDialog)
                                    }}>
                                        <IconButton>
                                            <RateReviewOutlinedIcon className='write-review-icon' />
                                        </IconButton>
                                    </Tooltip>
                                </Container>
                                <Container className='inner-right-container' style={{ backgroundImage: `url(${tripToSeeMore?.topHotels[i].image})` }}></Container>
                            </div>)
                        }
                    </Carousel>
                    {showHotelReviews && <Comments />}
                    {showTripDialog && <WriteReview placeInfo={placeInfo} />}

                    <Carousel className='carousel' next={() => { if (showRestaurantReviews) setShowRestaurantReviews(false) }} prev={() => { if (showRestaurantReviews) setShowRestaurantReviews(false) }} autoPlay={false} indicatorContainerProps={{
                        style: {
                            marginLeft: '-8rem', position: 'absolute', top: '80%', zIndex: 1
                        }
                    }}>
                        {
                            (tripToSeeMore.topRestaurants).map((restaurant, i) => <div className="inner-containers" key={i}>
                                <Container className='inner-left-container'>
                                    <div className='top-row'>
                                        <Chip label={tripToSeeMore?.topRestaurants[i].name} variant="outlined" className='sliding-place-name' />
                                        <div className='average-rating'>
                                            <Rating name="read-only" readOnly className="average-rating-stars" value={3.2} precision={0.1} />
                                            <h4 className="average-rating-number">1.2</h4>
                                        </div>
                                    </div>
                                    <p className='sliding-place-details'>{tripToSeeMore?.topRestaurants[i].description}</p>
                                    {tripToSeeMore?.topRestaurants[i].website != null && <a href={tripToSeeMore?.topRestaurants[i].website} target="_blank" className='sliding-place-details'>Visit their website</a>}
                                    <div className='see-reviews' onClick={handleSeeRestaurantReviews}>
                                        <p className='view-comments'>See reviews</p>
                                        <ReviewsIcon className='reviews-icon' />
                                    </div>
                                    <Tooltip className='tooltip' placement='top' title="Write a review">
                                        <IconButton>
                                            <RateReviewOutlinedIcon className='write-review-icon' />
                                        </IconButton>
                                    </Tooltip>
                                </Container>
                                <Container className='inner-right-container' style={{ backgroundImage: `url(${tripToSeeMore?.topRestaurants[i].image})` }}></Container>
                            </div>)
                        }
                    </Carousel>
                    {showRestaurantReviews && <Comments />}

                    <Carousel next={() => { if (showAttractionReviews) setShowAttractionReviews(false) }} prev={() => { if (showAttractionReviews) setShowAttractionReviews(false) }} autoPlay={false} indicatorContainerProps={{
                        style: {
                            marginLeft: '-8rem', position: 'absolute', top: '80%', zIndex: 1
                        }
                    }}>
                        {
                            (tripToSeeMore.topAttractions).map((attraction, i) => <div className="inner-containers" key={i}>
                                <Container className='inner-left-container'>
                                    <div className='top-row'>
                                        <Chip label={tripToSeeMore?.topAttractions[i].name} variant="outlined" className='sliding-place-name' />
                                        <div className='average-rating'>
                                            <Rating name="read-only" readOnly className="average-rating-stars" value={3.2} precision={0.1} />
                                            <h4 className="average-rating-number">3.2</h4>
                                        </div>
                                    </div>
                                    <p className='sliding-place-details'>{tripToSeeMore?.topAttractions[i].description}</p>
                                    {tripToSeeMore?.topAttractions[i].website != null && <a href={tripToSeeMore?.topAttractions[i].website} target="_blank" className='sliding-place-details'>Visit their website</a>}
                                    <div className='see-reviews' onClick={handleSeeAttractionReviews}>
                                        <p className='view-comments'>See reviews</p>
                                        <ReviewsIcon className='reviews-icon' />
                                    </div>
                                    <Tooltip className='tooltip' placement='top' title="Write a review">
                                        <IconButton>
                                            <RateReviewOutlinedIcon className='write-review-icon' />
                                        </IconButton>
                                    </Tooltip>
                                </Container>
                                <Container className='inner-right-container' style={{ backgroundImage: `url(${tripToSeeMore?.topAttractions[i].image})` }}></Container>
                            </div>)
                        }
                    </Carousel>
                    {showAttractionReviews && <Comments />}

                    <Button variant="contained" disableElevation className='trip-card-buttons' onClick={() => setShowTripModal(false)}>Back</Button>
                    <Button variant="contained" disableElevation className='trip-card-buttons' onClick={handleSave}>Save this trip</Button>
                </Container>
            </Modal>
            <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin}></SignUp>
        </>
    )
}
export default TripCard