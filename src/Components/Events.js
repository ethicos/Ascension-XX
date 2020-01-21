import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './Registration';
import EventPage from './EventPage';

import './assets/css/animate.css';

class Events extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.setCurrentLink("events");
    }
    render(){
        console.log(this.props);
        return (     
            <div className="fade-in">
                <Switch>
                    <Route exact path="/events" component={EventPage}/>
                    <Route exact path="/events/register" component={Register} />
                </Switch>         
            </div>
        );
    }
}

export default Events;
