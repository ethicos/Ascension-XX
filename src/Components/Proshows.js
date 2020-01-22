import React from 'react';
import Show from './Show';

import snapchat from './assets/images/snapchat.png';

import './assets/css/proshow.css';
import './assets/css/animate.css';

class Proshows extends React.Component {
    constructor(){
        super();
        this.state = {
            currentShowIndex: 0,
            showIdList: ["show1", "show2", "show3"]
        };
        // this.changeImage = this.changeImage.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.addClass = this.addClass.bind(this);
        this.removeAllClasses = this.removeAllClasses.bind(this);
        this.showList = [
            <Show title="Pro show 1" date="20 Feb" time="5 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[0]} isActive={true}/>,
            <Show title="Pro show 2" date="21 Feb" time="6 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[1]} isActive={false}/>,
            <Show title="Pro show 3" date="22 Feb" time="4 pm onwards" 
                bookLink="http://google.com" showID={this.state.showIdList[2]} isActive={false}/>
        ];
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
    addClass(element, classNm){
        if(!element.classList.contains(classNm)){
            element.classList.add(classNm);
            return 1;
        }
        return 0;
    }
    removeAllClasses(element, class1, class2){ // classes to be exempted
        for( let classnm of element.classList ){
            if ( class1 == classnm || class2 == classnm )
                continue
            else
                element.classList.remove(classnm);
        }
    }
    updateIndex(inc){
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
    /*
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
    */
    changeShow(dir){
        if(dir==-1){
            this.updateIndex(-1);
            // slide current show left
            // const currentIndex = this.state.currentShowIndex;
            // const currentShowId = this.state.showIdList[currentIndex];
            // const currentShowEl = document.getElementById(currentShowId);
            // this.addClass( currentShowEl, "currentExitOnPrev");

            // // insert prev show
            // const parent = document.getElementById("showSec");
            // const prevShow = this.showList[ this.getIndex(currentIndex-1)];
            // const prevShowId = this.showIdList[ this.getIndex(currentIndex-1)];
            // const prevShowEl = prevShow.getElementById(prevShowId);
            // this.addClass( prevShowEl, "nextEntryOnPrev");
            // parent.appendChild(prevShowEl);
            
            // this.removeAllClasses( currentShowEl, "currentExitOnPrev", "");

        }else{
            this.updateIndex(1);
        }
    }

    render(){
        const isMobile = this.props.isMobile;
        return (
            <div className="container1">
                <section id="dg-container" className="dg-container">
                    <div className="dg-wrapper">
                        <img src={snapchat} alt="image05"/>
                        <img src={snapchat} alt="image06"/>
                        <img src={snapchat} alt="image07"/>
                    </div>
                    <nav>	
                        <span className="dg-prev">&lt;</span>
                        <span className="dg-next">&gt;</span>
                    </nav>
                </section>
            </div>
        );
    }
}

export default Proshows;
