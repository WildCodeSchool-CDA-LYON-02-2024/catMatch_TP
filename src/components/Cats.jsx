// react
import { useState, useEffect } from "react";

// proptypes
import PropTypes from "prop-types";

// CSS
import "./Cats.css";

function Cats({ cats, updateScores }) {
  const [selectedCats, setSelectedCats] = useState([]);

  const selectRandomCats = () => {
    const shuffledCats = cats.sort(() => Math.random() - 0.5); // tri aléatoire -> création d'une nouvelle liste
    const newSelectedCats = shuffledCats.slice(0, 2); // les deux premiers éléments de la liste
    setSelectedCats(newSelectedCats);
  };

  // Appeler la fonction pour sélectionner aléatoirement les chats au chargement initial
  useEffect(() => {
    selectRandomCats(); // appel de la fonction
  }, []); // exécution lors du montage du composant

  // MAJ du score + nouveaux chats
  const handleCatClick = (selectedCat) => {
    updateScores(selectedCat.name); // score incrémenté quand on clique sur l'image du chat
    selectRandomCats(); // nouvelle fournée de deux chats aléatoirement
  };

  return (
    <>
      {selectedCats.map((cat, index) => (
        <div key={index} onClick={() => handleCatClick(cat)}>
          <img src={cat.link} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </>
  );
}

Cats.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  scores: PropTypes.object.isRequired,
  updateScores: PropTypes.func.isRequired,
};

export default Cats;
