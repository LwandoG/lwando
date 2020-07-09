import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './form.css'

const ContactForm = (visible) => {


    return (
        <div className="bg-dark">
            <Form action="https://formspree.io/xoqkklrn" method="POST" className="welcome-msg">
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" />
                <Form.Text className="text-muted">
                I'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" placeholder="Enter message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <div className="footer light"><i className="fa fa-copyright" aria-hidden="true"></i>Copyright Lwando Gqobho 2020</div>

        </div>
    )

}

export default ContactForm
