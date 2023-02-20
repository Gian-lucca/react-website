import React from 'react'
import './footer.css'
import Wave from "../../img/wave.png";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
            <a href="https://www.linkedin.com/in/gianlucca-augusto-745485237/" target="_blank"><BsLinkedin color="white" size={"3rem"}/></a>
            <a href="https://github.com/Gian-lucca" target="_blank"><FaGithub color="white" size={"3rem"}/></a>
            <a href="https://www.instagram.com/gianlucaaugusto/" target="_blank"><BsInstagram color="white" size={"3rem"}/></a>
        </div>
        <span>Copyright © Gianlucca Augusto - Todos os direitos reservados.</span>
      </div>
    </div>
  )
}

export default Footer