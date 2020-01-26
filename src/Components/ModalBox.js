import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './assets/css/modalbox.css';

class ModalBox extends React.Component {
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
            <h3>{this.props.event.title}</h3>
            <p>
                <span className="fee-sec">{this.props.event.fee}</span>
                {this.props.event.desc}
            </p>
  
            <div className="footer">
              {this.props.isWorkshop?
                <div className="event-contact">
                  <span>{this.props.event.contactPerson}</span>
                  <span>{this.props.event.contactNo}</span>
                </div>:
                <Link to="/events/register">Register Now</Link>
              }
            </div>
          </div>
        </div>
      );
    }
  }
  
  ModalBox.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
 
export default ModalBox;