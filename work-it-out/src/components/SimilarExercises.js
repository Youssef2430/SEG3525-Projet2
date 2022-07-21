import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercisesData, equipmentMuscleExercisesData, alignment}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
      {alignment === "En" ? 
      <Typography color="#fff" variant='h4' mb="30px">Exercises that target the same muscle group</Typography>:
      <Typography color="#fff" variant='h4' mb="30px">Exercises qui travaillent le même groupe musculaire</Typography>}
        
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {targetMuscleExercisesData.length ? <HorizontalScrollbar data={targetMuscleExercisesData}/>
            : <Loader/>}
        </Stack>
        {alignment === "En" ? 
        <Typography color="#fff" variant='h4' mt="60px" mb="30px">Exercises that use the same equipment</Typography>:
        <Typography color="#fff" variant='h4' mt="60px" mb="30px">Exercises qui utilisent les mêmes équipements</Typography>}
        
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {equipmentMuscleExercisesData.length ? <HorizontalScrollbar data={equipmentMuscleExercisesData}/>
            : <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises