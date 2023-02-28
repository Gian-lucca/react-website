import React from 'react'
import './navbar.css'
import Toggle from '../Toggle/Toggle'


const Navbar = () => {
  return (
    <div className="n-wrapper">

        <div className="n-left">
            <div className="n-name">Gianlucca</div>
            <Toggle/>
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#services'>Serviços</a></li>
                    <li><a href='#experience'>Experiencia</a></li>
                    <li><a href='#portfolio'>Portfólio</a></li>
                    <li><a href='#testimonial'>Depoimentos</a></li>
                </ul>
            </div>

            <a href="#contatos">
                <button className="button n-button">Contato</button>
            </a>

        </div>

    </div>
  )
}

export default Navbar