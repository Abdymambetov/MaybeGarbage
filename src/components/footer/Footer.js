import React, { useEffect } from "react";
import { useState } from "react";
import {Container} from "@mui/material";
import classes from "./Footer.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "../../store/slices/mainSlice";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import videoBg from '../../images/Pexels Videos 2334654.mp4'

import cartoon from '../../images/cartoon.jpg'
import Price from "../price/Price";
import ButtonRows from "../header/buttonRow/ButtonRow";
function Footer(props) {
        const [textTrue, setTextTrue] = useState(false)
    const [precentBar, setPrecentBar] = useState('');
    const [passInputChange, setPassInputChange] = useState('');
    const [passInputClasses, setPassInputClasses] =
        useState('pass-input-passive');
    const [toggleIcon, setToggleIcon] = useState('☠️');
    const [toggleIconClasses, setToggleIconClasses] = useState(
        'toggle-icon-passive'
    );
    const [ripple, setRipple] = useState('');
    const [passLabel, setPassLabel] = useState('Strength');
    const [type, setType] = useState('password');

    const addClass = (className) => {
        setPrecentBar('');
        if (className) {
            setPrecentBar(className);
        }
    };

    const handlePassInput = (e) => {
        setPassInputChange(e.target.value);
        if (passInputChange.length === 0) {
            setPassLabel('Strength');
            addClass();
        } else if (passInputChange.length <= 4) {
            setPassLabel('Weak');
            addClass('weak');
        } else if (passInputChange.length <= 7) {
            setPassLabel('Not Bad');
            addClass('average');
        } else {
            setPassLabel('Strong');
            addClass('strong');
        }
    };

    const togglePassInput = (e) => {
        if (type === 'password') {
            setType('text');
            setToggleIcon('💀');
            setRipple('ripple-active');
            setPassInputClasses('pass-input-active');
            setToggleIconClasses('toggle-icon-active');
        } else {
            setType('password');
            setToggleIcon('☠️');
            setRipple('ripple-passive');
            setPassInputClasses('pass-input-passive');
            setToggleIconClasses('toggle-icon-passive');
        }
    };
    useEffect(()=>{dispatch(getProductAsync())},[])
    const [value,setValue]=useState()
    const {main} = useSelector(state => state.mainReducer)
    const [filtered,setFiltered]=useState([])
    useEffect(()=>{
      const filt=  main.filter(item => item.title.toLowerCase().startsWith(value.toLowerCase()))
      filt?setFiltered(filt):setFiltered(main)
    },[value])
    const dispatch = useDispatch()
    console.log(main);
    const handleChange = () => {
        setTextTrue(true)
     }
     const handleChangeInput = () => {
        setTextTrue(true)
     }
    return (
        <div className='App'>
            <div className="sec_vid">
                <video src={videoBg} loop  autoPlay muted className="video_mg"></video>
            </div>
            
            <div className='input-container'>
                <div className='input-group'>
                    <input
                        type={type}
                        className={passInputClasses}
                        placeholder='Enter your password'
                        value={passInputChange}
                        onChange={handlePassInput}
                    />
                    <span
                        onClick={togglePassInput}
                        className={`toggle ${toggleIconClasses}`}
                    >
                        {toggleIcon}
                    </span>
                    <span className={`ripple ${ripple}`}></span>
                </div>
                <div className='pass-strength'>
                    <div className='strength-percent'>
                        <span className={precentBar}></span>
                    </div>
                    <span className='strength-label'>{passLabel}</span>
                </div>
            </div>

            <input list="data" value={value} onChange={({target})=>setValue(target.value)} />
            <datalist id="data">
               {filtered.map(item=><option>{item?.title}</option>) }
            </datalist> 
            {/* <div className="scale">
                <img src={cartoon} alt="" className="image"/>
            </div> */}
           
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Outlined" className="text_test" variant="outlined" />
             </Box>

             <hr/>

             <div className="container">
             
             
            
            <p>{!textTrue ? '' : 'hello'}</p>
             <input type="text"  className="text_test" onClick={handleChangeInput} />
             </div>
            <Price/>
            <ButtonRows/>
            
        </div>
    );
}

export default Footer;