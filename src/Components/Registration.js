import React, { Component } from 'react';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import fireconfig from '../config/firebase.config';

import Aux from './Aux';
import Modal from './Modal';
import Logo from './Logo';
import './assets/css/Registration.css';

firebase.initializeApp(fireconfig);

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSignedIn: false,
            isUserCreated: true,
            user: null,
            tempCollege: '',
            tempMobile: '',
            tempName: ''
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
            if (!!user){
                firebase.database().ref('/participants/'+user.uid)
                    .once('value').then((snapshot) => {
                        if (snapshot.val() !== null) {
                            this.setState({user: snapshot.val()})
                        }else{
                            this.setState({tempName: user.displayName});
                            this.setState({isUserCreated: false});
                        }
                    }).catch(e => console.log(e));
            }
        })
    }

    modalClosedHandler = () => {
        window.location.href = '/events/general';
    }

    collegeNameChangeHandler = (event) => {
        this.setState({tempCollege: event.target.value});
    }

    mobileNumberChangeHandler = (event) => {
        this.setState({tempMobile: event.target.value});
    }

    nameChangeHandler = (event) => {
        this.setState({tempName: event.target.value});
    }

    formSubmitHandler = (event) => {
        const regex = /^\d{10}$/;
        if (regex.test(this.state.tempMobile)) {
            const currentUser = firebase.auth().currentUser;
            firebase.database().ref('/participants/'+currentUser.uid)
                .set({
                    name: this.state.tempName,
                    email: currentUser.email,
                    mobile: this.state.tempMobile,
                    college: this.state.tempCollege
                }).then((data) => {
                    this.setState({isUserCreated: true});
                }).catch(e => console.log(e));
        }else{
            alert("Enter Valid Mobile Number without country code");
            this.setState({tempMobile: ''});
        }
        event.preventDefault();
    }

    render() { 
        return ( 
            <Aux>
                <Modal show={!this.state.isSignedIn} modalClosed={this.modalClosedHandler}>
                    <div className="ModalInner">
                        <Logo size={0}/>
                        <h3>Login to Dyuthi</h3>
                        <span>Login to Dyuthi with your Google Account for Event Registration</span>
                        <StyledFirebaseAuth 
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}/>
                    </div>
                </Modal>
                <Modal show={!this.state.isUserCreated}>
                    <div className="ModalInner">
                        <Logo size={0}/>
                        <h3>Fill Your Personal Details</h3>
                        <form className="SignupForm">
                            <input 
                                type="text" 
                                placeholder="Your Name"
                                value={this.state.tempName} 
                                onChange={this.nameChangeHandler}/>
                            <input 
                                type="text" 
                                placeholder="Enter College Name"
                                value={this.state.tempCollege} 
                                onChange={this.collegeNameChangeHandler}/>
                            <input 
                                type="tel" 
                                placeholder="Enter Mobile Number"
                                value={this.state.tempMobile}
                                onChange={this.mobileNumberChangeHandler}/>
                            <input 
                                type="submit" 
                                value="Submit" 
                                onClick={this.formSubmitHandler}/>
                        </form>
                    </div>
                </Modal>
            </Aux>
         );
    }
}
 
export default Registration;