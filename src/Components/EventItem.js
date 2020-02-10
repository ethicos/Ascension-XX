import React, { Component } from 'react';


import './assets/css/events.css';
import './assets/css/animate.css';
import noPoster from './assets/images/no-poster.png';

class EventItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="event-item" onClick={()=>this.props.modalToggle(this.props.event)}>
                <img src={this.props.event.posterUrl==""?noPoster:this.props.event.posterUrl} className="event-poster fade-in"/>
                <span className="event-title">
                    {this.props.event.eventname}
                </span>
                <div className="event-border"></div>
            </div>
         );
    }
}
 
export default EventItem;