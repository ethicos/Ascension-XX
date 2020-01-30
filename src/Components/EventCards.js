import React, { Component } from 'react';

import firebase from 'firebase';

import EventCard from './EventCard';
import './assets/css/EventCards.css';
import { array } from 'prop-types';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: null,
            selected_events: []
         }
    }

    componentDidMount = () => {
        firebase.database().ref('/events')
            .once('value').then((snapshot) => {
                this.setState({events: snapshot.val()});
            }).catch(e => console.log(e));
    }

    eventAddedListener = (eid) => {
        let event_regs = this.state.selected_events;
        event_regs.push(eid);
        this.setState({selected_events: event_regs});
        console.log(this.state.selected_events);  
    }

    eventRemovedListener = (eid) => {
        let event_regs = this.state.selected_events;
        const index = event_regs.indexOf(eid);
        if (index > -1) {
            event_regs.splice(index, 1);
        }
        console.log(this.state.selected_events); 
    }

    render() {
        let cardComponent = null;
        if (this.state.events !== null){
            cardComponent = Object.keys(this.state.events)
                            .map(evKey => {
                                return <EventCard 
                                            data={this.state.events[evKey]} 
                                            key={evKey}
                                            eventAddedListener={this.eventAddedListener}
                                            eventRemovedListener={this.eventRemovedListener}/>
                            });
        }
        
        return ( 
            this.props.show ?
            <div className="EventCards">
                <div className="participant-data">
                    <h4>{this.props.user !== null ? 'Hello '+this.props.user.name : ''}</h4>
                    <h6>{this.props.user !== null ? 'Your Dyuthi Id : '+this.props.user.dyuthi_id: ''}</h6>
                </div>
                <div className="row">
                    {cardComponent}
                </div>
            </div>
            : null
         );
    }
}
 
export default EventCards;