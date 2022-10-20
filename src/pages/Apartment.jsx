import React from "react"
import { useParams, Navigate } from "react-router-dom"

import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
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
        </main>          
        <Footer />
      </>
    )
  }
  
  }
  
  export default Apartment