import React from "react"

import Header from '../components/Header'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'

import Datas from "../datas/about.json"

function About() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <section className="about">
        {Datas.map((data) =>
          <Dropdown key={data.title} title={data.title} content={data.content} class="about" />
        )}         
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About