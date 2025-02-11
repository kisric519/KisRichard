import { React,useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <nav>
            <Link to="/" className="title">Cím oldal</Link>
            <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">Rólunk</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Szolgáltatások</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kapcsolat</NavLink>
                </li>
                <li>
                    <NavLink to="https://hengersor.hu">Hengersor</NavLink>
                </li>
            </ul>
        </nav>
    );
}