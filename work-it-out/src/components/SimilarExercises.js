import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercisesData, equipmentMuscleExercisesData}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
        <Typography variant='h4' mb="30px">Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {targetMuscleExercisesData.length ? <HorizontalScrollbar data={targetMuscleExercisesData}/>
            : <Loader/>}
        </Stack>

        <Typography variant='h4' mt="60px" mb="30px">Exercises that use the same equipment</Typography>
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
            {equipmentMuscleExercisesData.length ? <HorizontalScrollbar data={equipmentMuscleExercisesData}/>
            : <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises