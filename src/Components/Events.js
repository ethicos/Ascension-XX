import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './Registration';
import EventPage from './EventPage';

class Events extends React.Component {
    constructor(){
        super();
    }

    render(){
        console.log(this.props);
        return (     
            <div>
                <Switch>
                    <Route exact path="/events" component={EventPage}/>
                    <Route exact path="/events/register" component={Register} />
                </Switch>         
            </div>
        );
    }
}

export default Events;
