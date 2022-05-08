import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Style/Navbar.css";

export default function NavBar() {
  return (
    <div class="wrapper">
    <header>
        <div className="navbar">
            <div className="brand">
                <h2><Link className="textDecoration" to={`/`}>Ink Machine</Link></h2>
            </div>
            <ul class="menu">
                <li><Link className="nav-link" to="/category/insumos">Insumos</Link></li>
                <li><Link className="nav-link" to="/category/machine">Machine</Link></li>
                <li><Link className="nav-link" to="/category/:id">Contact</Link></li>
            </ul>
            <Link to={`/cart`}> <CartWidget/> </Link>
        </div>
    </header>
    
</div>
  );
}
