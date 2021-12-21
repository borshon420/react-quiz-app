import axios from "axios";
import { useState } from "react";

const useQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const fetchQuestions = async () => {
        const { data } = await axios.get(
          'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
        );
    
        setQuestions(data.results);
      };
      return{
        fetchQuestions,
        questions
      }
};

export default useQuiz;
