import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CatMatch({ catsData, onCatSelect }) {
  const [cat1, setCat1] = useState(null);
  const [cat2, setCat2] = useState(null);

  useEffect(() => {
    getRandomCats();
  }, [catsData]);

  const getRandomCats = () => {
    const randomIndex1 = Math.floor(Math.random() * catsData.length);
    let randomIndex2 = Math.floor(Math.random() * catsData.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * catsData.length);
    }
    setCat1(catsData[randomIndex1]);
    setCat2(catsData[randomIndex2]);
  };

  const handleCatSelect = (catId) => {
    onCatSelect(catId);
    getRandomCats();
  };

  return (
    <div className="cat-images">
      <div className="cat-container">
        {cat1 && (
          <>
            <img src={cat1.link} alt={cat1.name} />
            <button onClick={() => handleCatSelect(cat1.id)}>Vote</button>
          </>
        )}
      </div>
      <div className="cat-container">
        {cat2 && (
          <>
            <img src={cat2.link} alt={cat2.name} />
            <button onClick={() => handleCatSelect(cat2.id)}>Vote</button>
          </>
        )}
      </div>
    </div>
  );
}

CatMatch.propTypes = {
  catsData: PropTypes.array.isRequired,
  onCatSelect: PropTypes.func.isRequired,
};

export default CatMatch;
