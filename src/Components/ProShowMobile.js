import React from "react";
import green from './assets/images/anne amie.jpg';
import pink from './assets/images/ss dyuthi.jpg';
import yellow from './assets/images/yello.png';
import lagori from './assets/images/lagori.jpg';

let ProShowMobile = function () {

    return(
        <div>
            <div className="proshow-heading">
                {/*{isMobile?<h2>Proshows</h2>:<h2>sdfsdjf</h2>}*/}
                <h2>Proshows</h2>

            </div>
            <section id="dg-container" className="proshow-container">


                <div className="carousel">

                    {/*{isMobile ? <ProShowMobile/>:<ProshowPC/> }*/}
                    <img src={green} alt="Image 1"/>
                    <img src={lagori} alt="Image 2"/>
                    <img src={yellow} alt="Image 3"/>
                    <img src={pink} alt="Image 3"/>

                </div>
            </section>
        </div>

    )

}

export default ProShowMobile