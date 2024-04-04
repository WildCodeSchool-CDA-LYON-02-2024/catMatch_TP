// Score.jsx
import PropTypes from "prop-types";

function Score({ scores, cats }) {
  return (
    <div className="score">
      <h2>Scores</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.name}>
            <img src={cat.link} alt={cat.name} />
            {cat.name}: {scores[cat.name] || 0}
          </li>
        ))}
      </ul>
    </div>
  );
}

Score.propTypes = {
  scores: PropTypes.object.isRequired,
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Score;
