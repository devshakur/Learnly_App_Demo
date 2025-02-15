import React, { useState } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';

const Question = ({ question, onAnswerClick }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const optionAlphabets = ['A', 'B', 'C'];

   
    const handleAnswerClick = (option) => {
        setSelectedOption(option);
        onAnswerClick(option);
        setTimeout(() => {
           setSelectedOption(null) 
        }, 500);
    };

    return (
        <Box 
        sx={{
            display:{xs:'block', md:'flex'}, 
            flexDirection:'column', 
            alignItems:'center'
            }}>
            <Typography sx={{ color: 'black', mb: 1 }} variant="h6">
                {question.question}
            </Typography>
            {question.options.map((option, index) => {     
                let borderColour = '#E5E5E5'; 
                if (selectedOption) {
                    if (option === question.answer) {
                        borderColour = 'green'; 
                    } else if (selectedOption === option) {
                        borderColour = 'red'; 
                    }
                }

                return (
                    <Stack 
                    key={index} 
                    gap={3} 
                    maxWidth={'md'}
                    sx={{ 
                        width: '100vw', 
                        display:{xs:'block', md:'flex'}, 
                        flexDirection:'column', 
                        alignItems:'center' 
                        }} 
                        direction="row">
                        <Button
                            variant="outlined"
                            sx={{
                                width: '90%',
                                py: 2,
                                mb: 3,
                                textAlign: 'left',
                                textTransform: 'none',
                                justifyContent: 'flex-start',
                                color: '#444444',
                                border: `2px solid ${borderColour}`,
                            }}
                            onClick={() => handleAnswerClick(option)}
                        >
                            {`${optionAlphabets[index]}. ${option}`}
                        </Button>
                    </Stack>
                );
            })}
        </Box>
    );
};

export default Question;
