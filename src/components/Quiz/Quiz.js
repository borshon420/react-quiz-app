import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => setQuiz(data.results))
    },[]);
    
    return (
        <div>
            <Container>
            <h1 style={{margin: 30, textAlign: "center"}}>All Questions{quiz.length}</h1>             
            {
                quiz.map(ques => <Question key={ques.correct_answer} ques={ques}></Question>)
            }
            </Container>
        </div>
    );
};

export default Quiz;