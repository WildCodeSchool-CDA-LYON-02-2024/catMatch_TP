import  { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);
  const [score, setScore] = useState({});

  useEffect(() => {
    fetch("cats.json")
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      );
  }, []);

  const selectCat = (cat) => {
    const updatedScore = { ...score };
    updatedScore[cat.name] = (updatedScore[cat.name] || 0) + 1;
    setScore(updatedScore);
  };

  return (
    <div className="App">
      <h1>CatMatch</h1>
      <div className="cat-container">
        {cats.map((cat, index) => (
          <div key={index} className="cat-card" onClick={() => selectCat(cat)}>
            <img src={cat.link} alt={cat.name} />
          </div>
        ))}
      </div>
      <h2>Score</h2>
      <div className="scoreboard">
        {Object.keys(score).map((catName, index) => (
          <div key={index} className="score-item">
            <p>
              {catName}: {score[catName]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
