import React from 'react'
import {Box,Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CongratPage = () => {
    const navigate = useNavigate()
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="/images/success.png" alt="success-logo" style={{ height: '10rem', width: '25rem' }} />
                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '18px', mx:2 }}>Congratulation you have completed the Quiz Section!, See you next time👋</Typography>
                <Button onClick={()=>navigate('/')} variant='outlined' sx={{ px: 5, m: 3, py: 1, color: 'blue', borderRadius: '5px' }}>Start Over</Button>
            </Box>
        </div>
  )
}

export default CongratPage
