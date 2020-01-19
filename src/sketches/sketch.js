

// rain effect --- https://codepen.io/shtrom/pen/NpxJWy

import p5 from 'p5';
import cloud1 from '../images/cloud.png';
import cloud2 from '../images/cloud1.png';
import cloud3 from '../images/cloud2.png';
import cloud from '../images/clouds.png';
import gec from "../images/gec.png";

const sketch = (p5) => {
    var canvas;
    
    var navHeight = document.getElementsByTagName("nav")[0].offsetHeight * 2;
    var acceleration = 0.0098;
    var nDrops = 1000;
    var drops = [];
    console.log(navHeight)
    // Set height and width of canvas
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight - navHeight;  

    // make library globally available
    window.p5 = p5;

    
    let bg, bigCloud, cloudA;
    
    p5.preload = ()=>{
        bg = p5.loadImage(gec);
    }

    // Setup function
    p5.setup = () => {
        let canvas = p5.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('root');      
        p5.background(255, 255, 255);
        p5.image(bg, 0, canvasHeight - bg.height);
    }

    // Draw function
    p5.draw = () => {
        
    }
    p5.mouseMoved = ()=>{
    }

    // Test function, accesible from outside
    p5.test = () => {
        console.log("testing -->");
    }
}
export default sketch;