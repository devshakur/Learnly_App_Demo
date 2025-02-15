import React from 'react'
import {Box, Typography} from '@mui/material'
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

const StageTwoHeader = () => {
  return (
   <Box sx={{mt:4, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
     <div style={{width:'36px', border:'1px solid grey', height:'36px', borderRadius:'10px', display:'flex', justifyContent:'center', alignItems:'center', mr:2}}>
      <DeviceHubIcon fontSize='medium' sx={{ color: 'blue' }} />
        </div>
        <Typography sx={{color:'black', mr:{xs:'7rem', sm:'16rem', md:'22rem', lg:'34rem', xl:'40rem'}}}>Match the Algebraic Terms!</Typography>
   </Box>
  )
}

export default StageTwoHeader
