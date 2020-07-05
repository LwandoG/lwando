import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { Navbar, Nav} from 'react-bootstrap';

const Navba = () => {
    return (
        <div className="wrapper d-flex align-items-stretch"> 
          <Navbar style={{width: '100%', textDecorationColor:'white'}} expand="lg" className="bg-dark">
             
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Nav.Link href="/lwando">Home</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="/lwando/About"><i className="fa fa-user-circle-o" aria-hidden="true">user</i>About Me</Nav.Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="lwando">Portfolio</a>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/lwando/Testimonials">Testimonials</Nav.Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-users" aria-hidden="true"></i> Get Social
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="https://github.com/lwandog"><i className="fa fa-github" aria-hidden="true">github</i>Github</a>
                    <a className="dropdown-item" href="https://www.linkedin.com/in/lwando-gqobho-369720158/"><i className="fa fa-linkedin-square" aria-hidden="true">linkedin</i>LinkedIn</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://twitter.com/earlgee64"><i className="fa fa-twitter" aria-hidden="true">twitter</i>Twitter</a>
                  </div>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/lwando/ContactPage" className="nav-link" ><i className="fa fa-envelope" aria-hidden="true"></i>Contact Me</Nav.Link>
                </li>
              </ul>
           </div>
        </Navbar>
    </div>
    )
}

export default Navba
