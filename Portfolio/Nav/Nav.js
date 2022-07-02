import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'
import './Nav.css'

function Nav() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#home">YOUSAF</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                            </li>                        
                            <li className="nav-item" ><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item" ><a className="nav-link" href="#projects">Project</a></li>
                            <li className="nav-item" ><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Responsive Navbar</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="">                        
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>                        
                        <a className="nav-link" href="#about">About</a>                                                
                        <a className="nav-link" href="#services">Services</a>
                        <a className="nav-link" href="#projects">Project</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;