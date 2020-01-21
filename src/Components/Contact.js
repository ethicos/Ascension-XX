import React from 'react';
import './assets/css/contact.css';
import arch from './assets/images/arch.svg';
import gecArch from './assets/images/arch-cropped.svg';

import './assets/css/animate.css';

class Contact extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.setCurrentLink("contact");
    }
    render(){
        return (
            <div className="fade-in">
                <div class="row contact">
                    {this.props.isMobile?
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src={arch} className="gec-arch"/>   
                        </div>:
                        <></>
                    }
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h2 className="contact-title">
                            Feel free to <br/>
                            get in touch with us 
                        </h2>
                        <br/>
                        
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="Mohammed Arshad"
                                    des="Convenor"
                                    number="+91 98765 43210"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="Smera KV"
                                    des="Joint Convenor"
                                    number="+91 98765 43210"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="Roshan Tomy"
                                    des="Secretary"
                                    number="+91 98765 43210"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="Swathy Krishna"
                                    des="Joint Secretary"
                                    number="+91 98765 43210"/>
                            </div>
                        </div>
                        <br/>
                    </div>
                    {this.props.isMobile?
                        <></>:
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src={gecArch} className="gec-arch"/>   
                        </div>
                    }
                </div>
                <div class="row contact-footer">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span className="contact-email">
                            <a href="mailto:dyuthi@gectcr.ac.in" parent="_blank">
                                dyuthi<span className="non-dyuthi">@</span>gectcr.ac.in
                            </a>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span className="contact-email">
                            <a href="https://instagram.com/dyuthilive" parent="_blank">
                                <span className="non-dyuthi">@</span>dyuthilive
                            </a>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span className="contact-email">
                            <a href="https://www.facebook.com/dyuthigec/">dyuthigec</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const ContactCard = (props)=>{
    return (
        <div className="contact-card">
            <h3 className="contact-name">{props.name}</h3>
            <span className="contact-designation">{props.des}</span>
            <span className="contact-number">
                <a href={"tel:" + props.number}>{props.number}</a>
            </span>
        </div>
    )
}

export default Contact;
