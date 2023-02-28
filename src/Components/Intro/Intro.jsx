import React, { useContext } from 'react'
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
import { themeContext } from "../../Context";
import { motion } from "framer-motion";



const Intro = () => {

  const transition = { duration: 2, type: "spring" };
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Olá! Eu sou</span>
                <span>Gianlucca Augusto</span>
                <span>Desenvolvedor frontend com alto nível de experiência, produzindo um trabalho de qualidade</span>
            </div>
            
            <a href="#contatos">
              <button className="button i-button">Contate-me</button>
            </a>
            
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
           <motion.img
              initial={{ left: "-36%" }}
              whileInView={{ left: "-22%" }}
              transition={transition}
              src={glassesimoji}
              alt=""
            />

            <motion.div
              initial={{ top: "-4%", left: "74%" }}
              whileInView={{ left: "68%" }}
              transition={transition}
              className="floating-div"
            >
              <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />

            </motion.div>

            <motion.div
              initial={{ left: "9rem", top: "18rem" }}
              whileInView={{ left: "0rem" }}
              transition={transition}
              className="floating-div"
            >
              <FloatingDiv image={thumbup} txt1="Soluções confiáveis" txt2="e seguras" />

            </motion.div>

           <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
           <div className="blur" style={{background: '#C1F5FF', top: '17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>

    </div>
  )
}

export default Intro