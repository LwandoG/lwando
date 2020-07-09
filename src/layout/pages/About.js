import React from 'react'
import './about.css'
import { Card } from 'react-bootstrap'

const About = () => {
    return (
        <div className='container-about'>
            <legend style={{marginLeft: '60vh'}}><h1>About Me</h1></legend>
            <div className="row">
                <div className="col-sm bio">
                <Card className='self'>
                <Card.Img variant="right" style={{height:'400px', width:'300px', borderRadius:'75%', right:0}} src={require('./lwando.jpg')} />
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
                                    <label id="specialties">Backend Development, Algorithms, Database Design & Administration</label> 
                                </li>
                                <li className="form-group">
                                    <label htmlFor="fun">Fun fact: </label>
                                    <label id="fun">Allergic to illogical code.</label> 
                                </li>
                            </ul>
                    
                    </Card.Text>
                </Card.Body>
            </Card>

                </div>
                 <div className="bio col-sm" style={{borderStyle: 'round'}}>
                   <p><u><b>Bio</b></u>
                   <br/>
                     I am a web & systems development professional specialising mostly in backend development & database administration.
                     I was fortunate enough to be able to take Information Technology as a subject in high school, that's where I got exposed to
                     programming. 
                      <br/> <br/>
                     In grade 10 I got to learn algorithms and programming through a program called Scratch. That was when I developed a strong passion
                     for coding. In the next two grades I learnt  Java. I've been learning more programming concepts at LifeChoices Academy and during my
                     spare time.
                     <br/><br/>
                     Please hit the contact button.
                   </p>
               </div>
            </div>
            <div className="row">
                <div className="col-sm bio">
                    <h3>Coding Artillery</h3>
                    <label>HTML:</label>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>65%</div>
                    </div>
                    <label>Python:</label>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>60%</div>
                    </div>
                    <label>Java:</label>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>50%</div>
                    </div>
                    <label>JavaScript: </label>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>45%</div>
                    </div>
                    <label>MySQL:</label>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>40%</div>
                    </div>
                    <label>C#:</label>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}}>30%</div>
                    </div>
                </div>
                <div className="col-sm bio">
                    <h3>School Info</h3>
                    <label>Highest Qualification: Grade 12</label><br/>
                    <label>High School Attended: Centre of Science and Technology</label><br/>
                    <ul>
                    <h3 className="mb-1">Subjects</h3>
                    <li className="list-group-item list-group-item-light">English First Additional Language</li>
                    <li className="list-group-item list-group-item-light">IsiXhosa Home Language</li>
                    <li className="list-group-item list-group-item-light">Mathematics</li>
                    <li className="list-group-item list-group-item-light">Physical Sciences</li>
                    <li className="list-group-item list-group-item-light">Information Technology</li>
                    <li className="list-group-item list-group-item-light">Life Sciences</li>
                    <li className="list-group-item list-group-item-light">Life Orientation</li>
                    <li className="list-group-item list-group-item-light">Advanced Programme Mathematics</li>
                    </ul>

                </div>
            <div className="row">
            <p className="footer light"><i className="fa fa-copyright" aria-hidden="true"></i>Copyright Lwando Gqobho 2020</p>

            </div>
        </div>
              
           </div>
    )
}

export default About
