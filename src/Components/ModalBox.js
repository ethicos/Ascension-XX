import React, { Component } from 'react';
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
          <div style={
            {
                backgroundColor: '#fff',
                padding: '5vh 8vh',
                maxWidth: '60vw',
                minHeight: '40vh',
                borderRadius: '10px'
            }
          }>
            <span className="closeBtn" 
            onClick={this.props.onClose}
            style={
                {
                    position: 'relative',
                    top: '0',
                    left: '100%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: '#ccc',
                    cursor: 'pointer',
                    padding: '5px 7px',
                    color: '#fff',
                    fontSize: '2vh'
                }
            }>
                x
            </span>
            <h3>{this.props.event.title}</h3>
            <p>
                {this.props.event.desc}
            </p>
  
            <div className="footer">
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