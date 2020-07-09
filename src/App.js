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
import Portfolio from './layout/pages/Portfolio'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={WelcomeMessage} />
          <Route exact path = '/ContactPage' component={ContactForm} />
          <Route exact path = '/Testimonials' component={Testimonials} />
          <Route exact path = '/About' component={About} />
          <Route exact path = '/Portfolio' component={Portfolio} />
        </Switch>
      </Fragment>
    </Router>
  )
} 

export default App;
