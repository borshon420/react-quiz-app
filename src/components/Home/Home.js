import { Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import quizBanner from "../../images/quiz-banner/1.svg";
import "./Home.css";

const Home = ({name, setName}) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  useEffect(() => {
    fetch("/categoryData.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings-select">
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
              <MenuItem key="Easy" value="easy">
                  Medium
              </MenuItem>
              <MenuItem key="Easy" value="easy">
                  Hard
              </MenuItem>
          </TextField>
          <Button variant="contained" color="primary" size="large">
              Start Quiz
          </Button>
        </div>
      </div>
      <img src={quizBanner} className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
