import React, { useState, useEffect } from "react"
import Avatar from '@mui/material/Avatar';
import './comments.css'
import Rating from '@mui/material/Rating';
import { v4 as uuidv4 } from 'uuid';
import TripCard from "./TripCard";

uuidv4();

function Comments({ reviews }) {
    const [comments, setComments] = useState([])
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // const getAllComments = async () => {
    //     const response = await fetch(``)
    //     const data = await response.json()
    //     setComments(data)
    // }

    // useEffect(() => {
    //     getAllComments()
    // }, []
    // )

    //Add a sort by function to BE- comments should appear in desc order by date)
    //Add in the userId


    //Add icon and function to delete comment (if comment belongs to logged in user)
    // const handleDeleteComment = async () => {
    //     const response = await fetch(``, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //     const data = response.json()
    //     setComments([...comments, data])
    // }

    return (
        <div className='all-reviews'>
            {reviews.map(review => <div className='comments'>
                <Avatar className='avatar'></Avatar>
                <div className="comment">
                    <Rating name="read-only" value={review.rating} readOnly />
                    <div className='comment-details'>
                        <p style={{ color: `${color}` }} className='user-name'>{review.username}</p>
                        <p className='date'>{review.date}</p>
                    </div>
                    <p>{review.comment}</p>
                </div>
            </div >)}
        </div>
    )
}

export default Comments