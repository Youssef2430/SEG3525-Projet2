import React from 'react'
import {Box, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = ({alignment}) => {
  return (
    <Box sx={{
        mt: {lg:'212px', xs:'70px'}, 
        ml: {sm:'50px'}
    }} position="relative" p="26px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Work It Out
        </Typography>
        {alignment === "En" ? 
        <Typography fontWeight={700}
        sx={{ fontSize: {lg:'44px', xs:'40px'}, color:"#fff"
        }}
        mb="23px" mt="30px">
            Sweat, Smile <br/> and Repeat
        </Typography>:
        <Typography fontWeight={700}
        sx={{ fontSize: {lg:'44px', xs:'40px'}, color:"#fff"
        }}
        mb="23px" mt="30px">
            Suez, Souriez <br/> et Repeter
        </Typography>}
        {alignment === "En" ? 
        <Typography fontSize="22px" lineHeight="35px" mb={4} color="#fff">
        Checkout the most effective exercises
        </Typography>:
        <Typography fontSize="22px" lineHeight="35px" mb={4} color="#fff">
        Regardez les exercises les plus effectifs
        </Typography>}
        
        {alignment === "En" ? 
        <Button variant="contained" color="error" href="#exercises"
        sx={{background: '#ff2625', padding:'10px'}}>
            Explore Exercises
        </Button>:
        <Button variant="contained" color="error" href="#exercises"
        sx={{background: '#ff2625', padding:'10px'}}>
            Explorez les exercises
        </Button>}
        
        <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
            opacity: 0.4,
            display: {lg:'block', xs:'none'}
        }}
        fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner