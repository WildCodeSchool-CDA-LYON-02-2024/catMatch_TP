import { useState } from "react";
import CatMatch from "./components/CatMatch";

function CatMatchPage() {
  const [votes, setVotes] = useState([]);

  const handleCatSelect = (catId) => {
    setVotes((prevVotes) => [...prevVotes, catId]);
  };

  return (
    <div className="cat-match-page">
      <h1>Cat Match</h1>
      <CatMatch onCatSelect={handleCatSelect} />
      <div>
        <h2>Votes</h2>
        <ul>
          {votes.map((catId, index) => (
            <li key={index}>Cat ID: {catId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CatMatchPage;
