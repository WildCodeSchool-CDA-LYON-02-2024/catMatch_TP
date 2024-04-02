import './App.css';
import Cat from './components/Cat.jsx';
import data from './data/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [cat1, setCat1] = useState(null);
  const [cat2, setCat2] = useState(null);

  useEffect(() => {
    let ScoreArray = data.map((el, index) => ({
      ...el,
      index,
      score,
    }));

    setRandomNumber1(Math.floor(Math.random() * ScoreArray.length));
    setRandomNumber2(Math.floor(Math.random() * ScoreArray.length));
    setCat1(ScoreArray[randomNumber1]);
    setCat2(ScoreArray[randomNumber2]);
  }, [score]);

  return (
    <div className='cat-container'>
      {cat1 && <Cat data={cat1} score={score} setScore={setScore} />}
      {cat2 && <Cat data={cat2} score={score} setScore={setScore} />}
    </div>
  );
}

export default App;
