import React from 'react';
import Show from './Show';

import './assets/css/proshow.css';
import './assets/css/animate.css';

class Proshows extends React.Component {
    constructor(){
        super();
        this.state = {
            currentShowIndex: 0,
            showIdList: ["show1", "show2", "show3", "show4"]
        };
        this.changeImage = this.changeImage.bind(this);
    }
    componentDidMount(){
        this.props.setCurrentLink("proshows");
    }
    changeImage(dir){
        const getIndex = (index)=>{
            if( index >= this.state.showIdList.length )
                return 0;
            else if( index < 0)
                return this.state.showIdList.length-1;
            return index;
        }
        const addClass = (element, classNm)=>{
            if(!element.classList.contains(classNm)){
                element.classList.add(classNm);
                return 1;
            }
            return 0;
        }
        const removeClass = (element, classNm)=>{
            if(element.classList.contains(classNm)){
                element.classList.remove(classNm);
                console.log("removed class");
            }
        }
        const removeAllClasses = (element, class1, class2)=>{ // classes to be exempted
            for( let classnm of element.classList ){
                if ( class1 == classnm || class2 == classnm )
                    continue
                else
                    element.classList.remove(classnm);
            }
        }
        const currentImage = document.getElementById( this.state.showIdList[this.state.currentShowIndex]);
        if(dir==-1){
            // rotate current image right
            let x = addClass(currentImage, "rotatePrevExit");
            if(x){
                addClass(currentImage, "rotateRB");
            }
            // rotate next image right
            removeAllClasses(currentImage, "rotatePrevEntry", "show-img");
        }
        else if(dir==1){
            // rotate current image left
            let x = addClass(currentImage, "rotatePrevEntry");
            if(x){
                addClass(currentImage, "rotateRF");
            }
            
            // rotate next image left
            removeAllClasses(currentImage, "rotatePrevEntry", "show-img");
        }
    }
    render(){
        const showList = [
            <Show title="Pro show 1" date="20 Feb" time="5 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[0]} />,
            <Show title="Pro show 2" date="21 Feb" time="6 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[1]}/>,
            <Show title="Pro show 3" date="22 Feb" time="4 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[2]}/>,
            <Show title="Pro show 4" date="23 Feb" time="7 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[3]}/>
        ];

        return (
            
            <div class="row fade-in">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 column">
                    <span className="prev-show" onClick={()=> this.changeImage(-1) }>Prev</span>   
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 showSection">
                    {showList[0]}
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 column">
                    <span className="next-show" onClick={()=> this.changeImage(1) }>Next</span>   
                </div>
                
            </div>
        );
    }
}

export default Proshows;
