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
    }
    render() { 
        return ( 
            <div className="events gen-events">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <EventItem 
                            title="Fortitudo"
                            desc="Nisi ad aliquip exercitation eu aute sunt. Occaecat eiusmod Lorem velit commodo nostrud. Quis aliquip in pariatur minim duis mollit."
                            poster="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                            modalToggle={this.props.modalToggle}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <EventItem 
                            title="Fortitudo"
                            desc="Nisi ad aliquip exercitation eu aute sunt. Occaecat eiusmod Lorem velit commodo nostrud. Quis aliquip in pariatur minim duis mollit."
                            poster="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <EventItem 
                            title="Fortitudo"
                            desc="Nisi ad aliquip exercitation eu aute sunt. Occaecat eiusmod Lorem velit commodo nostrud. Quis aliquip in pariatur minim duis mollit."
                            poster="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default GenEvents;