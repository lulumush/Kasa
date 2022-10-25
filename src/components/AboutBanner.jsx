import React from "react"
import Logo from "../assets/about_img.png"

function AboutBanner() {
  return (
    <section className="about__banner">
      <img src={Logo} alt="Paysage montagneux"/>          
    </section>
  )
}

export default AboutBanner