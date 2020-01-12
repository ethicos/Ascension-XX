import React from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import CountDown from './CountDown';
import Logo from './Logo';
import './css/app.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            days: 0
        };
        this.updateTimer = this.updateTimer.bind(this);
    }
    render(){
        return (
            <div className="main">
            <Logo size={1}/>
            <h1 className="title">{this.state.days} days to go</h1>

            <CountDown/>

            <span className="event-date">
                Feb 20 21 22 23
                <br/>
                <span className="gect">Government Engineering College, Thrissur</span>
                <br/>
                <span className="insta">
                    <a href="https://www.instagram.com/dyuthilive/">@dyuthilive</a>
                </span>
            </span>
            </div>
        );
    }
    componentDidMount(){
        this.updateTimer();
    }
    updateTimer(){
        var now = new Date();
        var dyuthi = new Date("Feb 20, 2020");
        var diff = dyuthi-now;
        var days = parseInt( diff / (24*60*60*1000 ))
        this.setState({
            days: days
        });
    }
}

export default App;
