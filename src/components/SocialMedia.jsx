import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import {FaLinkedin, FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a target="_blank" href='https://www.linkedin.com/in/daniel-green-0925a2151/'>
        <div>
            <BsLinkedin/>
        </div>
      </a> 

      <a target='_blank' href='https://github.com/dwg21'>
        <div>
            <BsGithub/>
        </div>
      </a>

        <div>
            <BsInstagram/>
        </div>
        
    </div>
  )
}

export default SocialMedia