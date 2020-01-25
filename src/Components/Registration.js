import React, { Component } from 'react';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import fireconfig from '../config/firebase.config';

import Aux from './Aux';
import Modal from './Modal';
import Logo from './Logo';
// import GoogleJoin from './GoogleJoin';
import './assets/css/Registration.css';

firebase.initializeApp(fireconfig);

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSignedIn: false
         }
    }

    uiConfig = {
        signInFlow: "redirect",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user});
        })
    }

    modalClosedHandler = () => {
        window.location.href = '/events/general';
    }

    render() { 
        return ( 
            <Aux>
                <Modal show={!this.state.isSignedIn} modalClosed={this.modalClosedHandler}>
                    <div className="ModalInner">
                        <Logo size={0}/>
                        <h3>Login to Dyuthi</h3>
                        <span>Login to Dyuthi with your Google Account for Event Registration</span>
                        {/* <GoogleJoin /> */}
                        <StyledFirebaseAuth 
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}/>
                    </div>
                </Modal>
            </Aux>
         );
    }
}
 
export default Registration;