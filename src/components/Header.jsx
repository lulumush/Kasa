import React from "react"
import Logo from "../assets/logo.png"
import {Link} from "react-router-dom";

function Header() {
    return (
      <div className="header"> 
        <img src={Logo} alt="Logo Kasa"/>
        <div className="header__nav">
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </div>
      </div>
    )
  }
  
  export default Header