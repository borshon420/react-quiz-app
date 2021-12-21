import { Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import quizBanner from "../../images/quiz-banner/1.svg";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [name, setName] = useState("")
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/categoryData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = () => {
    if(!category || !difficulty || !name){
        setError(true);
        return;
    } 
    else {
        setError(false)
        navigate('/quiz')
    }
  }
  
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings-select">
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e)=> setName(e.target.value)}
          />
          <TextField
            select
            label="Select Catagory"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e)=> setCategory(e.target.value)}
            value={category}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
          select
          label="Select Dificulty"
          variant="outlined"
          onChange={(e)=> setDifficulty(e.target.value)}
          value={difficulty}
          style={{marginBottom: 30}}
          >
              <MenuItem key="Easy" value="easy">
                  Easy
              </MenuItem>
              <MenuItem key="Easy" value="medium">
                  Medium
              </MenuItem>
              <MenuItem key="Easy" value="hard">
                  Hard
              </MenuItem>
          </TextField>
          <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={handleSubmit}>
              Start Quiz
          </Button>
        </div>
      </div>
      <img src={quizBanner} className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
