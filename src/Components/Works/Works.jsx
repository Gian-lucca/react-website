import React, { useContext } from 'react'
import './works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className="works">
        <div className="awersome">
            <span style={{ color: darkMode ? "white" : "" }}>Funciona para todas essas</span>
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

            <div className="blur" style={{background: '#C1F5FF', top: '10rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>

        <div className="w-right">

                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                >

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
            </motion.div>

            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
            
        </div>
    </div>
  )
}

export default Works