import React from 'react'
import './about.css'
import { Card } from 'react-bootstrap'

const About = () => {
    return (
        <div className='container-about'>
            <legend style={{marginLeft: '60vh'}}><h1>About Me</h1></legend>
            <div className="row">
                <div className="col-sm">
                <Card className='self'>
                <Card.Img variant="top-right" style={{height:'400px', width:'300px', borderRadius:'75%', left:0}} src={require('./lwando.jpg')} />
                <Card.Body>
                    <Card.Title>
                        <b>Lwando Gqobho</b> <br/>
                        Student: LifeChoices Academy
                    </Card.Title>
                    <Card.Text>
                            <ul>
                                <li className="form-group">
                                    <label htmlFor="fullName">Full Name: </label>
                                    <label id="fullName"> Lwando Gqobho</label>
                                </li>
                                <li className="form-group">
                                    <label htmlFor="location">Location: </label>
                                    <label id="location">Cape Town, Western Cape</label>
                                </li>
                                <li className="form-group">
                                    <label htmlFor="hireable">Hireable: </label>
                                    <label id="hireable">Yes<i className="fa fa-check" aria-hidden="true"></i></label>
                                </li>
                                <li className="form-group">
                                    <label htmlFor="specialties">Specialties: </label>
                                    <label id="specialties">Backend Development, Algorithms Database Design & Administration</label> 
                                </li>
                            </ul>
                    
                    </Card.Text>
                </Card.Body>
            </Card>

                </div>
                 <div className="bio col-sm">
                   <p><u><b>Bio</b></u>
                   <br/>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <br/>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                      voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                      cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
                      laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                       cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
                       omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut 
                       rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum 
                       rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis 
                       doloribus asperiores repellat.

                   </p>
               </div>
            </div>
            
              
           </div>
    )
}

export default About
