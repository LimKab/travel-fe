import React from 'react'
import Dialog from '@mui/material/Dialog';
import TripModal from '../../contexts/TripModal';
import { useContext, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import './writereview.css'

function WriteReview() {

    const { showTripDialog, setShowTripDialog } = useContext(TripModal)
    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState('')

    const handleClose = () => {
        setShowTripDialog(false);
    };

    const review = {
        userId: '',
        rating: rating,
        text: comment,
        date: new Date()
    }

    const handlePostComment = async () => {
        const response = await fetch(`http://localhost:3001/review`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        const data = response.json()
        console.log(data)
    }

    return (
        <Dialog
            open={showTripDialog}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    handlePostComment();
                    handleClose();
                },
            }}
        >
            <DialogTitle className='title'>Write a Review</DialogTitle>
            <DialogContent>
                <div className='rating'>
                    <DialogContentText>
                        Rating:
                    </DialogContentText>
                    <Rating name="size-medium" precision={0.1} value={rating} onChange={(event, newValue) => {
                        setRating(newValue)
                    }} />
                </div>
                <DialogContentText className='comment-label'>
                    Comment:
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="comment"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Post</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WriteReview