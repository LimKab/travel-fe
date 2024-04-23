import React from 'react'
import './trip.css'
import Container from '@mui/material/Container';
// import Comments from './Comments';
import Chip from '@mui/material/Chip';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Rating from '@mui/material/Rating';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function TripCard() {
    return (
        <div>
            {/* <Comments /> */}
            {/* <Carousel NextIcon={<RandomIcon/>} PrevIcon={<RandomIcon/>}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel> */}
            <Container className='outer-container'>
                <div className='destination-and-filters'>
                    <h2>Rome, Italy</h2>
                    <div className='filters'>
                        <Chip label="season" className='chip' />
                        <Chip label="budget" className='chip' />
                        <Chip label="vibe" className='chip' />
                    </div>
                </div>
                <div className="inner-containers">
                    <Container className='inner-left-container'>
                        <Chip label="Name of Hotel 1" variant="outlined" />
                        <Rating name="read-only" readOnly />
                        <h4>4.5</h4>
                        <p>Details...</p>
                        <p>View comments</p>
                        <KeyboardArrowDownIcon />
                        <Button variant="contained" disableElevation>Choose me</Button>
                    </Container>
                    <Container className='inner-right-container'></Container>
                </div>
                <Button variant="contained" disableElevation>Save this trip</Button>
            </Container>
        </div>
    )
}
export default TripCard