import './CatResult.css';
import PropTypes from 'prop-types';

const CatResult = ({ name, score }) => {
  return (
    <div className='result-element'>
      <div>
        <span>{name} </span>
      </div>
      <div>
        <span>{score} Like</span>
      </div>
    </div>
  );
};

CatResult.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
};
export default CatResult;
