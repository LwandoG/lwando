import React from 'react'
import { Card } from 'react-bootstrap'

const Testimonials = () => {
    return (
        <div className="bg-dark welcome-msg" style={{width:'100%', height: '100%', padding: '8px'}}>
            <h3><b>Testimonials</b></h3>
        <div className="row">
            <div className="container col-sm-3 justify-content-center">
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" style={{height:'100px', width:'100px', borderRadius:'50%'}} src="https://www.vifoodtours.com/wp-content/uploads/2016/02/photo.jpg.png" />
                <Card.Body>
                    <Card.Title>
                        <b>Ariya Lucas</b> <br/>
                        Lecturer: LifeChoices Academy
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div className="container col-sm-3">
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" style={{height:'100px', width:'100px', borderRadius:'50%'}} src="https://www.vifoodtours.com/wp-content/uploads/2016/02/photo.jpg.png" />
                <Card.Body>
                    <Card.Title>
                        <b>Lukhanyo Vakele</b> <br/>
                        Student: LifeChoices Academy
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div className="container col-sm-3">
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" style={{height:'100px', width:'100px', borderRadius:'50%'}} src="https://www.vifoodtours.com/wp-content/uploads/2016/02/photo.jpg.png" />
                <Card.Body>
                    <Card.Title>
                        <b>Mbulelo Pani</b> <br/>
                        Student: LifeChoices Academy
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>              
        </div>
        
    )
}

export default Testimonials
