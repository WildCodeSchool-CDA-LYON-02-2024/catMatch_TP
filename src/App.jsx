import { useState } from 'react';
import CatService from './service/CatService';
import Cat from './components/Cat.jsx';
import CatResult from './components/CatResult.jsx';
import './App.css';
const catArray = new CatService();

const App = () => {
  const [cats, setCats] = useState(catArray.getRandomCats());
  const [catResult, setCatResult] = useState(catArray.topResult());

  const onClick = (id) => {
    catArray.addScore(id);
    setCats(catArray.getRandomCats());
    setCatResult(catArray.topResult());
  };

  return (
    <div>
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
      <div className='result-container'>
        {catResult.map((el, index) => (
          <div key={index}>
            <CatResult score={el.score} name={el.name} onClick={onClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
