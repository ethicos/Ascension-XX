import React from 'react';
import logo from './images/logo.png';
import './css/countdown.css';

class CountDown extends React.Component {
    constructor(){
        super();
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        this.updateTimer = this.updateTimer.bind(this);
    }
    render(){
        return (
            <div className="timer">
                <span>{this.state.days}</span>:
                <span>{this.state.hours}</span>:
                <span>{this.state.minutes}</span>:
                <span>{this.state.seconds}</span> 
            </div>
        )
    }
    componentDidMount(){
        setInterval( this.updateTimer, 1000);
    }

    updateTimer(){
        var now = new Date();
        var dyuthi = new Date("Feb 20, 2020");
        var diff = dyuthi-now;
        var days = parseInt( diff / (24*60*60*1000 ))
        diff = diff % (24*60*60*1000)
        var hours = parseInt(diff / (60*60*1000))
        diff = diff % (60*60*1000)
        var minutes = parseInt(diff / (60*1000))
        diff = diff % (60*1000)
        var seconds = parseInt(diff / 1000)

        if(days<10){
            days = "0" + days;
        }
        if(hours<10){
            hours = "0" + hours;
        }
        if(minutes<10){
            minutes = "0" + minutes;
        }
        if(seconds<10){
            seconds = "0" + seconds;
        }

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }
}

export default CountDown;
