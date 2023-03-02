import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import { useContext } from "react";
import { themeContext } from "./Context";

const App = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="App" style={{ background: darkMode ? "#161b22" : "",color: darkMode ? "white" : "",}}>
        <Navbar/>
        <Intro/>
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
        </div>
    </>
  )
}

export default App