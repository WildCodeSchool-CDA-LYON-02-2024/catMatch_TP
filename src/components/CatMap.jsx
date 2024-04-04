import Cat from '../components/Cat.jsx';
import PropTypes from 'prop-types';

const CatMap = ({ cats, onClick }) => {
  return (
    <div className='cat-container'>
      {cats.map((el, index) => (
        <div key={index}>
          <Cat
            data={el}
            link={el.link}
            score={el.score}
            name={el.name}
            id={el.id}
            onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
};

CatMap.propTypes = {
  cats: PropTypes.array,
  onClick: PropTypes.func,
};

export default CatMap;
