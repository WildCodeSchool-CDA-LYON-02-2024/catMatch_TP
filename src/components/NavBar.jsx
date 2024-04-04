import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Chat</NavLink>
          </li>
          <li>
            <NavLink to='/score'>Score</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
