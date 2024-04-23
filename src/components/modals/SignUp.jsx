import * as React from "react";
import { useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import UserData from "../../contexts/UserData";
import { reqUserData, reqUserSignup } from "../../DB requests/UserData_Requests";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastTopCenter } from "../../utils/toasts";
import SignUpForm from "../forms/SignUpForm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const notify = () => toast.error('User with this email already exist', toastTopCenter);

export default function SignUp({ showModal, setShowModal }) {
    const handleClose = () => setShowModal(false);
    const { setUserdata } = useContext(UserData)

    const onSubmit = async (data) => {
        try {
            const { user, token } = await reqUserSignup(data)
            setUserdata(user)
            sessionStorage.setItem('userdata', JSON.stringify(user));
            sessionStorage.setItem('token', JSON.stringify(token));
            handleClose()
        } catch (error) {
            notify()
        }
    }

    return (
        <div style={{ margin: "25%" }}>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-login-title"
                aria-describedby="modal-login-description"
            >
                <Box sx={style}>
                    <Typography id="modal-login-title" variant="h6" component="h2">
                        SignUp
                    </Typography>
                    <SignUpForm onSubmit={onSubmit} />
                    <Button onClick={handleClose}>Close window</Button>
                </Box>
            </Modal>
        </div>
    );
}