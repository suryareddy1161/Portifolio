import React, { useState } from 'react'
import "./ContactForm.css"
import Swal from 'sweetalert2';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false); 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oj75j3f', 
      'template_1g3ab31', form.current, 'Ac03pUtRtoKMPfMct')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSubmitted(true)
  };
 

  if (submitted) {
    Swal.fire(
      'Thank you💙💚🧡!',
      'I will be in touch soon!',
    )
  }
  else {
    return (
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}  >
          <label>Your Name</label>
          <input type="text" name='user_name' ></input>
          <label>Email</label>
          <input type="email" name='user_email'></input>
          <label>Subject</label>
          <input type="text" name='subject' ></input>
          <label>Message</label>
          <textarea rows="6" placeholder='Type your message Hear' name='textarea' ></textarea>
          <button className='btn' type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactForm
