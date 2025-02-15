import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Question from '../component/Question'
import questions from '../Data/data'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate();
    const [questionIndex, setQuestionIndex] = useState(0)
    const [status, setStatus] = useState('');
    const [userScore, setUserScore] = useState(0);

    const handleClickedOptions = (selectedOption) => {
        const currentQuestion = questions[questionIndex]
        if (selectedOption === currentQuestion.answer) {
            setStatus('correct');
            toast.success('Correct Answer');
            setUserScore((prev) => prev + 5)
        } else {
            setStatus('wrong');
            toast.error('wrong Answer');
        }
        setTimeout(() => {
            if (questionIndex + 1 < questions.length) {
                setQuestionIndex((prev) => prev + 1)
                setStatus('')
            } else {
                navigate('/success')
            }
        }, 2000);
    }

    return (
        <Box sx={{ width: '100vw', height: '100vh', m: 2, display: { xs: 'block', md: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
            <div onClick={() => navigate(-1)} style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#C7B8EA', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ArrowBackIcon fontSize='medium' sx={{ color: 'purple' }} />
            </div>
          
            <Box   maxWidth={'sm'} sx={{ width: '85%', backgroundColor: '#3B0B59', borderRadius: '6px', px: 2, py: 2.3, my: 3, display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Goal:30 Points</Typography>
                <Typography>Current Point:{userScore}</Typography>
            </Box>
            <Typography sx={{ color: 'black' }} variant='h6'>Question {questionIndex + 1}</Typography>

            <Question question={questions[questionIndex]} onAnswerClick={handleClickedOptions} status={status} />

        </Box>
    )
}

export default Quiz
