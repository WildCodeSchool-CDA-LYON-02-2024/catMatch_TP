import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <Link to="/Score">Score</Link>
    </div>
  );
}
