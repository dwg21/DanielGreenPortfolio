import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper';


import './Footer.scss'
import whatsapp from '../../assets/whatsapp.svg'

export const Footer = () => {
  const form = useRef();

  // const [formData, setFormData] = useState({name: '', email: '', message: '' });
  const [isFromSubmitted, setsFromSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  // const {name, email, message} =formData;

  // const handleChangeInput = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value})
  // }

  const sendEmail = (e) => {
    console.log(process.env.REACT_APP_PUBLIC_KEY)
    e.preventDefault();
    emailjs 
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <>
      <h2 className='head-text'>GET IN CONTACT WITH ME</h2>
      <p>Please use my Email, Whatsapp or the contact form if you would like to discuss job opportunities with me.</p>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src = {images.email}  alt = 'email' />
          <a href = "mailto:danielwgreen0@gmail.com" className='p-text'>Danielwgreen0@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src = {whatsapp} alt = 'mobile' />
          <a href = "tel: +44 7341310624" className='p-text'>+44 7341310624</a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <form className='contactForm' ref={form}>

        <div className='app__flex'>
          <input className='p-text' type= 'text' placeholder='Your Name' name = 'name'  />
        </div>

        <div className='app__flex'>
          <input className='p-text' type= 'text' placeholder='Your Email' name = 'email' />
        </div>

        <div>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          // value = {message}
          name = "message"
          // onChange = {handleChangeInput}
          />

        </div>
        <button onClick = {(e) => sendEmail(e)} type='button' classname = 'p-text'  >
          {loading ? 'Sending': 'Send Message'}
        </button>
          </form>
      </div>
    
    
    </>
  )
}


// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg'
// )

export default AppWrap(Footer, 'contact')

