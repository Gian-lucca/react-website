import React from 'react'
import './services.css'
import Card from '../Card/Card'
import HertEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from '../Services/resume.pdf'

const Services = () => {
  return (
    <div className="services">
        <div className="awersome">
          <span>Meu incrível</span>
          <span>Serviço</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque ab architecto 
            <br/>
            cumque necessitatibus modi explicabo commodi eaque nobis quaerat!
          </span>

          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          
          <div className="blur" style={{background: '#C1F5FF', top: '17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
        
        <div className="cards">

          <div style={{left: '14rem'}}>
            <Card emoji = {HertEmoji} heading = {'Tecnologias  Front end'} detail = {"HTML, CSS, Drupal, JavaScript, React, BootsTrap, TypeScript"}/>
          </div>

          <div style={{ top: "12rem", left: "-4rem"}}>
            <Card emoji = {Glasses} heading = {'Tecnologias  Back end'} detail = {"PHP, MySQL"}/>
          </div>

          <div style={{ top: "19rem", left: "12rem"}}>
            <Card emoji = {Humble} heading = {'Designer'} detail = {"Photoshop"}/>
          </div>
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)"}}></div>
    </div>
  )
}

export default Services