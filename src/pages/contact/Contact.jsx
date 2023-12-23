import React from 'react'
import "./Contact.css"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineLocationCity } from "react-icons/md";
const Contact = () => {
  return (
    <div className="contact-bgImg-container">

  <main className="contact">
    <h2 className='text-dark'>Contact Me</h2>
    <div className="contact__list text-dark fw-bold">
      <div className="contact__item">
      <MdEmail /> Email
        <div className="text-secondary">betul.cil@gazi.edu.tr</div>
      </div>
      <div className="contact__item">
      <FaPhone /> Phone
        <div className="text-secondary">+40 (571) 360-1234</div>
      </div>
      <div className="contact__item">
      <MdOutlineLocationCity /> Address
        <div className="text-secondary">
          Ankara, Türkiye
        </div>
      </div>
    </div>
  </main>
  
  
</div>

  )
}

export default Contact
