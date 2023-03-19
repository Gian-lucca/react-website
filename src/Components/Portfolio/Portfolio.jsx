import React, { useContext } from 'react'
import './portfolio.css'
import IMG1 from '../../img/ecommerce.png'
import IMG2 from '../../img/hoc.png'
import IMG3 from '../../img/musicapp.png'
import IMG4 from '../../img/portfolio2.jpg'
import IMG5 from '../../img/portfolio4.jpg'
import IMG6 from '../../img/sidebar.png'
import { themeContext } from "../../Context";

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id='portfolio'>
      <span style={{ color: darkMode ? "white" : "" }}>Meu</span>
      <span>Portfólio</span>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Título de item de Portfólio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://gianlucca-augusto.vercel.app/" className='btn btn-primary' target={'_blank'}>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Título de item de Portfólio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://gianlucca-augusto.vercel.app/" className='btn btn-primary' target={'_blank'}>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Título de item de Portfólio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://gianlucca-augusto.vercel.app/" className='btn btn-primary' target={'_blank'}>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Título de item de Portfólio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://gianlucca-augusto.vercel.app/" className='btn btn-primary' target={'_blank'}>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Título de item de Portfólio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://gianlucca-augusto.vercel.app/" className='btn btn-primary' target={'_blank'}>Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Título de item de Portfólio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target={'_blank'}>Github</a>
          <a href="https://gianlucca-augusto.vercel.app/" className='btn btn-primary' target={'_blank'}>Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio