import React, { Component } from 'react';
import {
    Switch,
    Link,
    Route} from "react-router-dom";
import firebase from 'firebase';

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
            deptEvents: [],
            genEvents: [],
            modalEvent: {
                title: '',
                desc: ''
            } }
        this.toggleModal = this.toggleModal.bind(this);
        this.updateCurrentPage = this.updateCurrentPage.bind(this);
        this.fetchEvents = this.fetchEvents.bind(this);
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
    componentDidMount(){
        this.fetchEvents();
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
                <h3 className="page-title" id="loading">loading...</h3>
                <Switch>
                    <Route exact path="/events/general">
                        <GenEvents 
                            modalToggle={this.toggleModal}
                            updateCurrentPage={this.updateCurrentPage}
                            events={this.state.genEvents}/>
                    </Route>
                    <Route exact path="/events/dept">
                        <DeptEvents
                            modalToggle={this.toggleModal}
                            updateCurrentPage={this.updateCurrentPage}
                            events={this.state.deptEvents}/>
                    </Route>
                    {this.props.isMobile? <Route exact path="/events/workshops">
                                            <Workshops
                                                isMobile={this.props.isMobile}
                                                updateCurrentPage={this.updateCurrentPage}/>
                                        </Route>
                                        : <></>}
                </Switch>
            </div>
         );
    }
    fetchEvents(){
        var database = firebase.database();
        database.ref("/events/").once('value').then( (snapshot)=>{
            const snaps = snapshot.val();
            var data = [];
            var genEvents = [];
            var deptEvents = {};
            for( let row in snaps){
                let event = snaps[row]
                data.push(event);
                if(event.is_department){
                    let dept = event.department;
                    if(dept in Object.keys(deptEvents)){
                        deptEvents[dept].push(event);
                    }else{
                        deptEvents[dept] = [event,];
                    }
                }else if(event.is_department == "" && event.department == ""){
                    // do nothing
                }else{
                    genEvents.push(event);
                }
            }
            if(data.length <= 0){
                this.setState({
                    deptEvents: [],
                    genEvents: []
                });
                document.getElementById("loading").innerText = "Coming Soon";
                return;
            }else{
                var sortedDeptEvents = Object.keys(deptEvents).forEach((d)=>{})
                this.setState({
                    deptEvents: deptEvents,
                    genEvents: genEvents
                });
            }
            console.log("gen", genEvents);
            console.log("dept", deptEvents);
            document.getElementById("loading").style.display = "none";
        })
    }
}
 
export default EventPage;