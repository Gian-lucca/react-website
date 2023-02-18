import React from 'react'
import './works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

const Works = () => {
  return (
    <div className="works">
        <div className="awersome">
            <span>Funciona para todas essas</span>
            <span>Marcas & Clientes</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa atque ab architecto 
                <br/>
                cumque necessitatibus modi explicabo commodi eaque nobis quaerat!
                <br/>
                cumque necessitatibus modi explicabo commodi eaque nobis quaerat!
                <br/>
                cumque necessitatibus modi explicabo commodi eaque nobis quaerat!
            </span>

            <button className="button s-button">Contrate-me</button>
            <div className="blur" style={{background: '#C1F5FF', top: '10rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>

        <div className="w-right">
            <div className="w-mainCirele">

                <div className="w-secCirele">
                    <img src={Upwork} alt="" />
                </div>

                <div className="w-secCirele">
                    <img src={Fiverr} alt="" />
                </div>

                <div className="w-secCirele">
                    <img src={Amazon} alt="" />
                </div>

                <div className="w-secCirele">
                    <img src={Shopify} alt="" />
                </div>

                <div className="w-secCirele">
                    <img src={Facebook} alt="" />
                </div>
            </div>

            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
            
        </div>
    </div>
  )
}

export default Works