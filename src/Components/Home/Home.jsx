import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import ME from '/Images/me.png'
import './Home.css'

const Home = () => {
  return (
    <header id='home'>
        <div className="container home_container">
            <h5>Hello, I'm</h5>
            <h1>Mohammad Yousof</h1>
            <h5 className='text-light'>Full-Stack Software Engineer</h5>
            <div className='cta'>
                <a href="" download className='btn'>
                    Donwload CV
                </a>
                <a href="#contact" className='btn btn-primary'>
                    Contact Me
                </a>
            </div>
            <div className="home_social">
                <a href="">
                    <BsLinkedin />
                </a>
                <a href="">
                    <BsGithub />
                </a>
                <a href="">
                    <BsMedium />
                </a>
            </div>

            <div className="me">
                <img src={ME} alt="Yousof" />
            </div>

            <a href="#contact" className='scroll_down'>
                Scroll Down
            </a>
        </div>
    </header>
  )
}

export default Home