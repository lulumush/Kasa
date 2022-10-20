import React from "react"

import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutContent from '../components/About'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}

export default About