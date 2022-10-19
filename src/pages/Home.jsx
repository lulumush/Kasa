import React from "react"

import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HomeBanner />
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home