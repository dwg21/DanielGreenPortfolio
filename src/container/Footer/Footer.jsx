import React, {useState} from 'react'

import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'

import './Footer.scss'
import whatsapp from '../../assets/whatsapp.svg'

export const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: '' });
  const [isFromSubmitted, setsFromSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const {name, email, message} =formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData = {...formData, [name]: value}
  }

  const handleSubmit = () => {
    setLoading = (true);

  }

  return (
    <>
      <h2 className='head-text'>GET IN CONTACT WITH ME</h2>

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
        <div className='app__flex'>
          <input className='p-text' type= 'text' placeholder='Your Name' name = 'name' value={name} onChange = {handleChangeInput} />
        </div>

        <div className='app__flex'>
          <input className='p-text' type= 'text' placeholder='Your Email' name = 'email' value={email} onChange = {handleChangeInput} />
        </div>

        <div>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          value = {message}
          name = "message"
          onChange = {handleChangeInput}
          />

        </div>
        <button type='button' classname = 'p-text' onClick={handleChangeInput} >
          {loading ? 'Sending': 'Send Message'}
        </button>
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

