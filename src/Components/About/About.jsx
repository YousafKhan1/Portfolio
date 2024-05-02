import React from "react";
import myImage from "/Images/me2.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import './About.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={myImage} alt="Yousof" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>
                Bsc. Software Engineering <br />
                <i>Nangarhar University</i>
              </small>
            </article>
            <article className="about_card">
              <TfiWorld className="about_icon" />
              <h5>Location</h5>
              <small>Adress ...</small>
            </article>
            <article className="about_card">
              <BsTelephoneForward className="about_icon" />
              <h5>Contact</h5>
              <small>
                <ul>
                  <li>Phone:</li>
                  <li>Email:</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Hi, I'm Mohammad Yousof, a skilled full-stack MERN developer with a
            passion for building robust, scalable, and efficient applications.
            With expertise in MongoDB, Express, React, and Node.js, I craft
            seamless user experiences and robust backend architectures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
