import Navbar from "./components/Navbar";
import CatList from "./components/CatList";
import CatService from "./services/CatService";

const service = new CatService();

export default function Score(){
    const cat = service.data;

    return (
        <>
        <Navbar />
        {cat.map((cat, index) => (
        <div key={index}>
          <CatList
            name={cat.name}
            img={cat.link}
            id={cat.id}
            score={cat.score}
          />
        </div>
        ))}
        </>
      );
}