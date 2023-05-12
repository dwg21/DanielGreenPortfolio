import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import './Work.scss'
import { images } from '../../constants'
import FurtherInfo from './FurtherInfo'

import vinswap from '../../assets/vinswap.jpg';
import emaestro from '../../assets/Logo2.png'

const works = [  
  {title: 'VINSWAP', description: 'Full Stack Used Clothes Marketplace', imgUrl: vinswap, projectLink: 'https://fairfunders.netlify.app', codeLink: 'https://github.com/dwg21/farifunders', tags: ['Star Projects'], index: 1},
  {title: 'Español Maestro', description: 'Front End Language Project', imgUrl: emaestro, projectLink: 'https://espanolmaestroserver.onrender.com/', codeLink: 'https://github.com/dwg21/EspanolMaestro', tags: ['Star Projects' ], index: 2},
  {title: 'Fair Funders', description: 'Web 3 Crowd Funding Project', imgUrl: images.fairfunderLogo, projectLink: 'https://fairfunders.netlify.app', codeLink: 'https://github.com/dwg21/farifunders', tags: [''], index: 3},

]

export const Work = () => {
  const [ActiveFilter, setActiveFilter] = useState('Star Projects')
  const [AnimateCard, setAnimateCard] = useState({ y:0, opacity: 1})
  const [FilterWork, setFilterWork] = useState(works);
  const [project, setProject] = useState(null);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}]);


    }, 500)

    if(item === 'All' ) {
        setFilterWork(works)

    } else {
      setFilterWork(works.filter((work => work.tags.includes(item))))
    }

  }


  return (
    <>
      <h2 className='head-text'>MY <span>PORTFOLIO</span><br /> <span>SECTION</span></h2>

      <div className="app__work-filter">
        {['Star Projects', 'All'].map((item, index) => (
          <div
          key = {index}
          onClick = {() => handleWorkFilter(item)}
          className = {`app__work-filter-item app__flex p-text item-not-active  ${ActiveFilter === item ? 'item-active': 'item-not-active'} `}
          >
            <p className={ActiveFilter === item && 'white'}>{item}</p>

          </div>

        ))}
      </div>

      <motion.div
      animate= {AnimateCard}
      transition ={{duration:0.5, delayChildren:0.5}}
      className = "app__work-portfolio"
      >
        {FilterWork.map((work, index) => (
          <div className="app__work-item app__flex">
              <div onClick = {() => setProject(work.index)} className="app__work-img app__flex">
                  <img src = {work.imgUrl} alt = {work.description} key = {index} /> 
                  <motion.div 
                    whileHover={{opacity: [0, 1 ]}}
                    transition = {{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                    className = 'app__work-hover app__flex'
                    >

                      <a  rel = 'norefer'>
                        <motion.div
                          whileInView={{scale: [0,1]}}
                          whileHover={{scale: [1, 0.9 ]}}
                          transition = {{duration: 0.25}}
                          className = 'app__flex'
                        
                        >
                          <BsFillPlusCircleFill onClick = {() => setProject(work.index)}/>
                        </motion.div>
                      </a>



                  </motion.div>

              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style = {{marginTop: 10}}>{work.description} </p>



                <div className='app__work-tag app__flex'>
                  <p className='p-text'>
                    {work.tags[0]}
                  </p>
                </div>


              </div >



          </div>
        ))}




      </motion.div>

    { project && <div className='furtherInfo'>
              <FurtherInfo project = {project} setProject = {setProject} />

  
      </div>}
      
    
    </>
    
  )
}


export default AppWrap(Work, 'work')