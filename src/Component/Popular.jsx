import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import popular1 from "../assets/popular1.png"
import popular2 from "../assets/popular2.png"

const Popular = () => {
  return (
    <section id='pop'>
        <div className="container">
                <div className="poph2">
                    <h2>Popular Course</h2>
                </div>

            <div className="pcard">

                <div className="popcard">
                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='pop1img'  variant="top" src={popular1} />
                    <Card.Body>
                        <Card.Title>60hr Internship</Card.Title>
                        <Card.Text>
                        Our courses are designed in collaboration with industry experts to ensure you gain skills that employers truly value.
                        </Card.Text>
                         <div className="">
                            <del>3000$</del>
                            <span>2000$</span>
                        </div>
                        <Button variant="primary">Get This Course</Button>
                    </Card.Body>
                    </Card>
 
                </div>

                 <div className="popcard">
                
                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className='pop2img' variant="top" src={popular2} />
                    <Card.Body>
                        <Card.Title>Advanced MX Excel</Card.Title>
                        <Card.Text>
                        Our courses are designed in collaboration with industry experts to ensure you gain skills that employers truly value.
                        </Card.Text>
                        <div className="">
                            <del>3000$</del>
                            <span>2000$</span>
                        </div>
                        <Button variant="primary">Get This Course</Button>
                    </Card.Body>
                    </Card>
 
                </div>


            </div>
        </div>
    </section>
  )
}

export default Popular