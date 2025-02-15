import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const SuccessPage = () => {
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate('/level_two')
    }
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src="/images/success.png" alt="success-logo" style={{ height: '10rem', width: '25rem' }} />
                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '18px', mx:2 }}>Congratulation you have completed the first Stage</Typography>
                <Button onClick={handleNavigate} variant='outlined' sx={{ px: 5, m: 3, py: 1, color: 'blue', borderRadius: '5px' }}>Next Stage</Button>
            </Box>
        </div>
    )
}

export default SuccessPage
