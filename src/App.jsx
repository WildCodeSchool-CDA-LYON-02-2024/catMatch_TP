import { useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import CatService from "./services/CatService";


const service = new CatService();

function App() {

  console.log(service.data);

  const [cats, setCats] = useState(service.getCats());
  const onClick = (id) => {
    console.log(id);
    service.addScore(id)
    setCats(service.getCats())
  };

  return (
    <>
      {cats.map((cat, index) => (
        <div key={index}>
          <CatList
            name={cat.name}
            img={cat.link}
            id={cat.id}
            score={cat.score}
            onClick={onClick}
          />
        </div>
      ))}
    </>
  );
}

export default App;
