import React from "react"

import Dropdown from "../components/Dropdown"

import Datas from "../datas/about.json"

//Component that collects data and displays it in the Dropdown component 
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