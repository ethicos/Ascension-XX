import React, { Component } from 'react';

import './assets/css/Modal.css';
import Aux from './Aux';
import Backdrop from './Backdrop';

class Modal extends Component {

  render(){
    return (
      <Aux>
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
          <div
              className="Modal"
              style={{
                  transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? '1' : '0'
              }}>
              {
                !!this.props.clbt ? <span className="closeBtn">x</span> : null
              }
              {this.props.children}
          </div>
      </Aux>
    );
  }
}

export default Modal;
