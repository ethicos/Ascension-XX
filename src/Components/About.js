import React from 'react';
import logo from './assets/images/logo.png';
import arch from './assets/images/gec-arch.png';
import gecArch from './assets/images/arch-cropped.svg';

import Sponsors from './Sponsors';

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
            <div class="about fade-in">
                <div className="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        {this.props.isMobile?
                                <Sponsors isMobile={true}/>:
                            // <img src={arch} className="gec-arch"/>:
                            <img src={gecArch} className="gec-arch"/>   }
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h2 className="about-title">Describing the vibe is <br/> the toughest part !!</h2>
                        <p className="about-desc">
                        Dyuthi is one of the most prominent and celebrated platforms of the year, attracting the talented and energetic youth from all over the South.

                        It is 'the' spot where all kinds of students from anywhere and everywhere congregates to explore, innovate and create.
                         
                        This time, students get to showcase not just their winsome cultural talents, but also their adept technical flair, ensuring that every student gets to portray his inner talents, be what it may.

                        For students all over Kerala, Dyuthi has become the beacon for an exuberant rendezvous of art and technology.

                        With this diverse multitude honing in, GEC becomes a gala of  competence and energy, creating memorable moments to treasure enduringly.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
