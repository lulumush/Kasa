import React from "react"

import Dropdown from "../components/Dropdown"
import Datas from "../datas/about.json"

function About() {
  return (
    <section className="about">
        {Datas.map((data) =>
        <Dropdown
            key={data.title}
            title={data.title}
            content={data.content}
            
        />
        )}         
    </section>
  )
}

export default About