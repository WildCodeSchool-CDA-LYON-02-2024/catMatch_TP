// import CatResult from './components/CatResult.jsx';
import './App.css';
import NavBar from './components/NavBar.jsx';
import CatMap from './components/CatMap.jsx';
import CatService from './service/CatService.js';
import Score from './components/Score.jsx';
const catArray = new CatService();
import { useState } from 'react';

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
      <NavBar />
      <CatMap catArray={catArray} cats={cats} onClick={onClick} />
      <Score catArray={catArray} catResult={catResult} onClick={onClick} />
    </div>
  );
};

export default App;
