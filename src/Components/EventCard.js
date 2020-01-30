import React, { Component } from 'react';

import './assets/css/EventCard.css';

class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isClicked: false
         }
    }

    addToCartHandler = () => {
        console.log("Add to cart Pressed "+this.props.data.eid);
        this.setState({isClicked: true});
    }

    removeFromCartHandler = () => {
        this.setState({isClicked: false});
    }

    render() { 
        return ( 
            <div class="EventCard">
                <div class="text">
                    <h3>
                        {this.props.data.eventname}
                    </h3>
                    <h5>
                        {this.props.data.dept}
                    </h5>
                    <p>Fee: 
                        {this.props.data.fee}
                    </p>
                    {
                        !this.state.isClicked ? 
                            <button onClick={this.addToCartHandler}>add to cart</button>
                        :
                            <button className="clicked" onClick={this.removeFromCartHandler}>Remove</button>
                    }
                </div>
            </div>
         );
    }
}
 
export default EventCard;