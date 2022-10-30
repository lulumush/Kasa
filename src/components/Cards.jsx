import React from "react"

import Datas from "../datas/rentals.json"

import Card from "../components/Card"

//Component that collects all renting data and displays it
function Cards() {
  return (
    <section className="home__cards">
        {Datas.map((card) =>
        //Single renting display
        <Card
            key={card.id}
            id={card.id}
            title={card.title}
            cover={card.cover}
        />
        )}         
    </section>
    
  )
}

export default Cards