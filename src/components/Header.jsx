import * as React from 'react';

// HEADER
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FaUserCircle } from "react-icons/fa";

// ----------------------

function Header (){

    // HEADER
    const pages = [];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    // ------------------------

    return (
        <AppBar position="static" style={{ background: 'transparent', }}>
            <Container maxWidth="xl">
            {/* <Container maxWidth="xl" sx={{bgcolor: 'transparent'} style={{ background: 'transparent', boxShadow: 'none'}}}> */}
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                    }}
                >
                    <img src="https://wefin.in/assets/images/wefin-logo.svg" style={{width:'80px',height:'80px', paddingLeft:'0px'}}/>
                </Typography>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <img src="https://wefin.in/assets/images/wefin-logo.svg" style={{width:'80px',height:'80px', paddingLeft:'0px'}}/>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <Button variant="outlined" color="primary" size="lg" style={{ color: "#5200bb" }} onClick={handleOpenUserMenu} >
                        <FaUserCircle />&nbsp;Login
                    </Button>
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
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;