import React, { Component } from 'react';

import firebase from 'firebase';

import EventCard from './EventCard';
import GoDown from './GoDown';
import './assets/css/EventCards.css';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: null,
            cart: [],
            totalPayable: 0,
            payMethod: 'Online'
        }
    }

    componentDidMount = () => {
        firebase.database().ref('/events')
            .once('value').then((snapshot) => {
                this.setState({events: snapshot.val()});                
            }).catch(e => console.log(e.code));
    }

    componentDidUpdate = () => {
        if (this.props.show && this.state.events === null) {
            window.location.reload();
        }
    }

    eventAddedListener = (eid) => {
        let event_regs = this.state.cart;
        event_regs.push(eid);
        let tempPay = this.state.totalPayable;
        tempPay += this.state.events[eid].fee;
        this.setState({cart: event_regs, totalPayable: tempPay});
    }

    eventRemovedListener = (eid) => {
        let event_regs = this.state.cart;
        const index = event_regs.indexOf(eid);
        if (index > -1) {
            event_regs.splice(index, 1);
        }
        let tempPay = this.state.totalPayable;
        tempPay -= this.state.events[eid].fee;
        this.setState({cart: event_regs, totalPayable: tempPay});
    }

    togglePaymentHandler = () => {
        if (this.state.payMethod === 'Online') {
            this.setState({payMethod: 'At Desk'});
        }else {
            this.setState({payMethod: 'Online'});
        }
    }

    checkoutHandler = () => {
        if (this.state.cart.length !== 0) {
            firebase.database().ref('/participants/'+this.props.user.uid).once('value')
                .then((snapshot) => {
                    let evs;
                    if (snapshot.val().events === undefined){
                        evs = this.state.cart;
                    }else{
                        evs = [...snapshot.val().events, ...this.state.cart];
                    }
                    firebase.database().ref('/participants/'+this.props.user.uid).update({
                        events: evs
                    }).then(() => {
                        let count = 0;
                        this.state.cart.forEach(eid => {
                            count++;
                            firebase.database().ref('/event_participation/'+eid).push({
                                uid : this.props.user.uid,
                                eventname: this.state.events[eid].eventname,
                                timestamp: Date.now(),
                                username: this.props.user.name
                            });
                            if (count === this.state.cart.length) {
                                window.location.reload();
                            }
                        })
                    }).catch(e => console.log(e.message));
                }).catch(em => console.log(em.message));     
        }else {
            alert("Select Events First!!");
        }
    }

    render() { 
        let dat = this.props.user !== null ? this.props.user.events : null;
        let nonRegisteredEvents = null;
        let registeredEvents = null;
        if (this.state.events !== null){
            nonRegisteredEvents = Object.keys(this.state.events)
                            .map(evKey => {
                                if (dat !== null && dat !== undefined) {
                                    if (!dat.includes(evKey)) {
                                        return <EventCard
                                            registered={false} 
                                            data={this.state.events[evKey]} 
                                            key={evKey}
                                            eventAddedListener={this.eventAddedListener}
                                            eventRemovedListener={this.eventRemovedListener}/>
                                    }else {
                                        return null
                                    }
                                }else {
                                    return <EventCard
                                            registered={false} 
                                            data={this.state.events[evKey]} 
                                            key={evKey}
                                            eventAddedListener={this.eventAddedListener}
                                            eventRemovedListener={this.eventRemovedListener}/>
                                }   
                            });
            if (dat !== null && dat !== undefined) {
                registeredEvents = dat.map(evKey => {
                    return <EventCard
                            registered={true} 
                            data={this.state.events[evKey]} 
                            key={evKey}
                            eventAddedListener={this.eventAddedListener}
                            eventRemovedListener={this.eventRemovedListener}/>
                });
            }
        }
        
        return ( 
            this.props.show ?
            <div className="EventCards">
                <div className="participant-data">
                    <h4>{this.props.user !== null ? 'Hello '+this.props.user.name : ''}</h4>
                    <h6>{this.props.user !== null ? 'Your Dyuthi Id : '+this.props.user.dyuthi_id: ''}</h6>
                </div>
                <div className="row">
                    {registeredEvents}
                    {nonRegisteredEvents}
                </div>
                <GoDown />
                <div className="checkout-form" id="bottom">
                    <h3>Checkout</h3>
                    <p>Total Amount : {this.state.totalPayable}</p>
                    <p>Payment Method : {this.state.payMethod}</p>
                    <div class="outer">
                        <span class="switcher switcher-2">
                            <input 
                                type="checkbox" 
                                id="switcher-2" 
                                onClick={this.togglePaymentHandler}/>
                            <label for="switcher-2"></label>
                        </span>
                    </div>  
                    <p className="disclaimer">*For Team Events only team leader has to register</p>
                    <button class="proceed-button" onClick={this.checkoutHandler}>Confirm Checkout</button>
                </div>
            </div>
            : null
        );
    }
}
 
export default EventCards;