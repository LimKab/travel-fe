import * as React from "react";
import { useContext } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Link } from "@mui/material";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from "../forms/LoginForm";
import UserData from "../../contexts/UserData";
import { reqUserData } from "../../DB requests/UserData_Requests";
import { toastTopCenter } from "../../utils/toasts";

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

const notify = () => toast.error('Wrong Email or Password', toastTopCenter);

export default function Login({ showLogin, setShowLogin, setShowSignUp }) {
    const handleClose = () => setShowLogin(false);
    const { setUserdata } = useContext(UserData)

    const openSignup = () => {
        setShowLogin(false);
        setShowSignUp(true)
    }

    const onSubmit = async (data) => {
        try {
            const { user, token } = await reqUserData(data)
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
                open={showLogin}
                onClose={handleClose}
                aria-labelledby="modal-login-title"
                aria-describedby="modal-login-description"
            >
                <Box sx={style}>
                    <Typography id="modal-login-title" variant="h6" component="h2">
                        Sign in
                    </Typography>
                    <LoginForm onSubmit={onSubmit} />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={openSignup}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}