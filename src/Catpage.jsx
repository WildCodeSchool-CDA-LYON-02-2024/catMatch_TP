import { useState } from "react";
import "./Catpage.css";
import CatMatch from "./CatMatch";

import Catservice from "./Service/catService";

const Service = new Catservice();

function Catpage() {
  const [cats, setCats] = useState(Service.getTwoCats());

  const clicker = (id) => {
    Service.addScore(id);
    setCats(Service.getTwoCats());
  };

  return (
    <>
      <div className="catMatchs">
        {cats.map((cat, index) => (
          <div key={index}>
            <CatMatch
              image={cat.link}
              name={cat.name}
              score={cat.score}
              id={cat.id}
              clicker={clicker}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Catpage;
