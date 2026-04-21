import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import cardd from "../assets/card.png"

const Experts = () => {
  const [index, setIndex] = useState(0)

  const data = [
    { name: "Ms. SHAMIM 1" },
    { name: "Ms. SHAMIM 2" },
    { name: "Ms. SHAMIM 3" },
    { name: "Ms. SHAMIM 4" },
    { name: "Ms. SHAMIM 5" },
    { name: "Ms. SHAMIM 6" },
  ]

  // default slides per view (xl)
  let perView = 4

  if (window.innerWidth < 1200) perView = 2
  if (window.innerWidth < 768) perView = 1

  const next = () => {
    if (index < data.length - perView) {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <section id="expert">
      <div className="container">

        <h2 className="text-center mb-4 exh2">
          The Experts You'll Learn From
        </h2>

        {/* Slider */}
        <div className="slider-wrapper">

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * (100 / perView)}%)`
            }}
          >

            {data.map((item, i) => (
              <div
                className="slider-item"
                key={i}
                style={{ flex: `0 0 ${100 / perView}%` }}
              >
                <Card className="w-100">
                  <Card.Img variant="top" src={cardd} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Some quick example text.
                      Some quick example text.
                      Some quick example text.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}

          </div>

        </div>

        {/* Buttons */}
        <div className="slider-btns text-center mt-3">
          <button onClick={prev}>⬅</button>
          <button onClick={next}>➡</button>
        </div>

      </div>
    </section>
  )
}

export default Experts