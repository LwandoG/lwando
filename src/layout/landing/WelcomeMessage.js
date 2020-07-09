import React from 'react'
import './welcome.css'

const WelcomeMessage = () => {
    return (
        <div className="wrapper" id="welcome">
            <div className="dope bg-dark" style={{color:"#f0cdee", alignItems: 'row'}}>
                <h3 className="text-align-centre" style={{marginTop: '20%'}}>Hello. Welcome to my site. </h3>
                
            <p style={{color:"#eb70d2"}}>
                My name is Lwando Gqobho. I offer web development services to individuals and organisations.
                <br/>
                <a href="/ContactPage" type="button" className="btn btn-primary btn-lg">Hire Me</a>
            </p>
            <div className="footer light"><i className="fa fa-copyright" aria-hidden="true"></i>Copyright Lwando Gqobho 2020</div>
        </div>
        <br/>
        
        </div>
    )
}
 
export default WelcomeMessage
