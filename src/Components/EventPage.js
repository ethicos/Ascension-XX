import React, { Component } from 'react';
import {Link} from "react-router-dom";

import TabbedLayout from './TabbedLayout';

import './assets/css/events.css';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <TabbedLayout/>
            </div>
         );
    }
}
 
export default EventPage;