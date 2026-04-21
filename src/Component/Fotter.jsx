import React from 'react'
import zenlogo from "../assets/zenlogo.png"
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

const Fotter = () => {
  return (
    <section id='fotter'>
        <div className="container">
            <div className="fhed">
                <div className="fimg">
                    <img src={zenlogo} alt="logo" />
                </div>
                <div className="ficonhed">
                    <div className="ficon">
                        <i><FaFacebookF /></i>
                    </div>

                     <div className="ficon">
                        <i><RxCross2 /></i>
                    </div>

                     <div className="ficon">
                        <i><FaInstagram /></i>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Fotter