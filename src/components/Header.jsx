import React from "react"
import Logo from "../assets/logo.png"
import {NavLink} from "react-router-dom";

function Header() {
    return (
      <header>
        <div className="header"> 
          <img src={Logo} alt="Logo Kasa"/>
          <nav className="header__nav">
              <NavLink to="/" end>Accueil</NavLink>
              <NavLink to="/about">A Propos</NavLink>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Header