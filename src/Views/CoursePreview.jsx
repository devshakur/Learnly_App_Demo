import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import TimerProgressBar from '../component/TimeProgressBar';
import StageTwoHeader from '../component/StageTwoHeader';
import StageTwoQuiz from '../component/StageTwoQuiz';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { useNavigate } from 'react-router-dom';
const CoursePreview = () => {
    const navigate = useNavigate()
  return (
   <Box sx={{m:2,}}>
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',}}>
        <div onClick={()=>navigate(-1)} style={{width:'36px', border:'1px solid grey', height:'36px', borderRadius:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <ArrowBackIcon fontSize='medium' sx={{ color: 'blue' }} />
        </div>
        <Typography variant='h6' sx={{color:'grey'}}>Course Preview</Typography>
        <div onClick={()=>navigate('/')} style={{width:'36px', height:'36px',  border:'1px solid grey', borderRadius:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <PowerSettingsNewIcon fontSize='medium' sx={{ color: 'blue' }} />
        </div>
    </Box>
    <Typography variant='subtitle1' sx={{color:'grey', mt:1}}>Level 1.3</Typography>
    <TimerProgressBar />
    <StageTwoHeader />
    <StageTwoQuiz />
    <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
        <div onClick={()=>navigate(0)} style={{width:'36px', height:'36px', borderRadius:'10px', border:'1px solid grey', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <CachedOutlinedIcon fontSize='medium' sx={{color:'grey'}} />
        </div>
    <Button onClick={()=>navigate('/congrat')} endIcon={<ArrowForwardOutlinedIcon />} sx={{width:{xs:'90%', md:'60%', lg:'30%'}, py:1.3}} variant='contained'>Continue</Button>
  
    </div>
   </Box>
  )
}

export default CoursePreview
