import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = ({alignment}) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciceVideos, setExerciceVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentMuscle, setEquipmentMuscle] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async() => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciceVideos(exerciseVideosData.contents);
      
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscle(targetMuscleExercisesData);

      const equipmentMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentMuscle(equipmentMuscleExercisesData);
    }

    fetchExercisesData();
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} alignment={alignment}/>
      <ExerciseVideos exerciseVideos={exerciceVideos} name={exerciseDetail.name} alignment={alignment}/>
      <SimilarExercises targetMuscleExercisesData={targetMuscle} equipmentMuscleExercisesData={equipmentMuscle} alignment={alignment}/>
    </Box>
  )
}

export default ExerciseDetail