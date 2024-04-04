import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import CatComponent from "./components/CatComponent";
import CatService from "./service/CatService";

function App() {


      const service = new CatService()
    

      const [cats,setCats] = useState(service.data)

      const onclick = (id) => {
        console.log( ("PARENT : ID -->"+id));

      }



     

  return ( 
    <>
      {
      cats.map((cat, index) => (
          <div key={index}>
            <CatComponent name={cat.name} img={cat.link} socre={cat.score} id ={cat.id}onclick= {onclick}></CatComponent>
          </div>
      )
      )
      }
    </>
  );
}

export default App;
