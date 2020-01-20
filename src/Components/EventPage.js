import React, { Component } from 'react';
import {Link} from "react-router-dom";

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Link to="/events/register">Registration Page</Link>
            </div>
         );
    }
}
 
export default EventPage;