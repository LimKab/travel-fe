import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { SvgIcon } from '@mui/material';
import Login from '../modals/Login';
import UserData from '../../contexts/UserData';
import SignUp from '../modals/SignUp';
import Logo from '../../utils/images/logopng.png';


function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate()
    const { userdata, setUserdata } = useContext(UserData)
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    function logout() {
        setUserdata()
        localStorage.clear()
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <div >
                <AppBar position="static" sx={{ bgcolor: { md: (isHomePage ? `rgb(16,64,59, 0.3)` : 'primary') }, minHeight: 56, height: 56 }}>
                    <Container maxWidth="100%">
                        <Toolbar disableGutters sx={{ minHeight: '56px !important', height: 56 }}>
                            <img src={Logo} alt="Logo" style={{ display: 'flex', marginRight: '1rem', height: '50px', width: '50px' }} />

                            <Typography
                                variant="h6"
                                noWrap
                                component={Link}
                                to='./'
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                TripGenie
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <MenuItem key='about' onClick={() => navigate('/about')}>
                                        <Typography textAlign="center">about us</Typography>
                                    </MenuItem>
                                    <MenuItem key='choice' onClick={() => navigate('/authors-choice')}>
                                        <Typography textAlign="center">author's choice</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <SvgIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                                <MdOutlineTravelExplore size="24px" />
                            </SvgIcon>
                            <Typography
                                variant="h5"
                                noWrap
                                component={Link}
                                to='./'
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.2rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                TripGenie
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    key='about'
                                    onClick={() => navigate('/about')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    about us
                                </Button>
                                <Button
                                    key='authors choice'
                                    onClick={() => navigate('/authors-choice')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    author's choice
                                </Button>
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={userdata?.username.toUpperCase() || "Guest"} src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {userdata && <MenuItem key='Edit Profile' onClick={() => navigate('/profile')}>
                                        <Typography textAlign="center" >Edit Profile</Typography>
                                    </MenuItem>}
                                    {!userdata && <MenuItem key='Login' onClick={() => setShowLogin(true)}>
                                        <Typography textAlign="center" >Sign in</Typography>
                                    </MenuItem>}
                                    {!userdata && <MenuItem key='SignUp' onClick={() => setShowSignUp(true)}>
                                        <Typography textAlign="center" >Sign up</Typography>
                                    </MenuItem>}
                                    {userdata && <MenuItem key='My Trips' onClick={() => navigate('/my-trips')}>
                                        <Typography textAlign="center" >My Trips</Typography>
                                    </MenuItem>}
                                    {userdata && <MenuItem key='Saved Trips' onClick={() => navigate('/saved-trips')}>
                                        <Typography textAlign="center" >Saved Trips</Typography>
                                    </MenuItem>}
                                    {userdata && <MenuItem key='My reviews' onClick={() => navigate('/my-reviews')}>
                                        <Typography textAlign="center" >My reviews</Typography>
                                    </MenuItem>}
                                    {userdata && <MenuItem key='Logout' onClick={() => logout()}>
                                        <Typography textAlign="center" >Logout</Typography>
                                    </MenuItem>}
                                </Menu>
                            </Box>
                        </Toolbar>
                        <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp}></Login>
                        <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin}></SignUp>
                    </Container>
                </AppBar>
            </div >
        </>
    )
}
export default NavBar