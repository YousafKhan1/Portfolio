import React from 'react'
import './Home.css'
import Yousaf from '../Images/yousaf.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect'


function Home() {
    return( 
        <div className="w-100 home" id='home'>
            <div className='container' >
                <div className='row pt-5' >
                    <div className='col-12 col-md-6 col-lg-6 text-light homeTextPart' >
                        <div>
                            <h3 className="welcome">
                                WELLCOME !
                            </h3> <br />
                            <h1 id="animation-text"><Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    strings: ["I AM WEB-DEVELOPER", "I AM WEB-DESIGNER"]
                                }}
                                />
                            </h1><br />
                            <p>I'm a Front-End developer with 5 years of experience. My expertise is
                                to create front-end design for a website. <FontAwesomeIcon icon="fa-regular fa-mug-hot"/>
                            </p>
                            <div className='icons'>
                                <a href="https://twitter.com/yousafMasror?s=09"><FontAwesomeIcon className='icon' icon={faTwitter} /></a>
                                <a href="https://www.facebook.com/YousafMasror/"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                                <a href="https://github.com/YousafKhan1"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                                <a href="https://www.linkedin.com/in/muhammad-yousaf-6b2363184"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 imagePart'>
                        <img src={Yousaf} alt="Yousaf"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;