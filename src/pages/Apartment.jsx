import React from "react"
import { useParams, Navigate } from "react-router-dom"

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Tags from '../components/Tags'
import Dropdown from "../components/Dropdown"
import Rating from "../components/Rating"
import Footer from '../components/Footer'

import Datas from "../datas/rentals.json"



function Apartment() {
  const params = useParams();
  const rental = Datas.find((item => item.id === params.id));
  const equipment = rental.equipments.map((item) =>
    <li key={item}>{item}</li>
  )
  if (!rental){
    return <Navigate to="*" />
  }
  else{
    return (
      <>
        <Header />
        <main>
          <Carrousel picture={rental.pictures} alt={rental.title}/>
          <section className="apartment">
            <div className="apartment__detail">
              <div className="apartment__detail--name">
                <h1>{rental.title}</h1>
                <p>{rental.location}</p>
                <div className="apartment__detail--tag">
                  {rental.tags.map((item) =>
                    <Tags key={item} name={item} />
                  )}
                </div>
              </div>
              <div className="apartment__detail__host">
                <div className="apartment__detail__host--name">
                  <p>{rental.host.name}</p>
                  <img src={rental.host.picture} alt={rental.host.name} />
                </div>
                <div className="apartment__detail__host--rating">
                    <Rating rate={rental.rating} />
                </div>
                                
              </div>
            </div>
            <div className="apartment__dropdown">
              <Dropdown class="apartment__dropdown" title="Description" content={rental.description}/>
              <Dropdown class="apartment__dropdown" title="Équipements" content={<ul>{equipment}</ul>}/>
            </div>
          </section>
        </main>          
        <Footer />
      </>
    )
  }
  
  }
  
  export default Apartment