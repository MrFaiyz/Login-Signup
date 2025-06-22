import { Link } from 'react-router-dom';
import '../css/NavBar.css'; 
import logo from '../assets/logo.jpg';



function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-brand">
                   <img src={logo} alt="Logo" className="nav-logo" />

                    <p className="brand-name">Dev-Faiyz</p>
                </div>
                <div className="nav-links-container">
                    <Link to="/" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
