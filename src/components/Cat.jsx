import './Cat.css';
import PropTypes from 'prop-types';

const Cat = ({ link, score, name, onClick, id }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div>
      <div className='img-container'>
        <img src={link} alt='' className='img' onClick={handleClick} />
        <span id='span-name'> {name} </span>
        <span id='span-score'>Score : {score} </span>
      </div>
    </div>
  );
};

Cat.propTypes = {
  link: PropTypes.string,
  score: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default Cat;
