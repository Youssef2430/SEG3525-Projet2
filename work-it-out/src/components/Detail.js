import React, {useState} from 'react'
import { Typography, Stack, Button, TextField } from '@mui/material'
import {FaStar} from "react-icons/fa"


import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const colors = {
    white:"#fff",
    red:"#ff2625"
};

const Detail = ({exerciseDetail, alignment}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [rating, setRating] = useState(0);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
      }
    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      }

    const extraDetail = [
        {
            icon:BodyPartImage,
            name:bodyPart,
        },
        {
            icon:TargetImage,
            name:target,
        },
        {
            icon:EquipmentImage,
            name:equipment,
        }
    ]
    {window.scrollTo({top:-2000, behavior:'smooth'})}
    return (
        
        <Stack gap="60px" mt = "100px" sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
            <img src={gifUrl} alt={name} loading='lazy' className="detail-image" />
            {rating === 0 ? 
            <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
                <Typography variant='h3' color="#fff" sx={{textTransform:'capitalize'}}>
                    {name}
                </Typography>
                {alignment === "En" ? 
                <Typography variant='h6' color="#fff">
                Exercises keep you strong. <span style={{textTransform:'capitalize'}}>{name}</span> {' '}
                is one of the best exercises to target your {target}. It will help you 
                improve your mood and gain energy. 
                </Typography>:
                <Typography variant='h6' color="#fff">
                Le sport vous garde fort. <span style={{textTransform:'capitalize'}}>{name}</span> {' '}
                est l'un des meilleurs exercises pour travailleur vos {target}. Ça vous aidera à ameliorer
                votre santé et à gagner de l'énergie. 
                </Typography>}
                
                {extraDetail.map((item) =>(
                    <Stack key={item.name} direction='row' gap="24px" alignItems='center'>
                        <Button sx={{ background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
                        </Button>
                        <Typography color="#fff" variant="h6">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
                {alignment === "En" ? 
                <Button variant="contained" color="error" href="#exercises"
                sx={{background: '#ff2625', padding:'10px', width:"300px", alignSelf:"center"}}
                onClick={()=>{
                    setRating(1);
                }}>
                    Rate the Exercise
                </Button>:
                <Button variant="contained" color="error" href="#exercises"
                sx={{background: '#ff2625', padding:'10px', width:"300px", alignSelf:"center"}}
                onClick={()=>{
                    setRating(1);
                }}>
                    Notez l'Exercise
                </Button>}
                
            </Stack>

:
            <Stack gap="60px" mt = "100px" sx={{flexDirection:{lg:''}, p:'20px', alignItems:'center'}}>
            <Typography variant='h3' color="#fff" sx={{textTransform:'capitalize'}}>
                    {name}
                </Typography>
            {alignment === "En" ? 
            <Typography color="#ff2625" variant="h4" direction="row">
            Rate this Exercise so the others can know !
            </Typography>:
            <Typography color="#ff2625" variant="h4" direction="row">
            Notez cet exercice pour que les autres sachent !
            </Typography>}
            
            <Stack sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}} >
            {stars.map((_, index) => {
            return (
                <FaStar
                key={index}
                size={40}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.red : colors.white}
                style={{
                    marginRight: 10,
                    cursor: "pointer"
                }}
                />
            )
            })}
            </Stack>
            {alignment === "En" ? 
            <TextField 
            placeholder="What's your experience with it?"
            sx={{  
                width: {lg:'800px', xs:'350px'},
                borderRadius:'4px',
                backgroundColor: '#fff',
            }}
            alignSelf="center"
        />:
        <TextField 
                placeholder="Donnez nous votre experience !"
                sx={{  
                    width: {lg:'800px', xs:'350px'},
                    borderRadius:'4px',
                    backgroundColor: '#fff',
                }}
                alignSelf="center"
            />}
            
            {alignment === "En" ? 
            <Button variant="contained" color="error" href="#exercises"
            sx={{background: '#ff2625', padding:'10px'}}
            onClick={()=>{
                setRating(0);
            }}>
            Send your rating
            </Button>:
            <Button variant="contained" color="error" href="#exercises"
            sx={{background: '#ff2625', padding:'10px'}}
            onClick={()=>{
                setRating(0);
            }}>
            Envoyez votre avis
            </Button>}
            
            </Stack>
}
        </Stack>

    )
}

export default Detail