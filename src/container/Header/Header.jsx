import React from 'react'
import {motion} from 'framer-motion'
import './Header.scss'

import { TypeAnimation } from 'react-type-animation';
import { NavigationDots } from '../../components';
import { AppWrap } from '../../wrapper';



export const Header = () => {
  return (
    

    <div className = 'header--container'>

        <div className='intro'>
        <h3 >Hi, my name is <span className='purple'>Daniel Green</span> </h3>
          <TypeAnimation 
              sequence={[
                'I am a Full Stack Engineer',
                2000,
                'I am a problem solver',
                2000,
                'I am an adventurer',
                1000
              ]}
              speed={35} 
              wrapper="span" 
              repeat={Infinity} />
                <h3 >From the <span className='purple'>UK</span> </h3>
          </div>
          <a href='#work'>
              <div id="container">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">See Projects</span>
              </button>
              </div>
            </a>
</div>           

  )
}

export default AppWrap(Header, 'home')


// export default Header