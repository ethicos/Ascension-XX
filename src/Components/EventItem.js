import React, { Component } from 'react';


import './assets/css/events.css';
import arch from './assets/images/nucleya1.jpg';

class EventItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="event-item" onClick={()=>this.props.modalToggle(this.props.event)}>
                <img src={this.props.event.poster} className="event-poster"/>
                <span className="event-title">
                    {this.props.event.title}
                </span>
                <div className="event-border"></div>
            </div>
         );
    }
}
 
export default EventItem;