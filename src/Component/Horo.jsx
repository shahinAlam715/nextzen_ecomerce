import React from 'react'
import perab from "../assets/perab.png"

const Horo = () => {
  return (
    <section className="hero-section">

      <div className="hero-container">

        
        <img src={perab} alt="hero" className="hero-img" />

       
        <div className="hero-content">
          <div className="container text-center">
            <h5>HELLO WORLD</h5>
            <h2>Wanna know who we are?</h2>
            <p>
              NextZenAcademy is an emerging ed-tech company dedicated to reshaping modern education through innovative online & offline learning solutions.
            </p>
            <button className="btn btn-primary">EXPLORE MORE</button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Horo