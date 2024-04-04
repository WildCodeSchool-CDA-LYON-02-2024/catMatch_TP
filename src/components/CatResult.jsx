import './CatResult.css';
import PropTypes from 'prop-types';

const CatResult = ({ name, score, picture }) => {
  return (
    <div className='result-element'>
      <div className='card-element'>
        <span>{name} </span>
        <div>
          <img className='card-pic' src={picture} alt='' />
        </div>
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
  picture: PropTypes.string,
};
export default CatResult;
