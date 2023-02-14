import React from 'react'
import './intro.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Olá! Eu sou</span>
                <span>Gianlucca Augusto</span>
                <span>Desenvolvedor frontend com alto nível de experiência, produzindo um trabalho de qualidade</span>
            </div>

            <button className="button i-button">Contate-me</button>

            <div className="i-icons">
              <a href="https://www.linkedin.com/in/gianlucca-augusto-745485237/" target="_blank"><BsLinkedin/></a>
              <a href="https://github.com/Gian-lucca" target="_blank"><FaGithub/></a>
              <a href="https://www.instagram.com/gianlucaaugusto/" target="_blank"><BsInstagram/></a>
            </div>
        </div>

        <div className="i-right">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={boy} alt="" />
           <div>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
           </div>
        </div>

    </div>
  )
}

export default Intro