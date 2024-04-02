import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Leaderboard({ catsData }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const sortedCats = [...catsData].sort((a, b) => b.points - a.points);
    setCats(sortedCats);
  }, [catsData]);

  return (
    <div className="leaderboard">
      <h2>Classement des Chats</h2>
      <ul>
        {cats.map((cat, index) => (
          <li key={cat.id}>
            {index + 1}. {cat.name} - {cat.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}

Leaderboard.propTypes = {
  catsData: PropTypes.array.isRequired,
};

export default Leaderboard;
