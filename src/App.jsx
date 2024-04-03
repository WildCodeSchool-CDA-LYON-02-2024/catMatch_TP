import { useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import CatService from "./services/CatService";

function App() {
  const service = new CatService();
  console.log(service.data);

  const [cats, setCats] = useState(service.getCats())
  const onClick = (id) => {
console.log(id);
  }

  return (
    <>
      {cats.map((cat, index) => (
        <div key={index}>
          <CatList name={cat.name} img={cat.link} id={cat.id} score={cat.score} onClick={onClick}/>
        </div>
      ))}
    </>
  );
}

export default App;
