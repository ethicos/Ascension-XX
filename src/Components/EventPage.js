import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './assets/css/events.css';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="events-title">Events</h1>
                <p className="events-desc">
                    We will be opening event registration soon. <br/>
                    Stay tuned..
                </p>
                {/* <Link to="/events/register">Registration Page</Link> */}
            </div>
         );
    }
}
 
export default EventPage;