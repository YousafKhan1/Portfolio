import React, {useEffect} from 'react'
import './About.css'
import AOS from 'aos'
import Yousaf from '../Images/aboutyousaf.png'
import aos from 'aos/dist/aos.css'

function About() {
    useEffect(() => {
        AOS.init({duration: 2500})
    }, [])
    return(
        <div className="w-100 about" id='about'>
            <div className='container' >
                <div className='row pt-5'>
                    <div className='col-12 col-md-6 col-lg-6 aboutImagePart' data-aos="fade-right">
                        <img src={Yousaf} alt="Yousaf"></img>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 text-light aboutTextPart' data-aos="fade-left">
                        <div>
                            <h3 className="welcome">
                                Hello, I Am Muhammad Yousaf
                            </h3> <br />
                            <p>
                                I am passionate and extremely motivated new front-end developer. 
                                I believe I stand out due to my passion for continuous innovation and pushing boundaries to 
                                bring forward new ideas. With my skills, I identify real-world challenges and develop applications
                                that bring efficiency and improvement to the lives of users and also showcase which technical 
                                improvements can make a meaningful impact on the user and the business.
                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='pe-5'><h5>Name</h5></td>
                                        <td><h5>: Muhammad Yousaf</h5></td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'><h5>Age</h5></td>
                                        <td><h5>: 23</h5></td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'><h5>Address</h5></td>
                                        <td><h5>: Kabul, Afghanistan</h5></td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'><h5>Phone</h5></td>
                                        <td><h5>: +9309887983</h5></td>
                                    </tr>
                                    <tr>
                                        <td className='pe-5'><h5>Example</h5></td>
                                        <td><h5>: example@example.ex</h5></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn downloadcvbtn mt-3' >Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;