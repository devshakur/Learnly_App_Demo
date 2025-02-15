import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/level_one')
  }
  return (
    <Box sx={{width:'100vw', height:'100vh', backgroundColor:'black', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'white', overflow:'hidden'}}>
      <Typography sx={{fontSize:{xs:'22px', sm:'25px'}}}>Welcome to LearnLy Quiz App</Typography>
      <Typography variant='body1'>Created by AbdulShakur Dauda</Typography>
      <Typography variant='body2'>devshakur23@gmail.com</Typography>
      <Button onClick={handleNavigate} variant='contained' sx={{mt:2, px:4, py:1, textTransform:'none'}}>Start Quiz</Button>
    </Box>
  )
}

export default Welcome;
