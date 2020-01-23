// import './assets/js/modernizr.custom.53451'
import './assets/js/proshow'
import React from 'react';
import Show from './Show';

import ProshowPC from './ProshowPC'
import ProShowMobile from './ProShowMobile'
import './assets/css/proshow.css';
import './assets/css/animate.css';
// import  './assets/css/style.css'
import $ from 'jquery';
window.jQuery = $;
// import jQuery from 'jquery'
// import './assets/js/jquery-2.2.4.min'



class Proshows extends React.Component {
    constructor() {
        super();
        this.state = {
            currentShowIndex: 0,
            showIdList: ["show1", "show2", "show3"]
        };
        // this.changeImage = this.changeImage.bind(this);
        // this.getIndex = this.getIndex.bind(this);
        // this.addClass = this.addClass.bind(this);
        // this.removeAllClasses = this.removeAllClasses.bind(this);
        this.showList = [
            <Show title="Pro show 1" date="20 Feb" time="5 pm onwards"
                  bookLink="http://google.com" showID={this.state.showIdList[0]} isActive={true}/>,
            <Show title="Pro show 2" date="21 Feb" time="6 pm onwards"
                  bookLink="http://google.com" showID={this.state.showIdList[1]} isActive={false}/>,
            <Show title="Pro show 3" date="22 Feb" time="4 pm onwards"
                  bookLink="http://google.com" showID={this.state.showIdList[2]} isActive={false}/>
        ];
    }

    componentDidMount() {
        this.props.setCurrentLink("proshows");
        var carousel = $('.carousel').waterwheelCarousel();
        // $(function() {
        //     $('#dg-container').gallery();
        // });
    }



    render() {
        const isMobile = this.props.isMobile;
        return (
            <div className="container1">
                {/*<section id="dg-container" className="dg-container">*/}
                {/*    <div className="dg-wrapper">*/}
                {/*        <img src={snapchat} alt="image05"/>*/}
                {/*        <img src={snapchat} alt="image06"/>*/}
                {/*        <img src={snapchat} alt="image07"/>*/}
                {/*    </div>*/}
                {/*    <nav>	*/}
                {/*        <span className="dg-prev">&lt;</span>*/}
                {/*        <span className="dg-next">&gt;</span>*/}
                {/*    </nav>*/}
                {/*</section>*/}
                <div className="container">
                    {isMobile ? <ProShowMobile/>:<ProshowPC/>}
                </div>
            </div>
    );}
    }

    export default Proshows;
