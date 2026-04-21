import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {

    const [show, setShow] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
     <>
      {show && (
        <div className="scroll-top" onClick={scrollTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  )
}

export default ScrollTop