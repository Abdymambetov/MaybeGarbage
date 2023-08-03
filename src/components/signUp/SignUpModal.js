import { useSelect } from '@mui/base';
import { Backdrop, Box, Button, Modal, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, headerOpen, postUser, sendForm, setModal } from '../../store/slices/authSlice';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function SignUpModal() {
    
    // ++++
    const [user, setUser] = useState({})
    
    const handleUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const dispatch = useDispatch()
    const {modal} = useSelector(state => state.authReducer)
    console.log(modal);
    // const handleOpen = () => dispatch(setModal())
    const handleClose = () => dispatch(closeModal())
    const handlePostUser = (e) => {
        e.preventDefault()
        dispatch(postUser(user))
        dispatch(headerOpen())
        dispatch(closeModal())
    }
  return (
    <div>
      
        
         <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
            <Box sx={style}>
        <form onSubmit={handlePostUser}  style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            alignItems: 'center'
        }}>
            <h1>Регистрация</h1>
            {/* <TextField id="outlined-basic" label="name" variant="outlined" name='name' onChange={handleUser} /> */}
            <TextField id="outlined-basic" label="username" variant="outlined" name='username' onChange={handleUser}/>
            
            {/* <TextField id="outlined-basic" label="password" variant="outlined" name='password' type='password'  onChange={handleUser} /> */}
           
            <TextField id="outlined-basic" label="email" variant="outlined" name='email'onChange={handleUser} />
            


            <Button type='submit' onClick={handlePostUser}>sign up</Button>
        </form>
        </Box>
        </Modal>
       
    </div>
  )
}


export default SignUpModal