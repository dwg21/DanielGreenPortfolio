import React from 'react';
import {AiFillGithub, AiOutlineClose} from 'react-icons/ai';
import './FurtherInfo.scss'


// 0 -> espanol mastero
// 1 -> Fair Funders
const data = [

    {'title': 'Vinswap',

    'introduction': `Vinswap is a fullstack used clothes market place with a twist, instead of paying for clothes
    , you bid with your own items to suggest swaps.`,

    'description' : `I am interested in the application of software development to solve real-world issues and was inspired to create a solution addressing the probems of sustainability within the fashion industry. `,

    'video': "https://www.youtube.com/embed/TDxiqjyFrCY",

    'linkDeployment' : 'https://vinswap.lat',

    'linkGit' : 'https://github.com/dwg21/Vinpop',

    'ul1': `Register and Login JWT tokin Cookie System`,
    'ul2': `Upload, edit and delete lisitngs - including photo upload`,
    'ul2': `Advanced Search and Cookie Capability`,
    'ul3': `Favorite Section - Store your favorite listings in your account`,
    'ul4': `Message system -message other sellers for enquires/questions`,
    'ul5': `Bidding system -Bid on other listings with other listings`


    },



    {'title': 'ESPAÑOL MAESTRO',

    'introduction': `Español Maestro is a concept project for a language web app that helps you learn Spanish through the use of several intelligent exercises.`,

    'description' : `I like to build projects that feel relevant to my life and always have the potential to be developed into 
    a long term personal project for me. As such, i am currently learning Spanish and was inspired by the multitud of online learning 
    resources to build a simialr tool myself from the perpective of a learner.`,


    'video': "https://www.youtube.com/embed/QbH5pMR8_kg",


    'linkDeployment' : 'https://espanolmaestro.netlify.app/',

    'linkGit' : 'https://github.com/dwg21/EspanolMaestro',

    'ul1': `Translation between English and Spanish.`,
    'ul2': `Vocabulary excercise, a flashcard game to reinforce the memory of new vocabulary.`,
    'ul3': `Conjugation excercise, a flashcard game to reinforce, practice, and teach the Conjugation of verbs.`,
    'ul4': `Story excercise, a reading excercise to reinforce reading skills and learn new vocabulary.`

    },

    {'title': 'FAIRFUNDERS',

    'introduction': `Fair Funders is a WEB3  crowdfunding app connected to the blockchain to allow people to send donations though blockchain. `,

    'description' : `I am very interested in web3 and cryptocurrencies and the potential of these technologies to change our life. One potential use of web3 is 
    to revolutionise how we interact with charitys and donations. FairFunders is an app to demonstate exactly this, it allows it's users to send donations 
    though the blockchain directly to the people or campiagns that need it most.  `,

    'linkDeployment' : 'https://fairfunders.netlify.app',

    'linkGit' : 'https://github.com/dwg21/farifunders',

    'ul1': `Change between Dark and light mode.`,
    'ul2': `Create and View and donate to custom fundrasing opportunities. `,
    'ul3': `Connect your metamask wallet `,
    'ul4': `Search and filter through differnet campiagns`

    },





]


const FurtherInfo = ({project, setProject}) => {
    return (
        <div className = 'furtherInfo' >
            <div className='title-close'>
                <h3 className='project-title'>{data[project - 1 ]['title']}</h3>
                <AiOutlineClose onClick={() =>  setProject(null)}  size = {40}/>
            </div>
            
            <a href = {data[project - 1 ]['linkGit']} target="_blank"><div className='gitlink'>
                <div className=' liveButton app__flex ' >View Github<AiFillGithub className='gitIcon' size = {30} /></div>
                </div> 
            </a> 


            <br />
            <p>{data[project - 1 ]['introduction']} </p>
            <br />
            <a href = {data[project - 1 ]['linkDeployment']} target="_blank"><div className=' liveButton app__flex ' >View Live deployment</div></a>

            <p>{data[project - 1 ]['description']}</p>
            <br />
        

            <p>Video Walkthrough</p>
            <br />
            <div className='iframe-container'>
                {data[project - 1 ]['video'] && 
                    <div className="iframe-wrapper">
                        <iframe
                        className='iframe'
                        src={data[project - 1 ]['video']}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        />
                </div>
                
                } 
            </div>
            <br/>

            <p>
            Features include:
            </p> 

            <ul>
                <li>{data[project - 1 ]['ul1']}</li>
                <li>{data[project - 1 ]['ul2']}</li>
                <li>{data[project - 1 ]['ul3']}</li>
                <li>{data[project - 1 ]['ul4']}</li>
{ data[project - 1 ]['ul5'] && <li>{data[project - 1 ]['ul5']}</li> }


            </ul>


        </div> )}

export default FurtherInfo