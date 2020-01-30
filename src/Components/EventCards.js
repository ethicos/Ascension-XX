import React, { Component } from 'react';

import firebase from 'firebase';

import EventCard from './EventCard';
import './assets/css/EventCards.css';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: null,
            e1: {
                eventname: 'Laberynth',
                fee: 500,
                dept: 'GENERAL',
                eid: 'e001' 
            },
            e2: {
                eventname: 'Best Manager',
                fee: 300,
                dept: 'GENERAL',
                eid: 'e002'
            },
            e3: {
                eventname: 'One Night Code',
                fee: 150,
                dept: 'CSE',
                eid: 'e003'
            },
            e4: {
                eventname: 'Android Maestro',
                fee: 200,
                dept: 'CSE',
                eid: 'e004'
            },
            e5: {
                eventname: 'Line Follower',
                fee: 150,
                dept: 'ECE',
                eid: 'e005'
            },
            e6: {
                eventname: 'Junk War',
                fee: 200,
                dept: 'MECH',
                eid: 'e006'
            }
         }
    }

    componentDidMount = () => {
        firebase.database().ref('/events')
            .once('value').then((snapshot) => {
                this.setState({events: snapshot.val()});
            }).catch(e => console.log(e));
    }

    render() {
        let cardComponent = null;
        if (this.state.events !== null){
            cardComponent = Object.keys(this.state.events)
                            .map(evKey => {
                                return <EventCard data={this.state.events[evKey]} key={evKey}/>
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