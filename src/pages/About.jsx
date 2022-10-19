import React from "react"

import Header from '../components/Header'
import AboutBanner from '../components/AboutBanner'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AboutBanner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default About