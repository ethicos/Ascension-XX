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
        this.getIndex = this.getIndex.bind(this);
    }
    componentDidMount(){
        this.props.setCurrentLink("proshows");
    }
    getIndex(index){
        if( index >= this.state.showIdList.length )
            return 0;
        else if( index < 0)
            return this.state.showIdList.length-1;
        return index;
    }
    changeImage(dir){
        const updateIndex = (inc)=>{
            let newIndex = this.state.currentShowIndex;
            if( inc > 0 && this.state.currentShowIndex >= this.state.showIdList.length-1 ){
                newIndex = 0;
            }else if( inc < 0 && this.state.currentShowIndex <= 0){
                newIndex = this.state.showIdList.length - 1;
            }else{
                newIndex += inc;
            }
            console.log("update to ", newIndex)
            this.setState({
                currentShowIndex: newIndex
            });
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
        const currentImage = document.getElementById( this.state.showIdList[this.getIndex(this.state.currentShowIndex)]);
        console.log(currentImage)
        if(dir==-1){
            // exit current
            addClass(currentImage, "currentExitOnPrev");

            // entry prev
            const prevImage = document.getElementById( this.state.showIdList[this.getIndex(this.state.currentShowIndex-1)]);
            addClass(currentImage, "nextEntryOnPrev");

            removeAllClasses(currentImage, "currentExitOnPrev", "show-img");
            removeAllClasses(prevImage, "nextEntryOnPrev", "show-img");
            updateIndex(-1);
        }
        else if(dir==1){
            // exit current
            addClass(currentImage, "currentEntryOnNext");
            
            // entry next
            const nextImage = document.getElementById( this.state.showIdList[this.getIndex(this.state.currentShowIndex+1)]);
            addClass(currentImage, "nextEntryOnNext");
            removeAllClasses(currentImage, "currentEntryOnNext", "show-img");
            removeAllClasses(nextImage, "currentEntryOnNext", "show-img");
            updateIndex(1);
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
                {this.props.isMobile?
                    <></>:
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 column">
                        <span className="prev-show" onClick={()=> this.changeImage(-1) }>Prev</span>   
                    </div>
                }
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 showSection">
                    {showList[this.getIndex(this.state.currentShowIndex-1)]} 
                    {showList[this.getIndex(this.state.currentShowIndex)]}
                    {showList[this.getIndex(this.state.currentShowIndex+1)]}
                </div>
                {this.props.isMobile?
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 column">
                        <span className="prev-show" onClick={()=> this.changeImage(-1) }>Prev</span>   
                        <span className="next-show" onClick={()=> this.changeImage(1) }>Next</span>   
                    </div>:
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 column">
                        <span className="next-show" onClick={()=> this.changeImage(1) }>Next</span>   
                    </div>
                }
                
            </div>
        );
    }
}

export default Proshows;
