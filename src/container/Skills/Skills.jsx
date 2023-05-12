import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import {urlFor, client} from '../../client';

import './Skills.scss';
import { images } from '../../constants';
import { MotionWrap } from '../../wrapper';
import mongo from '../../assets/mongo.png';
import tailwind from '../../assets/tailwind.png'

const skills = [
  {name:'React', BgColor: 'white', imgUrl:images.react},
  {name:'Javascript', BgColor: 'white', imgUrl:images.javascript},
  {name:'Redux', GbColor: 'white', imgUrl:images.redux},
  {name:'Git', GbColor: 'white', imgUrl:images.git},
  {name:'NodeJs', GbColor: 'white', imgUrl:images.node},
  {name:'MongoDB', GbColor: 'white', imgUrl: mongo},
  {name:'Tailwind', GbColor: 'white', imgUrl: tailwind},
  {name:'Sass', GbColor: 'white', imgUrl: images.sass},





]

const experiences  = [
  {year: '2022-2023', name:'Programming Study', company: 'Independent', desc: 'I decided i wanted to pursue a career in software development and began to self-study programming fundamentals and full-stack skills. '},
  {year: '2022-2022', name:'Graduate Sales Advisor', company: 'Zuto', desc: 'Worked as a finance broker and car sales advisor for a used-car credit broker. Learnt key communcation skills and how to effectively deal with a high workload.  '},
  {year: `2018-2021`,name:'Aerospace Engineering Beng', company: 'University Of Sheffield', desc: 'Achieved a first class degree in Aerospace Engineering. During my degree i had various modules on coding which first inspired my love for programming.'}

]


export const Skills = () => {

  // const [Experience, setExperience] = useState(experiences);
  // const [Skill, setSkill] = useState(skills)




  return (
    <>
      <h2 className='head-text'>SKILLS & EXPERIENCE</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div clasname = 'app__skills-exp'>
          {experiences.map((experience) => (
            <motion.div
            className="app__skills-exp-item"
            key={experience.year}
          >
            
            <>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-exp-experiences"
              data-tip
              data-for={experience.name}
              key={experience.name}
              >
                <h4 className='bold-test'>{experience.name} - {experience.company}</h4>
                <p className='p-text'>{experience.desc}</p>
              </motion.div>

              {/* <ReactToolTip
                id = {experience.name}
                effect = 'solid'
                arrowColor= '#fff'
                className='skills-tooltip'
              >
                {experience.desc}

              </ReactToolTip> */}
            
            
            </>

            </motion.div>
          ))}


        </motion.div>

      </div>
    
    
    
    </>
  )
}



export default AppWrap(
  MotionWrap(Skills, 'app__skills') ,
  'skills',
  'app__whitebg'

  );
