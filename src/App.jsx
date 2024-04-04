import { useState } from "react";
import "./App.css";
import CatList from "./components/CatList";
import CatService from "./services/CatService";
import Navbar from "./components/Navbar";

const service = new CatService();

function App() {
 

  const [cats, setCats] = useState(service.getCats());
  const onClick = (id) => {
    service.addScore(id);
    setCats(service.getCats());
  };

  return (
    <section className="pageContainer">
      <Navbar />
      <div className="catListContainer">
        {cats.map((cat, index) => (
          <div className="catListContainer" key={index}>
            <CatList
              name={cat.name}
              img={cat.link}
              id={cat.id}
              score={cat.score}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
