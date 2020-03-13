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
                        <h2 className="about-title">ASCENSION 2020<br/></h2>
                        <p className="about-desc">
                        A Medical fiesta aimed at endowing oppurtunities for medical intellects to learn from the experts and to refine their skills through an array of workshops and challenges while instilling professionalism and good ethics<br></br><br></br>



PK Das Institute of Medical Sciences is a reputed super specialty and general hospital with 750 beds situated at ottapalam in Kerala. the hospital is in close proximity to the city centres and located on a picturesque location near the banks of Nila, a river of great significance in Kerala`s history and culture.PK DAS INSTITUTE OF MEDICAL SCIENCES is a state-of-the-art super- speciality and general hospital with 750 beds which aims to provide world-class healthcare at the least possible cost to all patients. A seal of medical excellence, PK DAS INSTITUTE OF MEDICAL SCIENCES is named after its founder Late P. K. Das, F.I.E., F.I. Mech. E., M.S. Engg., A.F.R.Ae.S. (London), C.Engg. an academician par excellence, a renowned industrialist and a great philanthropist. The hospital is part of the Nehru Group of institutions, a name synonymous with quality higher education in south India. PK DAS INSTITUTE OF MEDICAL SCIENCES offers a level of expertise and a standard of clinical excellence which are world class and at par with the topmost healthcare centers in India and abroad – attracting leading consultants from around the world and becoming the hospital of choice for both patients and healthcare providers</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
