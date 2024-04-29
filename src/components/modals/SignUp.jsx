import * as React from "react";
import { useContext } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Link } from "@mui/material";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserData from "../../contexts/UserData";
import { reqUserSignup } from "../../DB requests/UserData_Requests";
import { toastTopCenter } from "../../utils/toasts";
import SignUpForm from "../forms/SignUpForm";

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

const notify = () => toast.error('User with this email already exist', toastTopCenter);

export default function SignUp({ showSignUp, setShowSignUp, setShowLogin }) {
    const handleClose = () => setShowSignUp(false);
    const { setUserdata } = useContext(UserData)

    const openLogin = () => {
        setShowSignUp(false);
        setShowLogin(true)
    }

    const onSubmit = async (data) => {
        try {
            const { user, token } = await reqUserSignup(data)
            setUserdata(user)
            localStorage.setItem('userdata', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(token));
            handleClose()
        } catch (error) {
            notify()
        }
    }

    return (
        <div style={{ margin: "25%" }}>
            <Modal
                open={showSignUp}
                onClose={handleClose}
                aria-labelledby="modal-login-title"
                aria-describedby="modal-login-description"
            >
                <Box sx={style}>
                    <Typography id="modal-login-title" variant="h6" component="h2">
                        Sign up
                    </Typography>
                    <SignUpForm onSubmit={onSubmit} />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={openLogin}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}