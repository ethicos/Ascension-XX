import React from 'react';
import EventItem from './EventItem';
import ModalBox from './ModalBox';
import './assets/css/events.css';
import './assets/css/animate.css';
import hacking from './assets/images/hacking-workshop.jpg';
import ai from './assets/images/ai.jpg';
import wrkshop3d from './assets/images/3d.jpg';
import web from './assets/images/web.jpg';
import android from './assets/images/android.jpg';

class Workshops extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: [{
                        eventname: "day 1",
                        fee: "",
                        desc: "",
                        posterUrl: hacking,
                        contactPerson: "",
                        contactNo: ""
                    },{
                        eventname: "day 2",
                        fee: "",
                        desc: "",
                        posterUrl: ai,
                        contactPerson: "",
                        contactNo: ""
                    },{
                        eventname: "day 2",
                        fee: "",
                        desc: "",
                        posterUrl: wrkshop3d,
                        contactPerson: "",
                        contactNo: ""
                    },{
                        eventname: "day 3",
                        fee: "",
                        desc: "",
                        posterUrl: web,
                        contactPerson: "",
                        contactNo: ""
                    },{
                       eventname: "day 3",
                        fee: "",
                        desc: "",
                        posterUrl: android,
                        contactPerson: "",
                        contactNo: ""
                        
                    }]
        }
        this.getEvents = this.getEvents.bind(this);
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
    getEvents(){
        let view = [];
        let row = [];
        for( let event of this.state.events){
            row.push(<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <EventItem 
                            event={event}
                            modalToggle={this.toggleModal}/>
                    </div>);
            if(row.length == 3){
                view.push(<div className="row">
                            {row}        
                        </div>);
                row = [];
            }
        }
        if(row.length != 0){
            view.push(<div className="row">
                            {row}        
                        </div>);
            row = [];
        }
        return view;
    }
    componentDidMount(){
        if( this.props.isMobile ){
            this.props.updateCurrentPage(2);
        }else{
            this.props.setCurrentLink("workshops");
        }   
    }
    render(){
        return (
            <div class="events fade-in">
                    <ModalBox 
                        show={this.state.isModalOpen}
                        onClose={this.toggleModal}
                        event={this.state.modalEvent}
                        isWorkshop={true}/>
                {this.getEvents()}
            </div>
        );
    }
}

export default Workshops;
