import { useState } from 'react';
import './Cat.css';

const Cat = ({ data, score, setScore }) => {
  console.log(score);
  const addScore = () => {
    setScore((prevState) => prevState + 1);
  };

  return (
    <div className='img-container'>
      <img src={data.link} alt='' className='img' onClick={() => addScore()} />

      <span>Score : {data.score} </span>
    </div>
  );
};

export default Cat;
