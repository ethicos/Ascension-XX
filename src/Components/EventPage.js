import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';

import './assets/css/events.css';
import GenEvents from './GenEvents';
import DeptEvents from './DeptEvents';
import ModalBox from './ModalBox';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 0,
            isModalOpen: false,
            modalEvent: {
                title: '',
                desc: ''
            } }
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(event){
        console.log("toggle")
        if(event==null){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }else{
            this.setState({
                isModalOpen: !this.state.isModalOpen,
                modalEvent: event
            });
        }
    }
    render() { 
        return ( 
            <div>
                <TabbedLayout currentPage={this.state.currentPage}/>
                <ModalBox 
                    show={this.state.isModalOpen}
                    onClose={this.toggleModal}
                    event={this.state.modalEvent}/>
                <Switch>
                    <Route exact path="/events/general">
                        <GenEvents modalToggle={this.toggleModal}/>
                    </Route>
                    <Route exact path="/events/dept">
                        <DeptEvents/>
                    </Route>
                </Switch>
            </div>
         );
    }
}
 
export default EventPage;