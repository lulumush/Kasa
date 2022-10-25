import React from "react"
import { useState } from 'react'

import ArrowUp from "../assets/arrow_up.png"
import ArrowDown from "../assets/arrow_down.png"

function Dropdown(props) {
  const [open, setOpen] = useState(false)
  return (
    <div key={props.title} className={props.class+"__content"}>
      <div className={props.class+"__content--title"} onClick={() => setOpen(!open)}>
        <p>{props.title}</p>
        <img src={!open ? ArrowDown : ArrowUp} alt="icône chevron"/>
      </div>
      {open ? <div className={props.class+"__content--description"}>{props.content}</div> : null}
    </div>
  )
}

export default Dropdown