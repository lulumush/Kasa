import React from "react"

import Logo from "../assets/logo_footer.png"

//Component that displays the footer
function Footer() {
  return (
    <footer>
      <div className="footer"> 
          <img src={Logo} alt="Logo Kasa blanc"/>
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
  
export default Footer