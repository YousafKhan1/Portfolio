import React from 'react'
import './contact.css'

function Contact() {
    return(
        <section className="contact text-center text-white pb-3" id="contact">
            <br /><h1>Contact</h1> <br />
            <hr className="contactLine" /><br />  
            <div id="contactForm" className="mx-md-auto text-center container">
                <form action="" method="post" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group mt-2">
                        <label for="uname">Username:</label>
                        <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required=""/>
                    </div>
                    <div className="form-group mt-2">
                        <label for="email">Email:</label>
                        <input type="Email" className="form-control" id="email" placeholder="Enter Email" name="email" required=""/>
                    </div>
                    <div className="form-group mt-2">
                        <label for="message">Message:</label>
                        <textarea name="message" id="message" placeholder='Message' className="form-control" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="btn mt-2">Message Me</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;