import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const [alignment, setAlignment] = React.useState('En');
  return (
    <Box widtth="400px" sx={{ width: {xl: '1488px' }}} m="auto">
        <Navbar alignment={alignment} setAlignment={setAlignment}/>
        <Routes>
            <Route path="/" element={<Home alignment={alignment}/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail alignment={alignment}/>}/>
        </Routes>
        <Footer alignment={alignment}/>
    </Box>
  )
}

export default App