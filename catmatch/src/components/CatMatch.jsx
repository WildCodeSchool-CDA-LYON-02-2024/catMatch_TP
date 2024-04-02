import React, { useState, useEffect } from 'react';
import catData from './data';

function CatMatch() {
  const [cats, setCats] = useState([]);
  const [scores, setScores] = useState(catData.reduce((acc, cat) => ({...acc, [cat.name]: 0}), {}));

  const getRandomCats = () => {
    let catsCopy = [...catData];
    catsCopy.sort(() => 0.5 - Math.random()); // Mélanger l'ensemble des chats
    let selectedCats = catsCopy.slice(0, 2);
    if (Math.random() > 0.5) {
      selectedCats.reverse(); // Inverser les chats aléatoirement pour changer leur position
    }
    setCats(selectedCats);
  };

  const voteCat = (name) => {
    setScores({...scores, [name]: scores[name] + 1});
    getRandomCats();
  };

  // Utiliser useEffect pour s'assurer que les chats sont mélangés au chargement initial
  useEffect(() => {
    getRandomCats();
  }, []);

  return (
    <div className="cat-match">
      <h1>CatMatch</h1>
      <div className="cats">
        {cats.map(cat => (
          <div key={cat.name} className="cat" onClick={() => voteCat(cat.name)}>
            <img src={cat.link} alt={cat.name} style={{ width: '200px', height: '200px' }} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
      <div className="scores">
        <h2>Scores</h2>
        {Object.keys(scores).map(name => (
          <p key={name}>{name}: {scores[name]}</p>
        ))}
      </div>
    </div>
  );
}

export default CatMatch;
