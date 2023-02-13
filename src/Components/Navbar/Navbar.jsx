import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">

        <div className="n-left">
            <div className="n-name">Gianlucca</div>
            <span>Toggle</span>
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Experiencia</li>
                    <li>Portfólio</li>
                    <li>Depoimentos</li>
                </ul>
            </div>
            <button className="button n-button">Contato</button>
        </div>

    </div>
  )
}

export default Navbar