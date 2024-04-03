import './Cat.css';

const Cat = ({ link, scoreT, name, onClick, id }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div>
      <div className='img-container'>
        <img src={link} alt='' className='img' onClick={handleClick} />
        <span id='span-name'> {name} </span>
      </div>

      <div>
        <span>Score : {scoreT} </span>
      </div>
    </div>
  );
};

export default Cat;
