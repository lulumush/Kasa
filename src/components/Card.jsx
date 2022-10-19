import React from "react"
import {Link} from "react-router-dom"

function Card({id, title, cover}) {
  return (
    <article key={id} className="home__cards--card">
        <Link to={`/apartments/${id}`}>
            <img src={cover} alt={title}/>
            <p>{title}</p>
        </Link>
    </article>
  )
}

export default Card