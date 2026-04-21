import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'


const Conntactt = () => {
  return (
     <section id='con' className='contt'>
        <div className="container">
            <div className="conhed">
            <Row className="row row-cols-1 row-cols-xl-2">
                <Col>
                    <div className="conh2h4">
                        <h2>Get in Touch</h2>
                        <h4>Help us with your details and we will get in touch with you</h4>
                        <div className="conloh5">
                            <div className="">
                                <i><IoLocation /></i>
                            </div>
                            <div className="">
                                <h5>NextZenAcademy, Sec-3, Noida</h5>
                            </div>
                        </div>

                        <div className="conloh5">
                            <div className="">
                                <i><FaPhoneAlt /></i>
                            </div>
                            <div className="">
                                <h5>+91 9315832255</h5>
                            </div>
                        </div>

                        <div className="conloh5">
                            <div className="">
                                <i><MdEmail /></i>
                            </div>
                            <div className="">
                                <h5>nextzenacademy.in@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="conform">
                   <form action="">

                    <div className="coninput">
                        <input type="text"  placeholder='Name' required/>
                    </div>
                     <div className="coninput">
                        <input type="number"  placeholder='Number' required/>
                    </div>
                     <div className="coninput">
                        <input type="email"  placeholder='Email' required/>
                    </div>
                    <div className="conmessage">
                        <textarea name="" id="" placeholder='Massage'></textarea>
                    </div>

                    <button className='conbtn' type='submit' required>Contact</button>
                    
                   </form>
                </div>
                </Col>
            </Row>
            </div>
        </div>
    </section>
  )
}

export default Conntactt