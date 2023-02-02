import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/services">
          <li>Servies</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
