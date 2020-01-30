import React, { Component } from 'react';

import firebase from 'firebase';

import EventCard from './EventCard';
import './assets/css/EventCards.css';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: null
         }
    }

    componentDidMount = () => {
        firebase.database().ref('/events')
            .once('value').then((snapshot) => {
                console.log(snapshot.val());
                this.setState({events: snapshot.val()});
            }).catch(e => console.log(e));
    }

    render() {
        return ( 
            this.props.show ?
            <div className="EventCards">
                <div className="row">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
            : null
         );
    }
}
 
export default EventCards;