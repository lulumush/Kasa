import React from "react"
import {NavLink} from "react-router-dom";

import Logo from "../assets/logo.png"


//Component that displays the header
function Header() {
  return (
    <header>
      <div className="header"> 
        <img src={Logo} alt="Logo Kasa rouge"/>
        <nav className="header__nav">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/about">A Propos</NavLink>
        </nav>
      </div>
    </header>
  )
}
  
export default Header