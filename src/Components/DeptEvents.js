import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';

import './assets/css/animate.css';

class DeptEvents extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.updateCurrentPage(1);
    }
    render() { 
        return ( 
            <div className="fade-in">
                
            </div>
         );
    }
}
 
export default DeptEvents;