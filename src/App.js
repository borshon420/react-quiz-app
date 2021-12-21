import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/quiz" element={<Quiz />}>
          </Route>
          <Route path="/result" element={<Result />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
