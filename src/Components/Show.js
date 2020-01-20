import React from 'react';

import arch from './assets/images/gec-arch.png';

import './assets/css/show.css';

class Show extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div class="row show">
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src={arch} className="show-img"/>
                </div>
            </div>
        );
    }
}

export default Show;
