import React from 'react';

import arch from './assets/images/arch.svg';
import inst from './assets/images/inst.jpg';
import './assets/css/show.css';
import './assets/css/proshow.css';

class Show extends React.Component {
    constructor(){
        super();
    }
    render(){
        if( this.props.isActive)
            return (
                <div className="show"  id={this.props.showID}>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <img src={inst} className="show-img"/>
                            <h2 className="show-title">{this.props.title}</h2>

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="show-date">{this.props.date}</span>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="show-date">{this.props.time}</span>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="show-book">
                                        <a href={this.props.bookLink}>Book Now</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                    </div>
                </div> 
           );
        else return <div style={{display:'none'}}></div>
    }
}

export default Show;
