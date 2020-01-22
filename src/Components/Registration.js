import React, { Component } from 'react';

import Aux from './Aux';
import Modal from './Modal';
import Logo from './Logo';
import './assets/css/Registration.css';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    modalClosedHandler = () => {
        window.location.href = '/events';
    }

    render() { 
        return ( 
            <Aux>
                <Modal show={true} modalClosed={this.modalClosedHandler}>
                    <div className="ModalInner">
                        <Logo size={0}/>
                        <h3>Login to Dyuthi</h3>
                        <span>Login to Dyuthi with your Google Account for Event Registration</span>
                    </div>
                </Modal>
            </Aux>
         );
    }
}
 
export default Registration;