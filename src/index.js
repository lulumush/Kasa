import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import Apartments from './pages/Apartments'
import About from './pages/About'


 
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/apartments/:id" element={<Apartments/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root')
)