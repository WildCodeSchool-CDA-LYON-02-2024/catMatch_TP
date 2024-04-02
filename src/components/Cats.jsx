import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Cats.css";

function Cats({ cats }) {
  const [selectedCats, setSelectedCats] = useState([]);

  // Fonction pour sélectionner aléatoirement deux chats
  const selectRandomCats = () => {
    let newSelectedCats;
    while (
      !newSelectedCats ||
      JSON.stringify(newSelectedCats) === JSON.stringify(selectedCats)
    ) {
      const shuffledCats = cats.sort(() => Math.random() - 0.5);
      newSelectedCats = shuffledCats.slice(0, 2);
    }
    setSelectedCats(newSelectedCats);
  };

  // Appeler la fonction pour sélectionner aléatoirement les chats au chargement initial
  useEffect(() => {
    selectRandomCats();
  }, []);

  // Gestionnaire d'événements pour changer les chats lorsqu'on clique sur une image
  const handleCatClick = () => {
    selectRandomCats();
  };

  return (
    <>
      {selectedCats.map((cat, index) => (
        <div key={index} onClick={handleCatClick}>
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
};

export default Cats;
