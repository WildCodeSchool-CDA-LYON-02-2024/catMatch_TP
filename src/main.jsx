import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CatMatch from "./components/CatMatch.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <nav>
      <Link to="/">Classement</Link>
      <Link to="/vote">Voter</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/vote" element={<CatMatch />} />
    </Routes>
  </BrowserRouter>
);
