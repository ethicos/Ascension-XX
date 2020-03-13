import React from 'react';
import './assets/css/contact.css';
import fullGec from './assets/images/full-gec.svg';

import './assets/css/animate.css';

class Contact extends React.Component {
    // constructor(){
    //     super();
    // }
    componentDidMount(){
        this.props.setCurrentLink("contact");
    }
    render(){
        return (
            <div className="fade-in contact-sec">
                <div class="row contact">
                    {this.props.isMobile?
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src={fullGec} className="gec-arch fade-in"/>   
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
                                    name="GOUTHAM KRISHNA"
                                    des="Chairman pradyotha student counsil"
                                    number="+91 9446481885"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="HIMA MEGHA MS"
                                    
                                    number="+91 8921299713"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="NORSHILA RIYA"
                                    
                                    number="+91 9495250733"/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="TOM RAPHY"
                                    
                                    number="+91 7909112610"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="MOHAMMED SADIQE"
                                    
                                    number="+91 9744872986  "/>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ContactCard 
                                    name="ARCHANA"
                                    
                                    number="+91 8078878921"/>
                            </div>
                        </div>

                        <br/>
                    </div>

                    {this.props.isMobile?
                        <></>:
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src={fullGec} className="gec-arch fade-in"/>   
                        </div>
                    }
                </div>
                <div class="row contact-footer">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span className="contact-email">
                            <a href="mailto:ascension2020@gmail.com" parent="_blank">
                                ascension2020<span className="non-dyuthi">@</span>gmail.com
                            </a>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span className="contact-email">
                            <a href="https://www.instagram.com/ascension20_20/" parent="_blank">
                                <span className="non-dyuthi">@</span>ascension2020
                            </a>
                        </span>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span className="contact-email">
                            <a href="https://m.facebook.com/Ascension-2020-106003614311313/">Ascension2020</a>
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
