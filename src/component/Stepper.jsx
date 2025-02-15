import React, { useState } from "react";
import { Box } from "@mui/material";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = 4; // Total steps

  const handleStepClick = (index) => {
    setActiveStep(index); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1, 
        mt: 1,
      }}
    >
      {Array.from({ length: steps }).map((_, index) => (
        <Box
          key={index}
          onClick={() => handleStepClick(index)}
          sx={{
            width: "30px", 
            height: "10px", 
            borderRadius: "5px",
            backgroundColor: index <= activeStep ? "#6200ea" : "#e0e0e0", // Active & Inactive colors
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
};

export default Stepper;
