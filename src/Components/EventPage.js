import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";

import TabbedLayout from './TabbedLayout';

import './assets/css/events.css';
import GenEvents from './GenEvents';
import DeptEvents from './DeptEvents';
import Workshops from './Workshops';
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
        this.updateCurrentPage = this.updateCurrentPage.bind(this);
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
    updateCurrentPage(pageNo){
        this.setState({
            currentPage: pageNo
        });
    }
    render() { 
        return ( 
            <div>
                <TabbedLayout currentPage={this.state.currentPage}
                             isMobile={this.props.isMobile} />
                <ModalBox 
                    show={this.state.isModalOpen}
                    onClose={this.toggleModal}
                    event={this.state.modalEvent}/>
                <Switch>
                    <Route exact path="/events/general">
                        <GenEvents 
                            modalToggle={this.toggleModal}
                            updateCurrentPage={this.updateCurrentPage}/>
                    </Route>
                    <Route exact path="/events/dept">
                        <DeptEvents
                            modalToggle={this.toggleModal}
                            updateCurrentPage={this.updateCurrentPage}/>
                    </Route>
                    {this.props.isMobile? <Route exact path="/events/workshops">
                                            <Workshops
                                                isMobile={this.props.isMobile}
                                                modalToggle={this.toggleModal}
                                                updateCurrentPage={this.updateCurrentPage}/>
                                        </Route>
                                        : <></>}
                </Switch>
            </div>
         );
    }
}
 
export default EventPage;