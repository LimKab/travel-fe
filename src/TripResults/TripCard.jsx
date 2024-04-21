import React from 'react'
import './trip.css'
import Container from '@mui/material/Container';
import Comments from './Comments';

function TripCard() {
    return (
        <div>
            <Comments />
            <Container className='container'></Container>
        </div>

    )
}

export default TripCard