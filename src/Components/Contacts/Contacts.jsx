import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';


const Contacts = () => {
  return (
    <div className="contact-form" id="contatos">
      <div className="n-left">
        <div className="awesone">
          <span>Entre</span>
          <br></br>
          <span>em Contato</span>

          <div className="contact__options">

            <article className="contact__option">
              <MdOutlineEmail className='contact__opition-icon'/>
              <h4>Email</h4>
              <h5>gianlucca.augusto@gmail.com</h5>
              <a href="mailto:gianlucca.augusto@gmail.com" target="_blank">Enviar</a>
            </article>

            <article className="contact__option">
              <BsInstagram className='contact__opition-icon'/>
              <h4>Instagram</h4>
              <h5>@gianlucaaugusto</h5>
              <a href="https://www.instagram.com/gianlucaaugusto/" target="_blank">Envie um Direct</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__opition-icon'/>
              <h4>WhatsApp</h4>
              <h5>(21)96541-5563</h5>
              <a href="https://wa.me/21965415563" target="_blank">Envie uma Mensagem</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts