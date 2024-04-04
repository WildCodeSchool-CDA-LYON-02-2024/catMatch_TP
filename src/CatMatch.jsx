import PropTypes from "prop-types";
import "./CatMatch.css";
const CatMatch = ({ name, image, score, id, clicker }) => {
  const clickHandler = () => {
    clicker(id);
  };
  return (
    <>
      <div onClick={clickHandler} className="catmatch">
        <img src={image} />
        <p>{name}</p>
        <p>Score:{score}</p>
      </div>
    </>
  );
};
CatMatch.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  score: PropTypes.number,
  id: PropTypes.number,
  clicker: PropTypes.func,
};
export default CatMatch;
