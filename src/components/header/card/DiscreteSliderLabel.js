import  React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const marks = [
    {
      value: 10,
      label: "1 days"
    },
    {
      value: 30,
      label: "3 days"
    },
    
    {
      value: 70,
      label: "7 days"
    },
    
    
  ];
function DiscreteSliderLabel() {
    const [value, setValue] = useState(30);
    const [] = useState()
    const [age, setAge] = React.useState('');

    const handleChangeIn = (event) => {
      setAge(event.target.value);
    };

    const handleChange = (event, newValue) => {
       setValue(newValue)
    }
    const handleEffect=()=>{
      if(value<=15){
        setValue(10)
      }else if(value>16 && value <50 ){
        setValue(30)
      }else if(value<=70 && value>=50){
        setValue(70)
      }else {
        setValue(10)
      }
    }
  
    useEffect(()=>{
      const timeout= setTimeout(()=>{
          handleEffect()
      },300)
     return ()=> clearTimeout(timeout)
    },[value])
  
    
    return (
      <div>
         {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl> */}
      <Box sx={{ height:250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
              
            },
            '& .MuiSlider-mark': {
              borderLeft: '30px solid'
            }
           
          }}
          value={value}
          onChange={handleChange}
          marks={marks}
          min={10}
          max={70}
          orientation="vertical"
        />

        <input list="data" type="text" value={value/10 ===  7 ? '7 days':`${value/10} days`} className=''/>
        {/* <datalist id="data">
          <option>
            
          </option>
        </datalist> */}
      </Box>
      </div>
      
    );
  }
  

export default DiscreteSliderLabel