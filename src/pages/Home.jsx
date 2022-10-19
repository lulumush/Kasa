import React from "react"

import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HomeBanner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home