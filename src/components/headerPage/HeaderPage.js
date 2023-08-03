import React from 'react'
import classes from './HeaderPage.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/slices/authSlice';
import Vector from '../../images/Vector.svg';

import gifScan from '../../images/34445-qr-code.mp4'
import { Button } from '@mui/material';
import DiscreteSliderLabel from '../header/card/DiscreteSliderLabel';

import PostPage from '../footer/CardPage';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SliderCook from '../SliderCook';


function HeaderPage() {
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };
  const dispatch = useDispatch()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenAuth = () => {
    dispatch(setModal())
   
  }
  return (
    <div className={classes.header}>
        <div className={classes.container}>
            <header className={classes.header_inner}>
              <div className={classes.header_antools}>
                 <img src={Vector} alt="vector" />
                  <h3 className={classes.ulul}>Ulul Trip</h3>
              </div>
              <div className={classes.header_profil}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={()=>{
                    handleClose()
                    handleOpenAuth()
                    
                    }}>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                </Menu>
                {/* <Button>Войти</Button>
                <Button onClick={handleOpenAuth}>Зарегистрироваться</Button> */}
              </div>
            </header>
          <div className={classes.video_scan}>
            <video src={gifScan} loop  autoPlay muted className={classes.video_two}/>
            <p>hello</p>
          </div>
            <DiscreteSliderLabel/>
            
            <PostPage/>
            <Header/>
            <Footer/>
            <SliderCook/>
            
            
        </div>
    </div>
  )
}

export default HeaderPage;