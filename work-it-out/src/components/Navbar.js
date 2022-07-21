import React from 'react';
import {Link} from 'react-router-dom';
import {Stack, Typography} from '@mui/material';
//import ToggleButton from '@mui/material/ToggleButton';
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

import Logo from '../assets/images/Logo.png';

const ToggleButton = styled(MuiToggleButton)({
  
  "&.MuiToggleButton-root": {
    color:"Black",
    backgroundColor:"#fff"
  },"&.Mui-selected, &.Mui-selected:hover": {
    color:"white",
    backgroundColor:"#ff2625"
  },
})
const Navbar = ({alignment, setAlignment}) => {
  //const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    if(newAlignment !== null){
      setAlignment(newAlignment);
      console.log(alignment)
    }
    
  };

  const children = [
    <ToggleButton value="En" key="left">
      <Typography>En</Typography>
    </ToggleButton>,
    <ToggleButton value="Fr" key="right">
      <Typography>Fr</Typography>
    </ToggleButton>,
    
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  
  return (
    <Stack
    direction="row"
    justifyContent="space-around" sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent: 'none'}} px="20px">
      <Link to="/" p="10px">
        <img src={Logo} alt="logo" style={{width: "48px", height: "48px", margin:'0px 20px'}}/>
      </Link>
      <Stack 
      direction="row" 
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration:'none', color:'#FFF', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href='#exercises' style={{ textDecoration:'none', color:'#FFF'}}>Exercises</a>
        
      </Stack>
      
      <Stack 
      direction="row" 
      gap="40px"
      fontSize="24px"
      alignItems="flex-end"
      >
        <ToggleButtonGroup  sx={{height:"30px"}} size="small" {...control}>
        {children}
      </ToggleButtonGroup>
      </Stack>
      
    </Stack>
    
  )
}

export default Navbar