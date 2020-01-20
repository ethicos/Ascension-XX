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
  }
  componentDidMount(){
    // const activate = (el)=>{
    //   // el.parent.classList.add("active");
    //   console.log("active", el.id);
    // }
    // const activateLink = (el)=>{
    //   console.log(window.location.pathname)
    //   if( window.location.pathname == "/about" && el.id == "about"){
    //       activate(el);
    //   }else if( window.location.pathname == "/proshows" && el.id == "proshows"){
    //       activate(el);
    //   }else if(window.location.pathname == "/events" && el.id == "events"){
    //       activate(el);
    //   }else if(window.location.pathname == "/contacts" && el.id == "contacts"){
    //       activate(el);
    //   }
    // }
    // let el = document.getElementsByClassName("link");
    // console.log(el);
    // for( let e of el){
    //   e.addEventListener("click", (x)=>{ activateLink(e)});
    // }
  }
  setLoaded(){
    this.setState({
      loaded: true
    });
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
