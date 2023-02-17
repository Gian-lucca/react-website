import React from 'react'
import './services.css'
import Card from '../Card/Card'
import HertEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"

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
          <button className="button s-button">Download CV</button>
          <div className="blu s-blur1" style={{ background: "#ABF1FF94"}}></div>
        </div>

        <div className="div cards">
          <div>
            <Card emoji = {HertEmoji} heading = {'Desenvolvedor Front end'} detail = {"HTML, CSS, Drupal, JavaScript, React, BootsTrap, TypeScript"}/>
          </div>
        </div>
    </div>
  )
}

export default Services