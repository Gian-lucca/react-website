import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contacts/Contacts'


const App = () => {
  return (
    <>
        <Navbar/>
        <Intro/>
        <Services/>
        <Experience/>
        <Portfolio/>
        <Testimonials/>
        <Contacts/>
    </>
  )
}

export default App