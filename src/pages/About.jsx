import React from "react"

import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutContent from '../components/About'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <AboutContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default About