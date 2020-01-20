import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import Home from './Home';
import About from './About';
import Proshows from './Proshows';
import Events from './Events';
import Contact from './Contact';
import './assets/css/nav.css';
import Logo from './Logo';

class Nav extends React.Component {
  constructor(){
    super();
  }
  render(){
      return (
        <Router>
          <nav className="nav">
              <ul>
                  <li>
                    <Link to="/about" 
                          className={window.location.pathname == "/about"?"active":""}>
                            <span id="about">ABOUT</span>
                          </Link>
                  </li>
                  <li>
                    <Link to="/proshows"
                          className={window.location.pathname == "/proshows"?"active":""}>
                            <span>PRO SHOWS</span>
                          </Link>
                  </li>
                  <li> 
                  <Link to="/"><Logo size={0} isInline={true}/> </Link>
                  </li>
                  <li>
                    <Link to="/events"
                          className={window.location.pathname == "/events"?"active":""}>
                            <span>EVENTS</span>
                          </Link>
                    </li>
                  <li>
                    <Link to="/contact"
                          className={window.location.pathname == "/contact"?"active":""}>
                            <span>CONTACT</span>
                          </Link>
                    </li>
              </ul>
          </nav>
          
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/proshows">
              <Proshows/>
            </Route>
            <Route path="/events">
              <Events/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
        </Switch> 

      </Router>
      )
      }
}

export default Nav;
