import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';
import EventItem from './EventItem';

import './assets/css/animate.css';

class GenEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsLoaded: false
        }
        this.getEvents = this.getEvents.bind(this);
    }
    getEvents(){
        let view = [];
        let row = [];
        for( let event of this.props.events){
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
        // return (
        //     <div>
        //         <h3 className="page-title">Coming Soon</h3>
        //     </div>
        // )
        return ( 
            <div>
                <div className="events fade-in" >
                    {this.getEvents()}
                </div>
            </div>
         );
    }
}
 
export default GenEvents;