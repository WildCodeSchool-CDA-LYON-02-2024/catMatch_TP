import { useState, useEffect } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/src/assets/json/cat.json");
      const jsonData = await response.json();
      const sortedLeaderboard = jsonData.sort((a, b) => b.points - a.points);
      setLeaderboard(sortedLeaderboard);
    };

    fetchData();
  }, []);

  return (
    <div className="leaderboard-container">
      <h1>Classement</h1>
      <ol>
        {leaderboard.map((cat) => (
          <li key={cat.id}>
            <img src={cat.link} alt={cat.name} className="CatImgLeaderBoard" />
            <h2>{cat.name}</h2>
            <h3>{cat.points} points</h3>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
