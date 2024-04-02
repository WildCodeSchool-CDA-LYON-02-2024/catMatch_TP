import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);
  const [score, setScore] = useState({});

  /* ******utilisation des données depuis data.json et tirage aléatoire de chat */
  useEffect(() => {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
        const chatAleat = [...data].sort(() => 0.5 - Math.random());
        setSelectedCats(chatAleat.slice(0, 2));
      });
  }, []);
  /***************************************************************** */

  /****remplacement des chats par dautres et selection de ceux ci */

  const replaceCats = () => {
    const newCats = [...cats].filter((cat) => !selectedCats.includes(cat));
    const shuffledNewCats = newCats.sort(() => 0.5 - Math.random());
    setSelectedCats(shuffledNewCats.slice(0, 2));
  };

  const selectCat = (cat) => {
    const updatedScore = { ...score };
    updatedScore[cat.name] = (updatedScore[cat.name] || 0) + 1;
    setScore(updatedScore);
    replaceCats();
  };
/*************************************************************** */
  return (
    <div className="App">
      <div className="container">
        {selectedCats.map((cat, index) => (
          <div key={index} className="cat-card" onClick={() => selectCat(cat)}>
            <img src={cat.link} alt={cat.name} />
          </div>
        ))}
      </div>
      <section>
      <h2>Score</h2>
      <div className="score">
      {cats.map((cat, index) => (
          <div key={index} className="score-item">
            <p>
              {cat.name}: {score[cat.name] || 0}
            </p>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default App;
