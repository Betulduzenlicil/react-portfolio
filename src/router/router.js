import React from 'react'
import {Routes, Route} from "react-router-dom"
import Projects from '../pages/projects/Projects'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import About from '../pages/about/About'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import NotFound from '../components/Error/NotFound'
import Details from '../components/Details'


const router = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default router
