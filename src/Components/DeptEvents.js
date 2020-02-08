import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';
import EventItem from './EventItem';
import logo from './assets/images/Google.svg';

import './assets/css/events.css';
import './assets/css/animate.css';

class DeptEvents extends Component {
    constructor(props) {
        super(props);
        this.getEvents = this.getEvents.bind(this);
    }
    getEvents(){
        let view = [];
        let row = [];
        let dept = [];
        for( let dep in this.props.events){
            // view.push()
            for( let event of this.props.events[dep]){
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
            dept.push(<h3 className="dept-title">{dep}</h3>);
            dept.push(<div className="events">{view}</div>);
            view = []
        }

        return dept;
    }
    componentDidMount(){
        this.props.updateCurrentPage(1);
    }
    render() { 
        // return (
        //     <h3 className="page-title">coming soon</h3>
        // )
        return ( 
            <div className="dept-events fade-in">
                {this.getEvents()}
            </div>
         );
    }
}
 
export default DeptEvents;

const DeptIcon = (props)=>{
    return (
        <img src={logo} className="dept-icon"/>
    );
}