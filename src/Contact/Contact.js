import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sigetlg', 'template_bkk4h0s', form.current, '7otjWyBgmcBUl95sE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='Contact'>
      <h2>CONTACT</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div id='Contact-info'>
          <label className='Contact-label'>Name</label>
          <input className='Contact-input' type="text" name="user_name" />
          <label className='Contact-label'>Email</label>
          <input className='Contact-input' type="email" name="user_email" />
          <label className='Contact-label'>Phone</label>
          <input className='Contact-input' type="phone" name="user_phone" />
        </div>
        <div id='Contact-message'>
          <label className='Contact-label'>What's Up?</label>
          <textarea className='Contact-input' name="message" />
          <input id='Contact-submit' type="submit" value="Send Message!" />
        </div>
      </form>
    </div>
  );
};

export default Contact;