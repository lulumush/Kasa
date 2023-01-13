import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from '../pages/Home'
import Apartments from '../pages/Apartment'
import About from '../pages/About'
import Error from '../pages/Error'


//All the possible routes
function Routing() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/apartments/:id" element={<Apartments/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
    )
  }
  
  export default Routing
