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
                        eventname: "Ethical Hacking",
                        fee: "Registration fee: ₹ 800",
                        desc: "loopholes or voids that are necessary to be filled, which may be taken advantage of when exposed to the wrong side of the spectrum. Ethical hacking is a counteractive art that fills in these voids with an insightful overview of vulnerabilities and overarching solutions, appearing a piece of cake to one who knows what he/she’s handling. A workshop on the same will be conducted on February 1st and 2nd at the Mechanical Seminar Hall by Cyberator Technologies, giving you an opportunity you surely wouldn’t want to miss",
                        posterUrl: hacking,
                        contactPerson: "Abhijith Radhakrishnan",
                        contactNo: "+91 79079 77470"
                    },{
                        eventname: "Artificial Intelligence",
                        fee: "Registration fee: ₹ 500",
                        desc: "world of science and technology has never been far from this thought since the advent of ‘Artificial Intelligence’ and emulation of the human brain’s self-efficiency, exemplifying stark results and pioneering achievements. A workshop, purely based on AI-the technology of the future and beacon of automation, will be conducted on February 1st at the Electronics Department Seminar Hall, by the CSEED(Centre for Skill Enhancement and Employability Development), Thrissur. Make sure you don’t miss this portal to the next-dimensional tomorrow!",
                        posterUrl: ai,
                        contactPerson: "Athul M R",
                        contactNo: "+91 94004 10209"
                    },{
                        eventname: "3d design & 3d printing",
                        fee: "Registration fee: ₹ 600",
                        desc: "There used to be those days when people were in awe of replication of images and sceneries. It used to be manual, depending a whole lot on human artistry and this very baffling tradition found an automated successor in 2D printers, capable of reproducing images in colour as well as black and white. However, the future had a very unbelievable invention in hand, which could replicate objects as well-the 3D printer. <br/>3D Printing, which is an Additive Manufacturing technique creates physical objects from virtual 3D CAD models by depositing successive layers of material. On February 8th, Infusory Designs is conducting a workshop on 3D Design and 3D Printing which’ll cover the following topics <br/>* Developing ideas into prototypes<br/>* Constructing 3D model of your prototype<br/>* Learning basics of 3D printing <br/>* Familiarizing the parts of 3D printer<br/><a  href=\"https://bit.ly/2NNzQAj\">https://bit.ly/2NNzQAj</a>",
                        posterUrl: wrkshop3d,
                        contactPerson: "Vijay A",
                        contactNo: "+91 94477 09775"
                    },{
                        eventname: "Web Development",
                        fee: "Registration fee: ₹ 300",
                        desc: "Development’ will be conducted, which will cover all the core concepts-using Django framework and including basics of HTML and CSS-and the participants will be equipped to make a demo website by the end of the session. The workshop on *Web Development* will be conducted by the Ideator on February 21st.Contact Abhijith Radhakrishnan-7907977470 for further details. The registration fee is Rs.300. Interested candidates also visit the following link- <a hre=\"https://forms.gle/RUz3VZD9DnNKA5hD9\">https://forms.gle/RUz3VZD9DnNKA5hD9</a>",
                        posterUrl: web,
                        contactPerson: "Abhijith Radhakrishnan",
                        contactNo: "+91 79079 77470"
                    },{
                        eventname: "Hacking Android Applications",
                        fee: "Registration fee: ₹ 300",
                        desc: "Development’ will be conducted, which will cover all the core concepts-using Django framework and including basics of HTML and CSS-and the participants will be equipped to make a demo website by the end of the session.The workshop on *Web Development* will be conducted by the Ideator on February 21st.Contact Abhijith Radhakrishnan-7907977470 for further details. The registration fee is Rs.300. Interested candidates also visit the following link-<a href=\"https://forms.gle/RUz3VZD9DnNKA5hD9\">https://forms.gle/RUz3VZD9DnNKA5hD9</a>",
                        posterUrl: android,
                        contactPerson: "Cyriac Biju",
                        contactNo: "+91 80784 60133"
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
