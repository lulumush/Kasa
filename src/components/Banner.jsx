import React from "react"
import { useLocation } from 'react-router-dom';

import HomeBanner from "../assets/home_img.png"
import AboutBanner from "../assets/about_img.png"

//Component that displays the image based on the page (home or about)
function Banner() {
  const url = useLocation() //returns current URL
  return (
    <section className={url.pathname === "/" ? "banner" : url.pathname === "/about" ? "about__banner" : null}>
      {url.pathname === "/" ? <h1>Chez vous, partout et ailleurs</h1> : null}
      <img src={url.pathname === "/" ? HomeBanner : url.pathname === "/about" ? AboutBanner : null} alt="Paysage montagneux"/>          
    </section>
  )
}

export default Banner