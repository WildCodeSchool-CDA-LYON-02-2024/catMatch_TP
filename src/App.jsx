import { useState } from "react";
import "./App.css";
import dataJson from "./assets/data.json";
import Cats from "./components/Cats";

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
    <div className="main-page">
      <Cats cats={dataJson} scores={scores} updateScores={updateScores} />
    </div>
  );
}

export default App;
