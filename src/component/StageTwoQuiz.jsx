import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, Container, Typography, Grid } from "@mui/material";


const questions = [
  { id: 1, text: "A js. library built on top of Javascript", answer: "React" },
  { id: 2, text: "A fixed number that doesnt change?", answer: "constant" },
  { id: 3, text: "A language for type checking", answer: "Typescript" },
  { id: 4, text: "What is the largest ocean on Earth", answer: "Pacific" },
  { id: 5, text: "AbdulShakur is seeking for the role of Frontend", answer: "Developer" },
];

// this fuction shuffles answer randomly
const shuffledAnswers = [...questions].sort(() => Math.random() - 0.5);

// the Draggable answer component 
const AnswerBox = ({ answer }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ANSWER",
    item: { answer },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        width: "100%",
        p: 2.5,
        textAlign: "center",
        backgroundColor: "#333333",
        color: "grey",
        borderRadius: "8px",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {answer}
    </Box>
  );
};

// Question Box (Drop Target)
const QuestionBox = ({ question, onDropAnswer, matchedAnswer }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ANSWER",
    drop: (item) => onDropAnswer(question.id, item.answer),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      sx={{
        width: "100%",
        height:'80px',
        p: 1,
        textAlign: "center",
        backgroundColor: matchedAnswer
          ? matchedAnswer === question.answer
            ? "#C6F4D6" // Green if answer is correct
            : "#FFC5C5" // Red if answer is  incorrect
          : "#E0E0E0",
        color: matchedAnswer
        ? matchedAnswer === question.answer
          ? "grey" // same thing here too
          : "red" // same thing here
        : "black",
        borderRadius: "15px",
        fontWeight: "bold",
        border: isOver ? "2px dashed #000" : "2px solid transparent",
      }}
    >
      {question.text}
    </Box>
  );
};

// Main Quiz Component
const StageTwoQuiz = () => {
  const [answers, setAnswers] = useState({});

  const handleDropAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container sx={{ p:4, textAlign: "center" }}>

        {/* Questions Section */}
        <Grid container spacing={3} justifyContent="center">
          {questions.map((question) => (
            <Grid sx={{ width:'100px'}} item xs={6} md={3} key={question.id}>
              <QuestionBox
                question={question}
                matchedAnswer={answers[question.id]}
                onDropAnswer={handleDropAnswer}
              />
            </Grid>
          ))}
        </Grid>

        {/* Answers Section */}
        <Typography sx={{color:'grey', mt:4}}>Drag the correct algebraic term below to match its definition above </Typography>
        <Grid container spacing={6} justifyContent="center" sx={{ mt:-3}}>
          {shuffledAnswers.map((q) => (
            <Grid item xs={4} md={3} key={q.id}>
              <AnswerBox answer={q.answer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </DndProvider>
  );
};

export default StageTwoQuiz;
