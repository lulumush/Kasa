import React from "react"
import { useState } from 'react'

import ArrowUp from "../assets/arrow_up.png"
import ArrowDown from "../assets/arrow_down.png"

function Dropdown(props) {
  const [open, setOpen] = useState(false)
  return (
    <div key={props.title} className="about__content">
      <div className="about__content--title" onClick={() => setOpen(!open)}>
        <p>{props.title}</p>
        <img src={!open ? ArrowUp : ArrowDown} alt="arrow icon"/>
      </div>
      {open ? <div className="about__content--description">{props.content}</div> : null}
    </div>
  )
}

export default Dropdown