import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';
import EventItem from './EventItem';

// import './assets/css/events.css';

class GenEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [{
                        title: "Fortitudo",
                        desc: "Nisi ad aliquip exercitation eu aute sunt. Occaecat eiusmod Lorem velit commodo nostrud. Quis aliquip in pariatur minim duis mollit.",
                        poster: "https://firebasestorage.googleapis.com/v0/b/dyuthi-bd052.appspot.com/o/nucleya1.jpg?alt=media&token=a6b1db0e-f956-466d-97eb-3636542c1400"
                    },{
                        title: "Dungeons of dyuthi",
                        desc: "Nisi ad aliquip exercitation eu aute sunt. Occaecat eiusmod Lorem velit commodo nostrud. Quis aliquip in pariatur minim duis mollit.",
                        poster: "https://firebasestorage.googleapis.com/v0/b/dyuthi-bd052.appspot.com/o/inst.jpg?alt=media&token=53de5c2d-3f21-4986-9e34-21b9fa1b0a5c"
                    }]
        }
        this.getEvents = this.getEvents.bind(this);
    }
    getEvents(){
        let view = [];
        let row = [];
        for( let event of this.state.events){
            row.push(<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <EventItem 
                            event={event}
                            modalToggle={this.props.modalToggle}/>
                    </div>);
            if(row.length == 3){
                view.push(<div className="row">
                            {row}        
                        </div>);
                row = [];
            }
        }
        if(row.length != 0){
            view.push(<div className="row">
                            {row}        
                        </div>);
            row = [];
        }
        return view;
    }
    componentDidMount(){
        this.props.updateCurrentPage(0);
    }
    render() { 
        return ( 
            <div className="events gen-events">
                {this.getEvents()}
            </div>
         );
    }
}
 
export default GenEvents;