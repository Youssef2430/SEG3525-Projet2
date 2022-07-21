import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart, alignment}) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff2625",
        darker:"#ff2625"
      },
      
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;  

  const indexOfLastExercise = currentPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);  

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top:1800 , behavior:'smooth'});
  }

  useEffect(() => {
    const fetchExercisesData = async() => {
        let exercisesData = [];
        if(bodyPart === 'all'){
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        }else{
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercises(exercisesData);
    }

    fetchExercisesData()
  }, [bodyPart])
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
        {alignment === "En" ? 
        <Typography variant="h3" mb="46px" color="#fff">
        Showing Results
        </Typography>
        :<Typography variant="h3" mb="46px" color="#fff">
        Les Resultats
        </Typography>}
        
        <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}}
        flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise}/>
            ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                  <ThemeProvider theme={theme}>
                    <Pagination 
                    color="primary"
                    shape="rounded"
                    variant='outlined'
                    defaultPage={1}
                    count={Math.ceil(exercises.length / exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                    />
                    </ThemeProvider>
                )}
        </Stack>
    </Box>
  )
}

export default Exercises