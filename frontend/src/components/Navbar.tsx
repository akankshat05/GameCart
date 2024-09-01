import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isAuthMenuOpen = Boolean(authAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleAuthMenuOpen = (event) => {
    setAuthAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    setAuthAnchorEl(null);
  };

  const profileMenuId = 'primary-search-account-menu';
  const authMenuId = 'primary-auth-menu';

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          GameCart
        </Typography>

        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search games…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {/* Navigation Links */}
        <div style={{ flexGrow: 1 }} />
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" id="authMenuId" onClick={handleAuthMenuOpen}>Sign Up/ Sign In</Button>

        {/* Profile Icon */}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={profileMenuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>

      {/* Profile Dropdown Menu */}
      <Menu
        anchorEl={profileAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={profileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isProfileMenuOpen}
        onClose={handleMenuClose}
        sx={{ mt: '45px' }}
      >
        <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
      </Menu>

      {/* Sign Up/Sign In Dropdown Menu */}
      <Menu
        anchorEl={authAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={authMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isAuthMenuOpen}
        onClose={handleMenuClose}
        sx={{ mt: '45px' }}
      >
        <MenuItem component={Link} to="/login" onClick={handleMenuClose}>Sign In</MenuItem>
        <MenuItem component={Link} to="/register" onClick={handleMenuClose}>Sign Up</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
