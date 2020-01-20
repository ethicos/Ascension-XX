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
    this.state = {
      loaded: false
    };
    this.setLoaded = this.setLoaded.bind(this);
    this.setCurrentLink = this.setCurrentLink.bind(this);
  }
  componentDidMount(){
   
  }
  setLoaded(){
    this.setState({
      loaded: true
    });
  }

  setCurrentLink(linkText){
    // remove from all other links
    var elements = document.querySelectorAll("nav>ul>li>a");
    for(let e of elements){
      e.classList.remove("active");
    }
    let el = document.getElementById(linkText);
    let parent = el.parentElement;
    parent.classList.add("active");
  }
  render(){
      return (
        <Router>
          <nav className="nav">
              <ul>
                  <li>
                    <Link to="/about" 
                          className={window.location.pathname == "/about"?"active":""}>
                            <span class="link" id="about">ABOUT</span>
                          </Link>
                  </li>
                  <li>
                    <Link to="/proshows"
                          className={window.location.pathname == "/proshows"?"active":""}>
                            <span class="link" id="proshows">PRO SHOWS</span>
                          </Link>
                  </li>
                  <li> 
                  <Link to="/"><Logo size={0} isInline={true}/> </Link>
                  </li>
                  <li>
                    <Link to="/events"
                          className={window.location.pathname == "/events"?"active":""}>
                            <span class="link" id="events">EVENTS</span>
                          </Link>
                    </li>
                  <li>
                    <Link to="/contact"
                          className={window.location.pathname == "/contact"?"active":""}>
                            <span class="link" id="contact">CONTACT</span>
                          </Link>
                    </li>
              </ul>
          </nav>
          
          <Switch>
            <Route exact path="/">
              <Home loaded={this.state.loaded} setLoaded={this.setLoaded}/>
            </Route>
            <Route path="/about">
              <About setCurrentLink={this.setCurrentLink}/>
            </Route>
            <Route path="/proshows">
              <Proshows setCurrentLink={this.setCurrentLink}/>
            </Route>
            <Route path="/events">
              <Events setCurrentLink={this.setCurrentLink}/>
            </Route>
            <Route path="/contact">
              <Contact setCurrentLink={this.setCurrentLink}/>
            </Route>
        </Switch> 

      </Router>
      )
      }
}

export default Nav;
