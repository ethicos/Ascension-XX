import React from 'react';
import logo from './assets/images/logo.png';
import snap from './assets/images/snapchat.png';
import './assets/css/sponsors.css';
import './assets/css/animate.css';

class Sponsors extends React.Component {
    constructor(){
        super();
        this.sponsorList = [
            <SponsorItem img={snap} size={2}/>,
            <SponsorItem img={snap} size={2}/>
        ];
    }
    componentDidMount(){
        this.props.setCurrentLink("sponsors");
    }
    getSponsors(){
        let view = []
        let row = []
        for(let sponsor of this.sponsorList){
            row.push(<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">{sponsor}</div>)
            if( row.length == 3){
                view.push(<div class="row">{row}</div>)
                row = []
            }
        }
        if(row.length != 0){
            view.push(<div class="row">{row}</div>)
        }
        return view;
    }
    render(){
        
        return (
            <div className="sponsor fade-in">
                <div class="container">
                    <h2 className="sponsor-page-title">Sponsors</h2>
                    {this.getSponsors()}
                </div>
            </div>
        );
    }
}

export default Sponsors;

function SponsorItem(props){
    let classNames = "sponsor-item ";
    switch(props.size){
        case 2:
            classNames += "sponsor-big";
            break;
        case 1:
            classNames += "sponsor-medium";
            break;
        case 0:
            classNames += "sponsor-small";
            break;
    }
    return (
        <img src={props.img} className={classNames}/>
    )
}