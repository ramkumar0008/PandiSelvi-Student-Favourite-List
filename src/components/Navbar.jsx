import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Favourite Students</h2>

      <div className="nav-links">
        <Link to="/">Student List</Link>
        <Link to="/favourites">Favourite Students</Link>
      </div>
    </nav>
  );
};

export default Navbar;