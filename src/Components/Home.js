import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from 'p5';
// import sketch from './sketches/sketch';
import './assets/css/home.css';
import './assets/css/clouds.css';
import cloud from './assets/images/cl1.png';
import cloud1 from './assets/images/cl2.png';
import cloud2 from './assets/images/cl3.png';
import cloud3 from './assets/images/cl4.png';


// function Home(){
//     return (
//         <div className="gec-home" id="home">
//             <P5>
//                 <cloud/>
//             </P5>
//             <p className="dyuthi-date">Feb 20 21 22 23</p>
//             <h1 className="dyuthi-title dyuthi-title-dark">dyuthi <span className="xx">XX</span></h1>
//             <p className="dyuthi-info">The National Level Multi Fest <br/>
//             Organised by GEC Thrissur</p>
//         </div>
//     );
// }


class Home extends React.Component {
    constructor(){
        super();
        this.moveClouds = this.moveClouds.bind(this);
        this.fadeOut = this.fadeOut.bind(this);
        this.state = {
            y : null
        };
    }

    componentDidMount(){
        // const sk = new p5(sketch);
        // document.getElementById("mountain").addEventListener("mousemove", this.moveClouds);
        console.log("loaded", this.props.loaded);
        // if(!this.props.loaded){
            this.setState({y : setInterval( this.moveClouds, 50) });
        // }
    }

    componentWillUnmount(){
        if( this.state.y != null )
            clearInterval(this.state.y);
        this.fadeOut();
    }

    render(){
        return (
            <div className="gec-home" id="home">
                <p className="dyuthi-date">Feb 20 21 22 23</p>
                <h1 className="dyuthi-title dyuthi-title-dark">dyuthi <span className="xx">XX</span></h1>
                <p className="dyuthi-info">The National Level Multi Fest <br/>
                Organised by GEC Thrissur</p>

                {/* {!this.props.loaded ? */}
                    <div className="mountain" id="mountain">  
                        <div id="cloud1" className="cloud">
                            <img src={cloud}/>
                        </div>
                        <div id="cloud2" class="cloud">
                            <img src={cloud1}/>
                        </div>
                        <div id="cloud3" class="cloud">
                            <img src={cloud2}/>
                        </div>
                        <div id="cloud4" class="cloud">
                            <img src={cloud3}/>
                        </div>
                    </div>
                {/* : <></>} */}
                {/* {this.props.setLoaded(true)} */}
    }
            </div>
        );
    }

    fadeOut(){
    
    }

    moveClouds(){
        const LEFT_THRESHOLD = 120;
        const TOP_THRESHOLD = 120;
        /* clouds 1 & 2 move to the left 
           clouds 3 & 4 to the right */
         for(let i = 1; i < 5; i++){
           var cloud = 
           document.getElementById("cloud" + i);
           if ( cloud == null)
                continue
           cloud.style.transitionTimingFunction = "ease-out";
           cloud.style.transitionDuration = "700ms";
           var top =  window.getComputedStyle(cloud, null).getPropertyValue("top");
           
            let topValue = parseInt(top);

            topValue = topValue - TOP_THRESHOLD;
            top = topValue + "px";
          
           cloud.style.top = top;
           
           var left = window.getComputedStyle(cloud, null).getPropertyValue("left");
             let leftValue = parseInt(left);
           
            if(i < 3){
            leftValue = leftValue - LEFT_THRESHOLD;
            }else {
            leftValue = leftValue + LEFT_THRESHOLD;
            }
            left = leftValue + "px";
        
           
           cloud.style.left = left;
          
         }
       }
    moveCloudsByDefault(){
        let topValue, leftValue;
        for(let i = 1; i < 5; i++){

            if( topValue != null && topValue < 10 ){
                continue;
            }
            if( leftValue != null && leftValue < 10 ){
                continue;
            }

            var cloud = 
            document.getElementById("cloud" + i);
            cloud.style.transitionTimingFunction = "ease-out";
            cloud.style.transitionDuration = "700ms";
            var top =  window.getComputedStyle(cloud, null).getPropertyValue("top");
            
             topValue = parseInt(top);
             topValue = topValue - 20;
             top = topValue + "px";
           
            cloud.style.top = top;
            
            var left = window.getComputedStyle(cloud, null).getPropertyValue("left");
              leftValue = parseInt(left);
            
              if(i < 3){
                leftValue = leftValue - 30;
              }else {
                leftValue = leftValue + 30;
              }
              left = leftValue + "px";
            
            cloud.style.left = left;
           
          }
    }
}

export default Home;
