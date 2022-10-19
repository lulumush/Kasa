import React from "react"
import Logo from "../assets/home_img.png"

function HomeBanner() {
  return (
    <section className="home__banner">
      <h1>Chez vous, partout et ailleurs</h1>
      <img src={Logo} alt="Paysage montagneux au bord de l'eau"/>          
    </section>
  )
}

  export default HomeBanner