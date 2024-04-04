// react
import { useState } from "react";

// datas
import dataJson from "./assets/data.json";

// components
import Cats from "./components/Cats";
import Score from "./components/Score";
import Navbar from "./components/NavBar";

// css
import "./App.css";

// rrd
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [scores, setScores] = useState({});

  // pour mettre à jour les scores
  const updateScores = (catName) => {
    setScores((prevScores) => ({
      ...prevScores,
      [catName]: (prevScores[catName] || 0) + 1,
    }));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Cats
                cats={dataJson}
                scores={scores}
                updateScores={updateScores}
              />
            }
          />
          <Route
            path="/score"
            element={<Score scores={scores} cats={dataJson} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
