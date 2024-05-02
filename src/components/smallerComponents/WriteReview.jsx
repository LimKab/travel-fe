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
import { loadStoredToken } from '../../utils/utility';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function WriteReview({ placeInfo }) {

    const { showTripDialog, setShowTripDialog } = useContext(TripModal)
    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState('')
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)
    const [showErrorAlert, setShowErrorAlert] = useState(false)

    const token = loadStoredToken()

    const handleClose = () => {
        setShowTripDialog(false);
    };

    const review = {
        rating: rating,
        text: comment,
        address: placeInfo.address,
        type: placeInfo.placeType
    }

    const handlePost = async (event) => {
        if (!rating || comment === '') {
            setShowSuccessAlert(false)
            setShowErrorAlert(true)
        }
        else {
            setShowSuccessAlert(true)
            try {
                const response = await fetch(`http://localhost:3001/review/${placeInfo.placeName}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json', 'authorization': token
                    },
                    body: JSON.stringify(review)
                })
                const data = response.json()
                console.log(data)
                setShowSuccessAlert(false)
                handleClose()
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div>

            <Dialog
                open={showTripDialog}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                }}
            >
                {showErrorAlert && <Alert severity="error">
                    Please rate your experience and add a comment
                </Alert>}
                {showSuccessAlert && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Thank you for your review!
                </Alert>}
                {!showSuccessAlert && <div> <DialogTitle className='title'>Write a Review</DialogTitle>
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
                        <Button onClick={handlePost}>Post</Button>
                    </DialogActions>
                </div>}

            </Dialog>
        </div>

    )
}

export default WriteReview