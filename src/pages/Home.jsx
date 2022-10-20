import React from "react"

import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'

import Datas from "../datas/rentals.json"


function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <section className="home__cards">
        {Datas.map((card) =>
          <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
        )}         
    </section>
      </main>
        <Footer />
    </>
  )
}

export default Home