import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to ="/">Movie App</Link>
                <p>FIRST REACT PROJECT</p>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to ="/favorites" className="nav-link">Favourites</Link>
                <Link to="/ToWatch" className="nav-link">ToWatch</Link>
            </div>
        </nav>
    )
}

export default NavBar;