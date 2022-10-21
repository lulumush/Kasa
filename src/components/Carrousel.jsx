import React, { useState } from "react"

import LeftArrow from "../assets/arrow_left.png"
import RightArrow from "../assets/arrow_right.png"

function Carrousel(props) {
    const [imgIndex, setImgIndex] = useState(0)
    //console.log(props.picture.length)

    function previous() {        
        setImgIndex(imgIndex === 0 ? props.picture.length -1 : imgIndex -1)
        //console.log(imgIndex)
    }

    function next() {
        setImgIndex(imgIndex === props.picture.length -1 ? 0 : imgIndex +1)
        //console.log(imgIndex)
    }
    return(
        <section className="carrousel">            
            <img src={props.picture[imgIndex]} alt={props.alt} className="carrousel__images"/>   
            {props.picture.length > 1 ? <> <img src={LeftArrow} alt="Left arrow" className="carrousel__left arrow" onClick={previous}/>            
                <img src={RightArrow} alt="Right arrow" className="carrousel__right arrow"  onClick={next}/> 
                <p>{imgIndex +1}/{props.picture.length}</p> </> : null}          
        </section>
    )  
}

export default Carrousel