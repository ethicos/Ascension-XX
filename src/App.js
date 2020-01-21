import React, { useState } from 'react';
import Nav from './Components/Nav';
// import CountDown from './CountDown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
import './Components/assets/css/app.css';
import BottomNav from './Components/BottomNav';
import About from "./Components/About";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            loaded: false
        };
        this.setLoaded = this.setLoaded.bind(this);
    }
    setLoaded(st){
        this.setState({
            loaded: st
        });
    }
    componentDidMount(){
        document.getElementById("loader").style.display = "none";
    }
    render(){
        const isMobile = window.innerWidth <= 1024;
        if( isMobile )
            return <BottomNav/>;
        else 
            return <Nav/>;
    }
}

export default App;
