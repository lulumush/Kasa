import React from "react"
import {Link} from "react-router-dom"

//Component that displays some data of a renting (img, name)
function Card(props) {
  return (
    <article key={props.id} className="home__cards--card">
        <Link to={`/apartments/${props.id}`}>
            <img src={props.cover} alt={props.title}/>
            <div className="home__cards--title">
              <p>{props.title}</p>
            </div>
            
        </Link>
    </article>
  )
}

export default Card