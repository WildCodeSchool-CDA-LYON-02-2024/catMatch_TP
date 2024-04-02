
import { useState,useEffect } from 'react';
import CatCard from './components/CatCard.jsx'
import './App.css'



const cats = [
  {
    name: 'Chaton allongé',
    link: 'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg',
    count: 0,
  },
  {
    name: 'Chat regarde haut',
    link: 'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg',
    count: 0,
  },
  {
    name: 'Chat tigré yeux bleu',
    link: 'https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_1280.jpg',
    count: 0,
  },
  {
    name: 'Chat pate',
    link: 'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_1280.jpg',
    count: 0,
  },

  {
    name: 'Chat grimpe',
    link: 'https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_1280.jpg',
    count: 0,
  },

  {
    name: 'Chat baille',
    link: 'https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_1280.jpg',
    count: 0,
  },

  {
    name: 'Trois Châtons',
    link: 'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_1280.jpg',
    count: 0,
  },
];

function App() {

  const [catList, setCatList] = useState(cats);
  const [display2Cats,setDisplay2Cats] = useState([])



useEffect(() => {
  function selectRandomCats() {
    const randomIndex1 = Math.floor(Math.random() * catList.length);
    let randomIndex2 = Math.floor(Math.random() * catList.length);

    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * catList.length);
    }

    const firstRandomCat = catList[randomIndex1];
    const secondRandomCat = catList[randomIndex2];

    console.log(firstRandomCat,"1");
    console.log(secondRandomCat,"2");

    setDisplay2Cats([firstRandomCat, secondRandomCat]);
  }

  selectRandomCats();
}, [catList]);
  

function handleClick(index) {
  console.log(display2Cats[index]);
 

}

  


  return (
    <div className='container'>
      {display2Cats.map((cat, i) => (
        <CatCard key={i} cat={cat} handleClick={()=>handleClick(i)} />
      ))}
    </div>
  );
}

export default App
