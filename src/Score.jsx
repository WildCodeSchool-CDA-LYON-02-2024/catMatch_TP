import Navbar from "./components/Navbar";
import CatList from "./components/CatList";
import "./App.css";

export default function Score(){
    
    const cat = JSON.parse(localStorage.getItem('cat'));

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