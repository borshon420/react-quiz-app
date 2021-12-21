import React, { useEffect, useState } from 'react';

const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => console.log(data.results))
    },[])  
    return (
        <div>
            <h1>This is quiz page</h1>
            
        </div>
    );
};

export default Quiz;