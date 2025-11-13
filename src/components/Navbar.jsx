import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/accesorios">Accesorios</Link>
    </nav>
  );
};

export default Navbar;