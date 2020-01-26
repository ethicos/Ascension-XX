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
import Logo from './Logo';

import about from './assets/images/about.png';
import aboutActive from './assets/images/about-active.png';
import events from './assets/images/events.png';
import eventsActive from './assets/images/events-active.png';
import proshow from './assets/images/proshow.png';
import proshowActive from './assets/images/proshow-active.png';
import contact from './assets/images/contact.png';
import contactActive from './assets/images/contact-active.png';

import './assets/css/bottom-nav.css';
import './assets/css/animate.css';

class BottomNav extends React.Component {
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
    var elements = document.querySelectorAll("div.bottomNavRow>a>span");
    for(let e of elements){
      e.parentNode.classList.remove("active");
    }
    if( linkText == "home"){
        let logoBtn = document.getElementById("logo-sec");
        if( logoBtn.classList.contains("slide-up")){
            logoBtn.classList.remove("slide-up");
        }
        logoBtn.classList.add("slide-down");
        // logoBtn.style.display = "none";
        return;
    }else{
        let logoBtn = document.getElementById("logo-sec");
        if( logoBtn.classList.contains("slide-down")){
            logoBtn.classList.remove("slide-down");
        }
        logoBtn.classList.add("slide-up");
        logoBtn.style.display = "inline";
    }
    let el = document.getElementById(linkText);
    if( el == null )
        return;
    
    // let parent = el.childNodes[0];
    console.log(el)
    el.parentNode.classList.add("active")
  }
  render(){
      return (
                <Router>
                    <div className="bottomnav">
                        <div className="bottomNavRow">
                            <Link to="/about">
                                <span id="about" className="bottom-nav-text">About</span>
                            </Link>
                            <Link to="/proshows">
                                <span id="proshows" className="bottom-nav-text">Proshows</span>
                            </Link>
                            <span className="logo-sec slide-up" id="logo-sec">
                                <Link to="/">
                                    <Logo size={-1} isInline={true} />
                                </Link>
                            </span>
                            <Link to="/events/general">
                                <span id="events" className="bottom-nav-text">Events</span>
                            </Link>
                            <Link to="/contact">
                                <span id="contact" className="bottom-nav-text">Contact</span>
                            </Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Home loaded={this.state.loaded} setLoaded={this.setLoaded} 
                            setCurrentLink={this.setCurrentLink} isMobile={true}/>
                        </Route>
                        <Route path="/about">
                            <About setCurrentLink={this.setCurrentLink} isMobile={true}/>
                        </Route>
                        <Route path="/proshows">
                            <Proshows setCurrentLink={this.setCurrentLink} isMobile={true}/>
                        </Route>
                        <Route path="/events">
                            <Events setCurrentLink={this.setCurrentLink} isMobile={true}/>
                        </Route>
                        <Route path="/contact">
                            <Contact setCurrentLink={this.setCurrentLink} isMobile={true}/>
                        </Route>
                    </Switch> 
                </Router>
      );
    }
}

export default BottomNav;
