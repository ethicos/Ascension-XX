import React from 'react';

import './assets/css/EventCard.css';

const EventCard = (props) => {
    return ( 
        <div class="EventCard">
            <img src="https://www.quackit.com/pix/samples/23m.jpg" alt="Sample" />
            <div class="text">
                <h3>Seamlessly visualize quality</h3>
                <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                <button>Here's why</button>
            </div>
        </div>
     );
}
 
export default EventCard;