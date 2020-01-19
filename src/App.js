import React from 'react';
import Nav from './Nav';
// import CountDown from './CountDown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
import Logo from './Logo';
import './css/app.css';

class App extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}

export default App;
