import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Navbar from './layout/navbar/Navba'
import WelcomeMessage from './layout/landing/WelcomeMessage'
import ContactForm from './layout/contact/ContactForm'
import Testimonials from './layout/pages/Testimonials'
import About from './layout/pages/About'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
          <Switch>
            <Route exact path = '/lwando' render={props => (
              <WelcomeMessage />
            )} />
            <Route exact path = '/lwando/ContactPage' render={props => (
              <ContactForm />
            )
         } />
         <Route exact path = '/lwando/Testimonials' render={props => (
              <Testimonials />
            )
         } />
         <Route exact path = '/lwando/About' render={props => (
              <About />
            )
         } />
          </Switch>
    </Fragment>
    </Router>
  )
}

export default App;
