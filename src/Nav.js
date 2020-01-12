import React from 'react';
import './css/nav.css';

class Nav extends React.Component {
  render(){
      return (
        <nav className="nav">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PRO SHOWS</li>
                <li>EVENTS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
      )
    }
}

export default Nav;
