import React from 'react'
import ban1 from "../assets/zenban1.png"
import ban2 from "../assets/zenban2.png"
import { Col, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
    <section id='ban'>
        <div className="container">
            <Row className="row row-cols-1 row-cols-xl-2">
                <Col>
                <div className="banimg1">
                        <img src={ban1} alt="ban1" />
                </div>
                </Col>
                <Col>
                <div className="bantext1">
                    <h3>Are you ready to transform your future?</h3>
                    <h2>Learn With Us</h2>
                    <p>At NextZenAcademy, we don’t just teach — we empower. Whether you're starting your journey or upskilling for the next big leap, our expert-led training, flexible batches, and hands-on approach are here to help you unlock your full potential.</p>
                    <h4>Join us today — and take the first step toward becoming the best version of yourself.</h4>
                    <button>EXPLORE</button>
                </div>
                </Col>
            </Row>
             <Row className="row row-cols-1 row-cols-xl-2 banbot">
                <Col>
                <div className="bantext2">
                    <h3>Are you ready to transform your future?</h3>
                    <h2>Learn With Us</h2>
                    <p>At NextZenAcademy, we don’t just teach — we empower. Whether you're starting your journey or upskilling for the next big leap, our expert-led training, flexible batches, and hands-on approach are here to help you unlock your full potential.</p>
                    <h4>Join us today — and take the first step toward becoming the best version of yourself.</h4>
                    <button>EXPLORE</button>
                </div>
                </Col>
                <Col>
                <div className="banimg2">
                        <img src={ban2} alt="ban2" />
                </div>
                </Col>
            </Row>
        </div>
    </section>
    </>
  )
}

export default Banner