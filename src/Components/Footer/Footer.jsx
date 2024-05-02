import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer_logo'>Yousof</a>
        <ul className='links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>

        <div className="footer_social">
            <a href=""><BsLinkedin /></a>
            <a href=""><BsGithub /></a>
            <a href=""><BsMedium /></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Mohammd Yousof. All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer