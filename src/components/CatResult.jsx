import './CatResult.css';

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

export default CatResult;
