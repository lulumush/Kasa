import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import Apartments from './pages/Apartments'
import About from './pages/About'
import Error from './components/Error'

 
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/apartments/:id" element={<Apartments/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root')
)