import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './assets/css/modalbox.css';

class ModalBox extends React.Component {
    constructor(){
      super();
      this.getEventDesc = this.getEventDesc.bind(this);
    }
    render() {
      // Render nothing if the "show" prop is false
      if(!this.props.show) {
        return null;
      }
      return (
        <div className="backdrop fade-in">
          <div className="modal-style">
            <span className="closeBtn" 
            onClick={this.props.onClose}>
                x
            </span>
            <h3>{this.props.event.eventname}</h3>
            <p>
                <span className="fee-sec">Registration Fee: ₹{this.props.event.fee}</span>
                <span dangerouslySetInnerHTML={{__html: this.props.event.desc}} />
                {!this.props.isWorkshop?
                  <span className="event-rounds" dangerouslySetInnerHTML={{__html: this.getEventDesc(this.props.event)}}/>:
                  <></>
                }
            </p>
  
            <div className="footer">
              {this.props.isWorkshop?
                <div className="event-contact">
                  <span>{this.props.event.contactPerson}</span>
                  <span>{this.props.event.contactNo}</span>
                </div>:
                <></>
                // <Link to="/events/register">Register Now</Link>
              }
            </div>
          </div>
        </div>
      );
    }
    getEventDesc(event){
      const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const getDate = (d)=>{
          let dt = new Date(d);
          return `${days[dt.getDay()]} ${dt.getDate()}, ${months[dt.getMonth()]} ${dt.getFullYear()}`;
      }
      const getTime = (t)=>{
        let splt = t.split(":");
        const padTime = (l)=>{ if(l<10){ return "0" + l} else { return l} }
        if ( splt[0] > 12 )
          return padTime(parseInt(splt[0]) - 12) + ":" + splt[1] + " PM"
        else if( splt[0] == "00"){
          return "12:" + splt[1] + " AM"
        }
        return t + " AM";
      }
      let content = "<br/><br/>";
      console.log(event.rounds)
      for( let round of event.rounds){
        console.log(round)
        let roundStr = "<b>Round: " + round.roundname + "</b><br/>";
        roundStr += "<p>Date: " + getDate(round.date) + "<br/>";
        roundStr += "Time: " + getTime(round.time) + "<br/>";
        roundStr += "Venue: " + round.venue + "<br/></p>";
        content += roundStr;
      }
      return content;
    }
  }
  
  ModalBox.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
 
export default ModalBox;