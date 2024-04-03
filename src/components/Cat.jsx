import { useState } from 'react';
import './Cat.css';

const Cat = ({ data, score, setScore, setIndex }) => {
  const addScore = () => {
    setIndex(data.index);
  };

  return (
    <div className='img-container'>
      <img src={data.link} alt='' className='img' onClick={() => addScore()} />

      <span>Score : {data.scoreT} </span>
    </div>
  );
};

export default Cat;
