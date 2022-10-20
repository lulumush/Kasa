import React from "react"
import {Link} from "react-router-dom"

function Card(props) {
  return (
    <article key={props.id} className="home__cards--card">
        <Link to={`/apartments/${props.id}`}>
            <img src={props.cover} alt={props.title}/>
            <p>{props.title}</p>
        </Link>
    </article>
  )
}

export default Card