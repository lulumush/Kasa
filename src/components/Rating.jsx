import React from "react"

import rateOn from "../assets/rate_on.png";
import rateOff from "../assets/rate_off.png";

function Rating(props) {

    const rate=[]
    for (let i = 0; i < props.rate; i++){
        rate.push(i)
    }
    
    const rateDiff=[]
    for (let i = 0; i < 5-props.rate; i++){
        rateDiff.push(i)
    }
    
    return(
        <>
            {rate.map((item) =>
                <img src={rateOn} key={item} alt="Étoile colorée"/>
            )}
            {rateDiff.map((item) =>
                <img src={rateOff} key={item} alt="Étoile grisée"/>
            )}
        </>
    )
  }
  
  export default Rating