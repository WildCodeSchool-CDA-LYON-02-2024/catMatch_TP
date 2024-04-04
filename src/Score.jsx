import Navbar from "./components/Navbar";
import CatList from "./components/CatList";
import CatService from "./services/CatService";
import "./App.css";
const service = new CatService();

export default function Score(){
    const cat = service.data;

    return (
        <section className="pageContainer">
        <Navbar />
        <div className="catListContainer">
          {cat.map((cat, index) => (
            <div className="catListContainer" key={index}>
              <CatList
                name={cat.name}
                img={cat.link}
                id={cat.id}
                score={cat.score}
              />
            </div>
          ))}
        </div>
      </section>
      );
}