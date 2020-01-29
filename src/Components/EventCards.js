import React, { Component } from 'react';

class EventCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return ( 
            this.props.show ?
            <div>
                <h1>Event Cards</h1>
            </div>
            : null
         );
    }
}
 
export default EventCards;