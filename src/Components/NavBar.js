import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Style/Navbar.css";

export default function NavBar() {
  return (
    <div class="wrapper">
    <header>
        <div class="navbar">
            <div class="brand">
                <h2><Link to={`/`}>Ink Machine</Link></h2>
            </div>
            <ul class="menu">
                <li><Link to={`/category/:id`}> Items </Link></li>
                <li><Link to={`/category/:id`}>About us</Link></li>
                <li><Link to={`/category/:id`}>Contact</Link></li>
            </ul>
            <CartWidget />
        </div>
    </header>
    
</div>
  );
}
