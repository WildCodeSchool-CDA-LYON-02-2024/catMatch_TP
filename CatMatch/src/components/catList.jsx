import React, { useState } from "react";

export default function CatList() {
  const cat = [
    {
      name: "Chaton allongé",
      link: "imag/cat-339400_960_720.jpg",
      counter: 0,
    },
    {
      name: "Chat regarde haut",
      link: "imag/cat-1192026_1280.jpg",
      counter: 0,
    },
    {
      name: "Chat tigré yeux bleu",
      link: "imag/cat-5439867_960_720.jpg",
      counter: 0,
    },
    {
      name: "Chat pate",
      link: "imag/hou-cave-2845511_1280.jpg",
      counter: 0,
    },
    {
      name: "Chat grimpe",
      link: "imag/cat-5098930_1280.jpg",
      counter: 0,
    },
    {
      name: "Chat baille",
      link: "imag/cat-5098932_640.jpg",
      counter: 0,
    },
    {
      name: "Trois Châtons",
      link: "imag/alley-cat-7367554_640.jpg",
      counter: 0,
    },
  ];

  const [selectedCats, setSelectedCats] = useState(getRandomCats());
  const [counters, setCounters] = useState(cat.map(() => 0));

  function getRandomCats() {
    const shuffledCats = cat.sort(() => 0.5 - Math.random());
    return shuffledCats.slice(0, 2);
  }

  const handleClick = (index) => {
    const newCats = [...selectedCats];
    const newCounters = [...counters];
    newCats[index] = cat[Math.floor(Math.random() * cat.length)]; 
    newCounters[index]++; 
    setSelectedCats(newCats);
    setCounters(newCounters);
  };

  return (
    <div>
      {selectedCats.map((cat, index) => (
        <div key={index}>
          <img src={cat.link} alt="cat" onClick={() => handleClick(index)} />
          <p>{cat.name}</p>
          <p>Counter: {counters[index]}</p>
        </div>
      ))}
    </div>
  );
}
