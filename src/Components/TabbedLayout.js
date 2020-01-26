import React, { Component } from 'react';

import './assets/css/events.css';
import './assets/css/tabbed-layout.css';
import { Link } from 'react-router-dom';

class TabbedLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let tabGenClassName = this.props.currentPage==0?"tab activeTab":"tab ";
        let tabDeptClassName = this.props.currentPage==1?"tab activeTab":"tab ";;
        let tabWrkshpClassName = this.props.currentPage==2?"tab activeTab":"tab ";;

        if(this.props.isMobile){
            return ( 
                <div>
                    <h1 className="event-title-phone">Events</h1>
                    <div className="tab-row">
                        <span className={tabGenClassName}>
                            <Link to="/events/general">Gen. Events</Link>
                        </span>       
                        <span className={tabDeptClassName}>
                            <Link to="/events/dept">Dept. Events</Link>
                        </span>
                        <span className={tabWrkshpClassName}>
                            <Link to="/events/workshops">Workshops</Link>
                        </span>
                    </div>
                </div>
             );    
        }else{
            return ( 
                <div>
                    <div className="tab-row">
                        <Link to="/events/general">
                            <span className={tabGenClassName}>
                                General Events
                            </span>    
                        </Link>
                        <Link to="/events/dept">
                            <span className={tabDeptClassName}>
                                Department Events
                            </span>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}
 
export default TabbedLayout;