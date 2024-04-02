import { useState } from "react";

export default function CatList() {
  const cat = [
    {
      name: "Chaton allongé",
      link: "imag/cat-551554_1280.jpg",
    },
    {
      name: "Chat regarde haut",
      link: "imag/cat-1192026_1280.jpg",
    },
    {
      name: "Chat tigré yeux bleu",
      link: "imag/cat-5439867_960_720.jpg",
    },
    {
      name: "Chat pate",
      link: "imag/hou-cave-2845511_1280.jpg",
    },

    {
      name: "Chat grimpe",
      link: "imag/ff.jpg",
    },

    {
      name: "Chat baille",
      link: "imag/cat-png-17.jpg",
    },

    {
      name: "Trois Châtons",
      link: "imag/h.jpg",
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
        </div>
      ))}
    </div>
  );
}