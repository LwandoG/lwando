import React, { useState } from 'react'
import './form.css'

const ContactForm = (visible) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');


    return (
        <div id="contactForm" className="modal show welcome-msg modal-background-color" style={modalStyle}>
            <div className="modal-content">
                <form id="contact" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={name} name="name" onChange={e => setName(e.target.value)}/>
                </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={email} name="email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
            </div>          
        </div>
    )
}

const modalStyle = {
    width: '100px',
    height: '100px',
    display: 'contents',
    color: 'black'
}

export default ContactForm
