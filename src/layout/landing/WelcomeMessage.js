import React from 'react'
//import './welcome.css'

const WelcomeMessage = () => {
    return (
        <div className="wrapper" id="welcome">
            <div className="welcome-msg">
                <h3 className="text-align-centre" style={{marginTop: '20%', color:"#40749e"}}>Hello. Welcome to my site. </h3>
                
            <p>
                My name is Lwando Gqobho. I offer web development services to individuals and organisations.
                <br/>
                <a href="/ContactPage" type="button" className="btn btn-primary btn-lg">Hire Me</a>
            </p>
        </div>
        <p className="footer light"><i className="fa fa-copyright" aria-hidden="true"></i>Copyright Lwando Gqobho 2020</p>
        </div>
    )
}

export default WelcomeMessage
