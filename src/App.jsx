import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CatMatch from "./CatMatch";
import Scorepage from "./Scorepage";
import Catservice from "./Service/catService";

const Service = new Catservice();

function App() {
  const [cats, setCats] = useState(Service.getTwoCats());

  const clicker = (id) => {
    Service.addScore(id);
    setCats(Service.getTwoCats());
  };

  return (
    <Router>
      <Routes>
        <Route path="/score" element={<Scorepage />} />
        <Route
          path="/"
          element={cats.map((cat, index) => (
            <div className="cats" key={index}>
              <CatMatch
                image={cat.link}
                name={cat.name}
                score={cat.score}
                id={cat.id}
                clicker={clicker}
              />
            </div>
          ))}
        />
      </Routes>
    </Router>
  );
}

export default App;
