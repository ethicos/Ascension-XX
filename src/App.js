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
        return (
            <div>
                <Nav loaded={this.state.loaded} callback={this.setLoaded}/>
            </div>
        );
    }
}

export default App;
