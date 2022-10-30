import React from "react"

//Component that displays tags of a rental
function Tags(props) {
    //console.log(props.tag.length)

    return(
        <p className="apartment__tags--name">{props.name}</p>  
        
    )  
}

export default Tags