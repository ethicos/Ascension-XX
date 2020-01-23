import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';

import './assets/css/events.css';

class DeptEvents extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.updateCurrentPage(1);
    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default DeptEvents;