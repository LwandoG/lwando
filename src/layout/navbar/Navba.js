import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { Navbar, Nav, Dropdown} from 'react-bootstrap';

const Navba = () => {
    return (
        <div className="wrapper d-flex align-items-stretch"> 
          <Navbar style={{width: '100%'}} expand="lg" className="bg-dark light">
             
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Nav.Link href="/" style={{color:'white'}}><i className="fas fa-home"></i>Home</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/About" style={{color:'white'}}><i className="fa fa-user-circle-o" aria-hidden="true">user</i>About Me</Nav.Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Portfolio" style={{color:'white'}}><i className="fas fa-book"></i>Portfolio</a>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/Testimonials" style={{color:'white'}}><i className="fas fa-comment-alt"></i>Testimonials</Nav.Link>
                </li>
                <li className="nav-item">
                <Dropdown>
                    <Dropdown.Toggle  variant="dark lighten-2
                    " id="dropdown-basic">
                    <i className="fa fa-users" aria-hidden="true"></i> Get Social
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="https://github.com/lwandog"><i className="fa fa-github" aria-hidden="true">github</i>Github</Dropdown.Item>
                      <Dropdown.Item href="https://www.linkedin.com/in/lwando-gqobho-369720158/"><i className="fa fa-linkedin-square" aria-hidden="true">linkedin</i>LinkedIn</Dropdown.Item>
                      <Dropdown.Item href="https://twitter.com/earlgee64"><i className="fa fa-twitter" aria-hidden="true">twitter</i>Twitter</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/ContactPage" className="nav-link" style={{color:'white'}}><i className="fa fa-envelope" aria-hidden="true"></i>Contact Me</Nav.Link>
                </li>
                <li>
                
                </li>
              </ul>
           </div>
        </Navbar>
    </div>
    )
}

export default Navba
