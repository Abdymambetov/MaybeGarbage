import { AccountCircle } from '@mui/icons-material'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../store/slices/authSlice'
import classes from './HeaderPage.module.css'
import Vector from '../../images/Vector.svg';
import { useState } from 'react'
import Buttons from '../../page/Buttons'
import Cards from '../../page/Cards'
import Valid from '../Valid'
import Footer from '../footer/Footer'


function SignHeader() {
    const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
    const dispatch = useDispatch()

    const handleOpenAuth = () => {
        dispatch(setModal())
      }
  return (
    <div>
          <div className={classes.header}>
            <div className={classes.container}>
                <header className={classes.header_inner}>
                  <div className={classes.header_antools}>
                    <img src={Vector} alt="vector" />
                      <h3 className={classes.ulul}>Ulul Trip</h3>
                  </div>
                  <div>
                    <Button>Войти</Button>
                    <Button onClick={handleOpenAuth}>Зарегистрироваться</Button>
                  </div>
                </header>
            </div>
            <Footer/>
            {/* <Buttons/>
            <Cards/> */}

        </div>
    </div>
  )
}

export default SignHeader