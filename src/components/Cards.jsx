import React from "react"
import Datas from "../datas/rentals.json"
import Card from "../components/Card"

function Cards() {
  return (
    <section className="home__cards">
        {Datas.map((card) =>
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