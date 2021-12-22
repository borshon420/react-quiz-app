import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
        .then(res => res.json())
        .then(data => setQuiz(data.results))
    },[]);
    
    return (
        <div>
            <Container>
            <div>
            <h1 style={{margin: 30, textAlign: "center"}}>All Questions{quiz.length}</h1>             
            {
                quiz.map(ques => <Question key={ques.correct_answer} ques={ques}></Question>)
            }
            </div>
            
            </Container>
        </div>
    );
};

export default Quiz;