import React, { Component } from 'react';

import Aux from './Aux';
import Modal from './Modal';

import './assets/css/EventCard.css';

class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isClicked: false,
            isModalActive: false
         }
    }

    addToCartHandler = () => {
        const eventAddedListener = this.props.eventAddedListener;
        eventAddedListener(this.props.data.eid);
        this.setState({isClicked: true});
    }

    removeFromCartHandler = () => {
        const eventRemovedListener = this.props.eventRemovedListener;
        eventRemovedListener(this.props.data.eid);
        this.setState({isClicked: false});
    }

    learnMoreHandler = () => {
        this.setState({isModalActive: true});
    }

    modalClosedHandler = () => {
        this.setState({isModalActive: false});
    }

    render() { 
        return ( 
            <Aux>
                
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div class="EventCard">
                        <div class="text">
                            <h3 className="event-reg-title">
                                {this.props.data.eventname}
                            </h3>
                            {/* <h5>
                                {this.props.data.dept}
                            </h5> */}
                            <p>Fee: 
                                ₹ {this.props.data.fee}
                            </p>
                            <p className="learn-more" onClick={this.learnMoreHandler}>Learn More...</p>
                            {
                                !!this.props.data.is_closed ?
                                    <button className="registered">closed</button>
                                :
                                    !this.props.registered ?      
                                        !this.state.isClicked ? 
                                            <button onClick={this.addToCartHandler}>add to cart</button>
                                        :
                                            <button className="clicked" onClick={this.removeFromCartHandler}>Remove</button>
                                    : <button className="registered">registered</button>
                            }
                        </div>
                    </div>
                </div>
                <Modal show={this.state.isModalActive} modalClosed={this.modalClosedHandler}>
                    <div className="modal-inner">
                        <h3>{this.props.data.eventname}</h3>
                        <div className="one-line">
                            <div className="left">Fee : {this.props.data.fee}</div>
                            <div className="right">Venue : {this.props.data.venue}</div>
                        </div>
                        <div className="one-line">
                            <div className="left">Date : {this.props.data.date}</div>
                            <div className="right">Time : {this.props.data.time}</div>
                        </div>
                        <div className="one-line">
                            <div className="left">Type : {this.props.data.type}</div>
                            <div className="right">
                                { this.props.data.type === 'Team' ? 
                                        'Team Strength : '+this.props.data.teamStrength 
                                        : ''
                                }
                            </div>
                        </div>
                        <p className="event-description">
                            {this.props.data.desc}
                        </p>
                    </div>
                </Modal>
            </Aux>
         );
    }
}
 
export default EventCard;