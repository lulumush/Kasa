import React from "react"
import Logo from "../assets/logo_footer.png"

function Footer() {
    return (
      <footer>
        <div className="footer"> 
            <img src={Logo} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Footer