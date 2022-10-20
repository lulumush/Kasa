import React from "react"
import { useParams, Navigate } from "react-router-dom"

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Tags from '../components/Tags'
import Footer from '../components/Footer'

import Datas from "../datas/rentals.json"


function Apartment() {
  const params = useParams();
  const rental = Datas.find((item => item.id === params.id));
  if (!rental){
    return <Navigate to="*" />
  }
  else{
    return (
      <>
        <Header />
        <main>
          <Carrousel picture={rental.pictures} alt={rental.title}/>
          <section className="apartment__detail">
            <h1>{rental.title}</h1>
            <p>{rental.location}</p>
            <div className="apartment__tags">
              {rental.tags.map((item) =>
                <Tags key={item} name={item} />
              )}
            </div>
          </section>
        </main>          
        <Footer />
      </>
    )
  }
  
  }
  
  export default Apartment