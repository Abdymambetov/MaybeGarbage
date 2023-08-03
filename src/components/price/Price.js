import  React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


const marks = [
    {
      value: 10,
      label: "до 3000 сом"
    },
    {
      value: 30,
      label: "до 5000 сом"
    },
    
    {
      value: 60,
      label: "до 7000 сом"
    },
    {
        value: 90,
        label: 'до 10000 сом'
    },
    {
        value: 120,
        label: 'до 20000 сом'
    }
    
  ];
function Price() {
    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
       setValue(newValue)
    }
    const handleEffect=()=>{
      if(value<=15){
        setValue(10)
      }else if(value>16 && value <50 ){
        setValue(30)
      }else if(value<=60 && value>=50){
        setValue(60)
      } else if(value<= 90 && value>=70) {
        setValue(90)
      } else if(value<=120 && value >= 105)  {
        setValue(120)
      }
      else {
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
         <Box sx={{ height:400 }}>
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
          max={120}
          orientation="vertical"
        />

        <input list="data" type="text" value={value} className=''/>
      </Box>
    </div>
  )
}

export default Price 