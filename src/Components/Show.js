import React from 'react';

import arch from './assets/images/arch.svg';

import './assets/css/show.css';

class Show extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div class="row show">
                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <img src={arch} className="show-img" id={this.props.showID}/>
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
        );
    }
}

export default Show;
