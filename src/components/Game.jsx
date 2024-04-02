import React, { useeEffect, useState } from 'react';
import CatCard from './CatCard';
import catsData from './data';


/////////utiliser usState pour pouvoir modifier les chats dans un tableau
function Game() {
  const [cats, setCats] = useState([]);

  ////////////selectionner un nombre aleatoire dans le tableau
  const generateCats = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * catsData.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const randomCats = randomIndexes.map((index) => catsData[index]);
    
    setCats(randomCats);
  };

 ///////////la function click sur chaque chaton
  const handleCatSelection = (selectedCatName) => {
    //selectedCats.push(selectedCatName);
    console.log('le chat selectionne est:', selectedCatName);
    
  };

  return (
    <div>
      <h1>Cat Match</h1>
      <div>
        {/* faire une boucle pour afficher les chats a chaque clik en le selectionnant pour le moment j,arrive pas a les pusher dans un tableau mdr  */}
        {cats.map((cat) => (
          <CatCard key={cat.name} cat={cat} onClick={handleCatSelection} />
        ))}

      </div>


      {/* generer un buton pour passer d'une selection de deux chats a une autre */}
      <button onClick={generateCats}>Next Round</button>
      
    </div>
  );
}

export default Game;