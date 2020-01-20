import React from 'react';
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
    }
    componentDidMount(){
        document.getElementById("loader").style.display = "none";
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
