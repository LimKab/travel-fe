import React, { useState, useEffect } from "react"
import Avatar from '@mui/material/Avatar';
import './comments.css'
import TextareaAutosize from 'react-textarea-autosize';
import Rating from '@mui/material/Rating';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
function Comments() {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [rating, setRating] = useState(null)
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
    // const commentObject = {
    //     userId: '',
    //     rating: rating,
    //     text: newComment,
    //     date: new Date()
    // }
    // const handlePostComment = async () => {
    //     const response = await fetch(``, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(commentObject)
    //     })
    //     const data = response.json()
    //     setComments([...comments, data])
    // }
    //Add icon and function to delete comment (if comment belongs to logged in user)
    // const handleDeleteComment = async () => {
    //     const response = await fetch(``, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     const data = response.json()
    //     setComments([...comments, data])
    // }
    return (
        <div>
            <div className='comments'>
                <Avatar className='avatar'></Avatar>
                <div className='user-response'>
                    <Rating name="size-medium" precision={0.1} value={rating} onChange={(event, newValue) => {
                        setRating(newValue)
                    }} />
                    <TextareaAutosize className='text-area' maxLength="1000" placeholder="Add a comment" onChange={(e) => setNewComment(e.target.value)}></TextareaAutosize>
                </div>
            </div>
            <Avatar className='avatar'></Avatar>
            <div className="past-comments">
                <Rating name="read-only" readOnly />
                <div className='comment-details'>
                    <p style={{ color: `${color}` }} className='user-name'>User Name</p>
                    <p className='date'>Date</p>
                </div>
                <p>User Comment...... </p>
            </div>
            {/* {comments.map(comment =>  <div className="past-comments">
                <Rating name="size-medium" precision={0.1} value={value} onChange={(event, newValue) => {
                    setValue(newValue)
                }} />
                <div className='comment-details'>
                    <p style={{ color: `${color}` }} className='user-name'>User Name</p>
                    <p className='date'>Date</p>
                </div>
                <p>User Comment...... </p>
            </div>)} */}
        </div >
    )
}
export default Comments
