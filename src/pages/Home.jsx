import React from "react"

import Header from '../components/Header'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Cards />
      </main>
        <Footer />
    </>
  )
}

export default Home