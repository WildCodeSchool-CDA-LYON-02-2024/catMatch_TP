import { useState } from "react";

export default function CatList() {
  const cat = [
    {
      name: "Chaton allongé",
      link: "images/allongé.jpg",
      Compteur: 0,
    },
    {
      name: "Chat regarde haut",
      link: "images/regardhaut.jpg",
      Compteur: 0,
    },
    {
      name: "Chat tigré yeux bleu",
      link: "images/blue.jpg",
      Compteur: 0,
    },
    {
      name: "Chat pate",
      link: "images/pate.jpg",
      Compteur: 0,
    },
    {
      name: "Chat grimpe",
      link: "images/grimpe.jpg",
      Compteur: 0,
    },
    {
      name: "Chat baille",
      link: "images/baille.jpg",
      Compteur: 0,
    },
    {
      name: "Trois Châtons",
      link: "images/trois.jpg",
      Compteur: 0,
    },
  ];

  const [selectedCats, setSelectedCats] = useState(getRandomCats());

  function getRandomCats() {
    const shuffledCats = cat.sort(() => 0.5 - Math.random());
    return shuffledCats.slice(0, 2);
  }

  const handleClick = () => {
    setSelectedCats(getRandomCats());
  };

  return (
    <div>
      {selectedCats.map((cats, index) => (
        <div key={index}>
          <img src={cats.link} alt="cat" onClick={handleClick} />
          <p>{cats.name}</p>
          <p>Vote : {cats.Compteur}</p>
        </div>
      ))}
    </div>
  );
}


    