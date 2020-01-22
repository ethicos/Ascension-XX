import React, { Component } from 'react';

import './assets/css/events.css';
import './assets/css/tabbed-layout.css';

class TabbedLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <div className="tab-row">
                    <span className="tab activeTab">General Events</span>    
                    <span className="tab">Department Events</span>
                </div>
            </div>
         );
    }
}
 
export default TabbedLayout;