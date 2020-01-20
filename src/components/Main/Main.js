import React, { Component } from 'react';
import Nav from '../UI/Nav/Nav';
import CountDown from '../CountDown/CountDown';
import Logo from '../Logo/Logo';

import './Main.css';

class Main extends Component {
    
    state = { 
        days: 0
     }

    componentDidMount(){
        this.updateTimer();
    }

    updateTimer = () => {
        var now = new Date();
        var dyuthi = new Date("Feb 20, 2020");
        var diff = dyuthi-now;
        var days = parseInt( diff / (24*60*60*1000 ))
        this.setState({
            days: days
        });
    }

    eventsClickedHandler = () => {
        this.props.history.push('/events');
    }

    render() { 
        return ( 
            <div className="Main">
                <Nav eventsClicked={this.eventsClickedHandler}/>
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
}
 
export default Main;