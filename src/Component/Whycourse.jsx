import React from 'react'
import whycour from "../assets/whycour.png"

const Whycourse = () => {
  return (
    <section>
        <div className="container">
           
           <div className="whyhed">
                <div className="whyimg">
                    <img src={whycour} alt="why" />
                </div>
               
                <div className="whyh3btn">
                    <h3>Contact us to learn how we can meet your backshell requirements faster and smarter?</h3>
                    <button>Contact with us</button>
                </div>
           </div>
               

               <img src="https://www.vecteezy.com/photo/7389466-close-up-of-businessman-or-accountant-working-on-laptop-computer-for-calculate-business-data-accounting-document-and-calculator-at-office-business-concept" alt="" />
        </div>
    </section>
  )
}

export default Whycourse