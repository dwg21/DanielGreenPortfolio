import React from 'react';
import './blob.css'

const Blob = () => {
  return (
    <div className='everything'>
{/*       
      <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style = {{marginLeft: 20}}>
                <p className="p-text">Hello I am</p>
                <h1 className="head-text">Hello I am Daniel. Welcome to my Portfolio</h1>

              </div>
            </div>

            <div className='tag-cmp app__flex'>
              <p className="p-text">Software Engineerr</p>
              <p className="p-text">Full Stack Developer</p>

            </div>

          </div> */}


    <div class="blob">
  <svg 
  xmlns="http://www.w3.org/1999/xlink" 
  version="1.1" xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>
<div className = 'heading'>
  <div><h2>HELLO I AM DANIEL WELCOME TO MY PORTFOLIO</h2></div>
  <div><h1>Full Stack Developer</h1></div>
  <div className='callToAction'>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0F62FE" d="M47.9,-31C62.5,-19.9,75,0,72.8,19.5C70.7,38.9,53.8,57.8,33.7,65.9C13.6,73.9,-9.7,71.2,-31.7,62C-53.7,52.9,-74.5,37.3,-80.1,17.1C-85.7,-3.2,-76.1,-28.1,-60.2,-39.5C-44.3,-50.8,-22.2,-48.6,-2.8,-46.4C16.7,-44.2,33.3,-42,47.9,-31Z" transform="translate(100 100)" />
  </svg>
  </div>


</div >

</div>
  )
}

export default Blob