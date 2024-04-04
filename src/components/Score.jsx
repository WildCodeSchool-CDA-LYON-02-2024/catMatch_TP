import CatResult from './CatResult';
import PropTypes from 'prop-types';
import './Score.css';

const Score = ({ catResult, onClick }) => {
  return (
    <div>
      <div className='result-container'>
        {catResult.map((el, index) => (
          <div key={index}>
            <CatResult
              score={el.score}
              name={el.name}
              picture={el.picture}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Score.propTypes = {
  catResult: PropTypes.array,
  onClick: PropTypes.func,
};

export default Score;
