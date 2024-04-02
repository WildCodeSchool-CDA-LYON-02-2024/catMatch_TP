import { useState, useEffect } from "react";
import Leaderboard from "./components/Leaderboard";

function LeaderboardPage() {
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    fetch("/src/assets/json/cat.json")
      .then((response) => response.json())
      .then((data) => setCatsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>
      <Leaderboard catsData={catsData} />
    </div>
  );
}

export default LeaderboardPage;
