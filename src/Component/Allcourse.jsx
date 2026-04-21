import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import bio from "../assets/biotech.png"
import bioin from "../assets/bioin.png"
import machine from "../assets/machine.png"
import digi from "../assets/digi.png"
import child from "../assets/child.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Allcourse = () => {

    const [index, setIndex] = useState(0)
      const [perView, setPerView] = useState(4)
      const [transition, setTransition] = useState(true)
    
      const courses = [
        { title: "Biotech Course", price: 1500, img: bio },
        { title: "Bioinformatics", price: 1500, img: bioin },
        { title: "Machine Learning", price: 1500, img: machine },
        { title: "Digital Marketing", price: 1500, img: digi },
        { title: "Child Psychology", price: 1500, img: child },
      ]
    
      // 🔥 duplicate list for infinite effect
      const loopCourses = [...courses, ...courses]
    
      // responsive
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) setPerView(1)
          else if (window.innerWidth < 1200) setPerView(2)
          else setPerView(4)
        }
    
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])
    
      const next = () => {
        setIndex(prev => prev + 1)
      }
    
      const prev = () => {
        setIndex(prev => prev - 1)
      }
    
      // 🔥 reset silently (no jump feel)
      useEffect(() => {
        if (index >= courses.length) {
          setTimeout(() => {
            setTransition(false)
            setIndex(0)
          }, 500)
        }
    
        if (index < 0) {
          setTimeout(() => {
            setTransition(false)
            setIndex(courses.length - 1)
          }, 500)
        }
    
        // আবার transition চালু
        setTimeout(() => setTransition(true), 600)
      }, [index, courses.length])

  return (
   <>
    <section id='jur'>
      <div className="container">

        <div className="text-center my-4 jurh4h2">
          <h2>Our All Courses</h2>
        </div>

        <div className="overflow-hidden">

          <div
            style={{
              display: "flex",
              transform: `translateX(-${index * (100 / perView)}%)`,
              transition: transition ? "transform 0.5s ease" : "none"
            }}
          >

            {loopCourses.map((item, i) => (
              <div
                key={i}
                style={{
                    flex: `0 0 ${100 / perView}%`,
                    padding: "10px",
                    display: "flex"
                }}
              >
                <Card className="w-100 shadow-sm h-100 course-card">
                  <Card.Img variant="top" src={item.img} />

                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>

                  <Card.Body>
                    <Card.Link>
                      <del>$2000</del> <span>${item.price}</span>
                    </Card.Link>

                    <Button variant="primary" className="ms-2">
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}

          </div>
        </div>

        <div className="text-center mt-3">
          <button onClick={prev} className="btn btn-primary me-4"><i><FaArrowLeft /></i></button>
          <button onClick={next} className="btn btn-primary"><i><FaArrowRight /></i></button>
        </div>

      </div>
    </section>
   </>
  )
}

export default Allcourse