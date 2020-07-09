import React from 'react'
import { Card } from 'react-bootstrap'

const Portfolio = () => {
    return (
        <div className="welcome-msg bg-dark" style={{width:'100%', height: '100%', padding: '8px', display:'inline-block'}}>
            <div className="row align-contents-center">
            <div className="container col-sm-3">
            <Card className="bg-dark" style={{color:"#f0cdee"}}>
                <Card.Img variant="top" style={{height:'300px', width:'200px'}} 
                src={require('./lottery.jpg')} />
                <Card.Body>
                    <Card.Title>
                        <b>Lottery Generator</b> <br/>
                    </Card.Title>
                    <Card.Text>
                      Python application for playing the lottery. The player enters six numbers and the program generates six random numbers for the draw.
                      The numbers are then compared and the result is communicated. 
                      <br/><br/>
                      Project Mark: 99%  
                    </Card.Text>
                </Card.Body>
                <Card.Link href="https://github.com/LwandoG/lottery">See on Github</Card.Link>
            </Card>
            </div>
            <div className="container col-sm-3">
                <Card className="bg-dark" style={{color:"#f0cdee"}}>
                    <Card.Img variant="top" style={{height:'300px', width:'200px'}} 
                    src={require('./logoo.png')} />
                    <Card.Body>
                        <Card.Title>
                            <b>LifeChoicesOnline</b> <br/>
                        </Card.Title>
                        <Card.Text>
                            An application to sign in to the life choices premises. 
                            This is written in idiomatic Python like a professional app should be.
                            The code can be edited to suit your organisation's needs.
                            <br/><br/>
                            Project Mark: 99% 
                        </Card.Text>
                    </Card.Body>
                    <Card.Link href="https://github.com/LwandoG/LifeChoicesOnline">See on Github</Card.Link>
                </Card>
            </div>
            <div className="container col-sm-3">
                <Card className="bg-dark" style={{color:"#f0cdee"}}>
                    <Card.Img variant="top" style={{height:'300px', width:'200px'}} 
                    src={require('./githubfinder.png')} />
                    <Card.Body>
                        <Card.Title>
                            <b>Github Finder</b> <br/>
                        </Card.Title>
                        <Card.Text>
                            Search application for Github profiles.     
                        </Card.Text>
                    </Card.Body>
                    <Card.Link href="https://githubfinder8995.netlify.app/">Visit deployed site</Card.Link>
                </Card>
            </div>

            </div>
            
            <div className="footer light"><i className="fa fa-copyright" aria-hidden="true"></i>Copyright Lwando Gqobho 2020</div>
        </div>
    )
}

export default Portfolio
