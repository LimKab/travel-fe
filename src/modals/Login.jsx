import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginForm from "../components/forms/LoginForm";
import { reqUserLogin } from '../DB requests/UserData_Requests';

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

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = async (data) => {
        const login = await reqUserLogin(data)
        console.log(login)
        handleClose()
    }

    return (
        <div style={{ margin: "25%" }}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-login-title"
                aria-describedby="modal-login-description"
            >
                <Box sx={style}>
                    <Typography id="modal-login-title" variant="h6" component="h2">
                        Login
                    </Typography>
                    <LoginForm onSubmit={onSubmit} />
                    <Button onClick={handleClose}>Close window</Button>
                </Box>
            </Modal>
        </div>
    );
}