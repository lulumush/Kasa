import React from "react"
import { useLocation } from 'react-router-dom';

import HomeBanner from "../assets/home_img.png"
import AboutBanner from "../assets/about_img.png"

function Banner() {
  const url = useLocation()
  //console.log(url)
  return (
    <section className="banner">
      {url.pathname === "/" ? <h1>Chez vous, partout et ailleurs</h1> : null}
      <img src={url.pathname === "/" ? HomeBanner : url.pathname === "/about" ? AboutBanner : null} alt="Paysage montagneux"/>          
    </section>
  )
}

export default Banner