import React from 'react';
import logo from './assets/images/logo.png';
import arch from './assets/images/gec-arch.png';
import gecArch from './assets/images/arch-cropped.svg';
import './assets/css/about.css';
import './assets/css/animate.css';

class About extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.setCurrentLink("about");
    }
    render(){
        return (
            <div class="row about fade-in">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    {this.props.isMobile?
                        <img src={arch} className="gec-arch"/>:
                        <img src={gecArch} className="gec-arch"/>   }
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="about-title">Describing the vibe is <br/> the toughest part !!</h2>
                    <p className="about-desc">
                        Id amet ea adipisicing magna fugiat ullamco laborum pariatur exercitation ad minim ut proident aute.
                         Magna velit eu eu excepteur occaecat ad officia irure culpa consequat et non incididunt sunt. 
                         Quis nulla officia nisi dolore exercitation in eu ea nostrud quis consequat amet laborum id. 
                         Dolor cillum eiusmod veniam est nisi esse deserunt et exercitation ad sit adipisicing ullamco.<br/>
                         Quis nulla officia nisi dolore exercitation in eu ea nostrud quis consequat amet laborum id. 
                         Dolor cillum eiusmod veniam est nisi esse deserunt et exercitation ad sit adipisicing ullamco.
                         Quis nulla officia nisi dolore exercitation in eu ea nostrud quis consequat amet laborum id. 
                         Dolor cillum eiusmod veniam est nisi esse deserunt et exercitation ad sit adipisicing ullamco.</p>
                </div>
            </div>
        );
    }
}

export default About;
