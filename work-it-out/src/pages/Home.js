import React, {useState} from 'react'
import {Box} from '@mui/material'

import HeroBanner from "../components/HeroBanner"
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = ({alignment}) => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
      <HeroBanner alignment={alignment}/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      alignment={alignment}/>
      <Exercises
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
      alignment={alignment}/>
    </Box>
  )
}

export default Home