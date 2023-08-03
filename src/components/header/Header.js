import React, { useEffect, useState } from 'react';
import classes from "./Header.module.css"
import eyes from '../../images/6866733.png'
import nature from "../../images/Image.png"
import Footer from '../footer/Footer';
import Valid from '../Valid';

function Header(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емеил не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    })
    const emailHandle = (e) => {
        setEmail(e.target.value)
        const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некоретный емейл')
        } else{
            setEmailError('')
        }
    }

    const passwordHandle = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8 || e.target.value.length >= 16) {
            setPasswordError('Пароль должен быть меньше 8 и больше 16')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else  {
            setPasswordError('')
        }
    }
    const blurHendle = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' : 
                setPasswordDirty(true)    
                break
        }
    }

    return (
        <div>
            <form>
                <h1>Регистрация</h1>
                {(emailDirty && emailError) && <div style={{color:  'red'}}> {emailError}</div>}
                <input onChange={e=> emailHandle(e)} value={email}onBlur={e => blurHendle(e) } type="email" name="email"placeholder='Enter your email' />
                {(passwordDirty && passwordError) && <div style={{color:  'red'}}> {passwordError}</div>}
                <input onChange={e => passwordHandle(e)} value={password} onBlur={e => blurHendle(e) } type="password" name='password' placeholder='Enter your password'/>
                <button disabled = {!formValid} type='submit'>Registration</button>
                <Valid/>
            </form>
        </div>
    );
}

export default Header;