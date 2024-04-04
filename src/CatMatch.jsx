import PropTypes from "prop-types";

const CatMatch = ({ name, image, score, id, clicker }) => {
  const clickHandler = () => {
    clicker(id);
  };
  return (
    <div className="ca">
      <div onClick={clickHandler} className="cat">
        <img src={image} />
        <p>{name}</p>
        <p>Score:{score}</p>
      </div>
    </div>
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
