import React from 'react';

import './assets/css/EventCard.css';

const EventCard = (props) => {  
    return ( 
        <div class="EventCard">
            <div class="text">
                <h3>
                    {props.data.eventname}
                </h3>
                <h5>
                    {props.data.dept}
                </h5>
                <p>Fee: 
                    {props.data.fee}
                </p>
                <button>add to cart</button>
            </div>
        </div>
     );
}
 
export default EventCard;