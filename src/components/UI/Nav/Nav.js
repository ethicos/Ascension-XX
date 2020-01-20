import React from 'react';
import './nav.css';

class Nav extends React.Component {
  render(){
      return (
        <nav className="nav">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PRO SHOWS</li>
                <li onClick={this.props.eventsClicked}>EVENTS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
      )
    }
}

export default Nav;
