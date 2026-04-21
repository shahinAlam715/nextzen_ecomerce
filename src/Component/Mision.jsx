import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Mision = () => {

  const data = [
    {
      title: "Vision",
      text: "To empower learners with future-ready skills and become a global leader in transformative education."
    },
    {
      title: "Mission",
      text: "To deliver high-quality, accessible, and industry-relevant courses that equip individuals to succeed in a fast-changing world."
    }
  ]

  return (
    <section id='wyz'>
      <div className="container">

        <div className="wyh4 my-4">
          <h4>Vision and Mission</h4>
        </div>

        <Row xs={1} md={2} className="g-4 whcard">

          {data.map((item, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm mission-card">

                <Card.Body>
                  <Card.Title className='wh2'>
                    {item.title}
                  </Card.Title>

                  <Card.Text className='wp'>
                    {item.text}
                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
          ))}

        </Row>

      </div>
    </section>
  )
}

export default Mision