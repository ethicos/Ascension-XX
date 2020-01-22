import React, { Component } from 'react';


import './assets/css/events.css';
import arch from './assets/images/nucleya1.jpg';

class EventItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="event-item" onClick={()=>this.props.modalToggle({title:"Fortitudo", desc: "hello world"})}>
                <img src={arch} className="event-poster"/>
                <span className="event-title">
                    Fortitudo
                </span>
                <div className="event-border"></div>
            </div>
         );
    }
}
 
export default EventItem;