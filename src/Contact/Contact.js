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
    <div className='p-16'>
      <h2>CONTACT</h2>
      <form ref={form} onSubmit={sendEmail} id='Contact' className='form-control bg-white rounded-xl p-6 flex w-[400px] min-w-[400px] mx-auto'>
        <div className='basis-2/5 text-left pr-6'>
          <label className='label'>Name</label>
          <input className='input input-ghost input-bordered input-sm w-full duration-200 focus:bg-neutral' type="text" name="user_name" />
          <label className='label'>Email</label>
          <input className='input input-ghost input-bordered input-sm w-full duration-200 focus:bg-neutral' type="email" name="user_email" />
          <label className='label'>Phone</label>
          <input className='input input-ghost input-bordered input-sm w-full duration-200 focus:bg-neutral' type="phone" name="user_phone" />
        </div>
        <div className='basis-3/5'>
          <label className='label'>What's Up?</label>
          <textarea className='textarea textarea-ghost input-bordered w-full h-44 duration-200' name="message" />
        </div> 
        <input className='btn primary btn-sm w-full btn-outline block mt-4 active:bg-primary' type="submit" value="Send Message!" />
      </form>
    </div>
  );
};

export default Contact;