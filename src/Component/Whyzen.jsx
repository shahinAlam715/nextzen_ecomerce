import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Whyzen = () => {

     const data = [
    {
      title: "No-Hassle Training ",
      text: "NextZenAcademy is one of India’s premier institutes, known for delivering top-quality training with a personalized approach. With a maximum of just 30 students per batch, we ensure individual attention and meaningful interaction. We do not believe in mass classroom sessions — every aspiring student deserves focused guidance. At NextZenAcademy, we nurture the bright future of India, one student at a time."
    },
    {
      title: "Flexible Batches to Fit Your Schedule",
      text: "At NextZenAcademy, we offer flexible live batches designed to help you learn, grow, and advance your career—on your terms. Whether you're a student or a working professional, our weekday and weekend batches are tailored to suit your busy schedule. Our programs are thoughtfully crafted to empower aspiring learners and corporate employees who are ready to become experts in their field—without compromising on quality or convenience."

    }
  ]

  return (
    <section id='wyz'>
      <div className="container">

        <div className="wyh4 my-4">
          <h4>WHY NextZenAcademy?</h4>
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

export default Whyzen