import React, { Component } from 'react';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import fireconfig from '../config/firebase.config';

import Aux from './Aux';
import Modal from './Modal';
import Logo from './Logo';
import EventCards from './EventCards';
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
                document.getElementById("root").style.display = "none";
                document.getElementById("loader").style.display = "block";
                firebase.database().ref('/participants/'+user.uid)
                    .once('value').then((snapshot) => {
                        document.getElementById("loader").style.display = "none";
                        document.getElementById("root").style.display = "block";
                        if (snapshot.val() !== null) {
                            this.setState({user: snapshot.val()});
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

    capitalize = (str) => {
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++){
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    collegeNameChangeHandler = (event) => {
        let tpClg = this.capitalize(event.target.value);
        this.setState({tempCollege: tpClg});
    }

    mobileNumberChangeHandler = (event) => {
        this.setState({tempMobile: event.target.value});
    }

    nameChangeHandler = (event) => {
        let tpNm = this.capitalize(event.target.value);
        this.setState({tempName: tpNm});
    }

    formatDyuthiId = (did) => {
        let final;
        const digs = did.toString().length;
        switch (digs) {
            case 1:
                final = 'DYT00'+did;
                break;
            case 2:
                final = 'DYT0'+did;
                break;
            default:
                final = 'DYT'+did;
        }
        return final;
    }

    formSubmitHandler = (event) => {
        const regex = /^\d{10}$/;
        if (regex.test(this.state.tempMobile)) {
            const currentUser = firebase.auth().currentUser;
            firebase.database().ref('/participant_count').once('value')
                .then((snapshot) => {
                    let dyId = snapshot.val()+1;
                    dyId = this.formatDyuthiId(dyId);
                    const tempUser = {
                        dyuthi_id: dyId,
                        name: this.state.tempName,
                        email: currentUser.email,
                        mobile: this.state.tempMobile,
                        college: this.state.tempMobile
                    }
                    firebase.database().ref('/participants/'+currentUser.uid)
                        .set(tempUser).then(() => {
                            firebase.database().ref('/participant_count')
                                .set(snapshot.val()+1)
                                .then(() => {
                                    this.setState({isUserCreated: true, user: tempUser});
                                }).catch(em => console.log(em));
                        }).catch(e => console.log(e));
                }).catch(er => console.log(er));      
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
                <Modal show={!this.state.isUserCreated}  modalClosed={this.modalClosedHandler}>
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
                <EventCards 
                    show={this.state.isUserCreated}
                    user={this.state.user}/>
            </Aux>
         );
    }
}
 
export default Registration;