import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="link" to="/">
        {" "}
        Home
      </Link>
      <Link className="link" to="/score">
        Score-Page
      </Link>
    </nav>
  );
}
