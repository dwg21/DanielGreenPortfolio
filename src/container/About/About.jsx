import React, {useState, useEffect} from 'react';
import { motion, useMotionTemplate } from 'framer-motion'; 

import {images} from '../../constants'

import './About.scss';

import { AppWrap } from '../../wrapper';

import { MotionWrap } from '../../wrapper';

const abouts = [
  {title: 'Adventurous', description: `I love trying new things and pushing my limits to be the best version of myself as possible (Here's me sliding down an active volcano) `, imgUrl: images.volcanBoarding },
  {title: 'Self-driven', description: 'I am very self driven and love learning new skills, such as studying engineering, learning spanish and teaching myself full stack development', imgUrl: images.shefLogo},
  {title: 'Passionate', description: 'I am very passionate about life and coding is an extension of this, to me, it is more than a career but a way to make my impact on the  world.', imgUrl: images.passion},
  {title: 'Creative ', description: 'I love all things creative from art to movies and bring this flare into my codings to find innovate solutions.', imgUrl: images.creative}
]


export const About = () => {
  return (
   <>
      <h2 className='head-text'>WHO AM I & WHY I AM  <span>A GOOD FIT</span><br />FOR YOUR COMPANY <span></span></h2>
        <div className="description">
          <span>Hi. Im Daniel. Im an Aerospace Engineering graduate with a passion for coding seeking a role as a fullstack developer.</span>  
          <span>If i could describe myself in 4 words i would choose :</span>
        </div>
      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div 
              whileInView={{opacity: 1}}
              whileHover = {{scale: 1.1}}
              transition = {{duration: 0.5, type: 'tween'}}
              className = 'app__profile-item'
              key = {about.title+index}
              >
                <img src = {about.imgUrl} alt = {about.title} />
                <h2 className='bold-text' style = {{marginTop: 20}} >{about.title}</h2>
                <p  className='bold-text' style = {{marginTop: 20}} >{about.description}</p>



              </motion.div>
          ))
        }

      </div>
   
   
   </>
  )
}


export default AppWrap(
  MotionWrap(About, 'app__about') ,
  'about',
  'app__whitebg'

  );