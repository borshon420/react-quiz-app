import React, { useEffect, useState } from 'react';
import './Question.css';
const Question = ({ques}) => {
    const {question, correct_answer, incorrect_answers} = ques;
    
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState("");

  useEffect(() => {
    setOptions(
      question &&
        handleShuffle([
          correct_answer,
          ...incorrect_answers,
        ])
    );
  }, [question]);

  
  console.log(score)

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };


  const handleCheck = (i) => {
    if (i === correct_answer){
        setScore("right"); 
    } else{
        setScore("wrong");
    }
    console.log(correct_answer)
  };

  
  
    return (
        <div>
            <div className="singleQuestion">
                <h2>{question}{score}</h2>
                <div className="options">
                </div>
                <div className="btn">
                    {
                        options.map((i) => <button
                        key={i}
                        onClick={() => handleCheck(i)}
                      >
                        {i}
                      </button>)
                            
                    }
                </div> 
            </div>
        </div>
    );
};

export default Question;