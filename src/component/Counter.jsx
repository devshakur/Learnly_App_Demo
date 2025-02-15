import React, { useState, useEffect} from "react";
import { Button, Box,  Typography  } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const Counter = ({ initialTime = 30, onTimeUp }) => {
  
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      if (onTimeUp) onTimeUp(); // Call a function when timer reaches 0
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
    return (
        <Box>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{backgroundColor:'#E5E5E5', borderRadius:'20px', color:'blue'}}
                startIcon={<AccessAlarmIcon sx={{color:'blue'}} />}
            >
            {formatTime(timeLeft)}
            </Button>
        </Box>
    )
}

export default Counter;
