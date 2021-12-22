import React, { useEffect, useState } from 'react';
import './Question.css';
const Question = ({ques}) => {
    const {question, correct_answer, incorrect_answers} = ques;
    
    const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      question &&
        handleShuffle([
          correct_answer,
          ...incorrect_answers,
        ])
    );
  }, [question]);

  
  console.log(options)

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  
    return (
        <div>
            <div className="singleQuestion">
                <h2>{question}</h2>
                <div className="options">
                </div>
                <div className="btn">
                    <button>{options[0]}</button>
                    <button>{options[1]}</button>
                    <button>{options[2]}</button>
                    <button>{options[3]}</button>
                </div> 
            </div>
        </div>
    );
};

export default Question;