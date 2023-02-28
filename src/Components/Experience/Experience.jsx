import React, { useContext } from 'react'
import { themeContext } from '../../Context'
import './experience.css'

const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id='experience'>

      <div className="anchievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+2</div>
      <span  style={{color: darkMode?'white':''}}>Anos </span>
        <span>Experiencia</span>
      </div>

      <div className="anchievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+150</div>
        <span  style={{color: darkMode?'white':''}}>Completos </span>
        <span>Projetos</span>
      </div>

      <div className="anchievement">
      <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+100</div>
        <span  style={{color: darkMode?'white':''}}>Clientes </span>
        <span>Atendidos</span>
      </div>

    </div>
  )
}

export default Experience