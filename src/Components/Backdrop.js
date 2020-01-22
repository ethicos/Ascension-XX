import React from 'react';

import './assets/css/Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default backdrop;
