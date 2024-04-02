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
  const [index, setIndex] = useState(null);
  const [scoreArray, setScoreArray] = useState(
    data.map((el, index) => ({
      ...el,
      index,
      scoreT: 0,
    }))
  );

  useEffect(() => {
    const tab = scoreArray.map((el, i) => {
      if (i === index) {
        console.log('el', el);
        return {
          ...el,
          scoreT: el.scoreT++,
        };
      }
      return el;
    });
    console.log('index', scoreArray[index]);
    console.log('tab', tab);
    setScoreArray(tab);
    console.log('SCOREARRAY', scoreArray);
  }, [index]);

  // let ScoreArray = data.map((el, index) => ({
  //   ...el,
  //   index,
  //   scoreT: 0,
  // }));

  useEffect(() => {
    // let updateValues = ScoreArray.map((el) => el);

    // for (let i = 0; i < updateValues.length; i++) {
    //   if (i === index) {
    //     updateValues[i].scoreT += 1;
    //     console.log(updateValues);
    //   }
    // }

    setRandomNumber1(Math.floor(Math.random() * scoreArray.length));
    setRandomNumber2(Math.floor(Math.random() * scoreArray.length));
    setCat1(scoreArray[randomNumber1]);
    setCat2(scoreArray[randomNumber2]);
  }, [index]);

  return (
    <div className='cat-container'>
      {cat1 && (
        <Cat
          data={cat1}
          score={score}
          setScore={setScore}
          setIndex={setIndex}
        />
      )}
      {cat2 && (
        <Cat
          data={cat2}
          score={score}
          setScore={setScore}
          setIndex={setIndex}
        />
      )}
    </div>
  );
}

export default App;
