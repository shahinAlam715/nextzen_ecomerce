import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBook, FaLaptop, FaUser } from 'react-icons/fa'
import { RiGraduationCapFill } from 'react-icons/ri'

const Offer = () => {
  return (
    <>
    <section id='off'>
        <div className="container">
            <div className="offh5h2">
                <h5>OUR SPECIALITY</h5>
                <h2>What we Offer</h2>
            </div>
            <Row className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                 <Col>
                    <div className="ofcard">
                        <div className="offh2h3p">
                            <div className="officon">
                                <i><FaBook /></i>
                            </div>
                            <h2>Real-World Relevance</h2>
                            <h3>Industry-Aligned Curriculum</h3>
                            <p>Our courses are designed in collaboration with industry experts to ensure you gain skills that employers truly value.</p>
                        </div>
                    </div>
                </Col>
                 <Col>
                    <div className="ofcard">
                        <div className="offh2h3p">
                            <div className="officon">
                                <i><FaUser /></i>
                            </div>
                            <h2>Personalized Guidance</h2>
                            <h3>Industry-Aligned Curriculum</h3>
                            <p>Our courses are designed in collaboration with industry experts to ensure you gain skills that employers truly value.</p>
                        </div>
                    </div>
                </Col>
                 <Col>
                    <div className="ofcard">
                        <div className="offh2h3p">
                            <div className="officon">
                                <i><FaLaptop /></i>
                            </div>
                            <h2>Hands-On Learning</h2>
                            <h3>Industry-Aligned Curriculum</h3>
                            <p>Our courses are designed in collaboration with industry experts to ensure you gain skills that employers truly value.</p>
                        </div>
                    </div>
                </Col>
                  <Col>
                    <div className="ofcard">
                        <div className="offh2h3p">
                            <div className="officon">
                                <i><RiGraduationCapFill /></i>
                            </div>
                            <h2>Success Storiese</h2>
                            <h3>Industry-Aligned Curriculum</h3>
                            <p>Our courses are designed in collaboration with industry experts to ensure you gain skills that employers truly value.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </section>
    </>
  )
}

export default Offer