import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const Footer = ({alignment}) => {
  return (
    <Box mt="80px" bgcolor="#000">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px">
        {alignment === "En" ? 
        <Typography color="#fff" variant='h6' pb="40px" mt="20px">
        Made By Youssef Chouay for SEG3525
      </Typography>:
      <Typography color="#fff" variant='h6' pb="40px" mt="20px">
      Fait par Youssef Chouay pour SEG3525
    </Typography>}
        
      </Stack>
    </Box>
  )
}

export default Footer