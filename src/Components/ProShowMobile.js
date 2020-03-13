import React from "react";
import green from './assets/images/anne amie.jpg';
import pink from './assets/images/ss dyuthi.jpg';
import yellow from './assets/images/yello.png';
import lagori from './assets/images/lagori.jpg';
import maari from './assets/images/mari_horiz.jpg';

let ProShowMobile = function () {

    return(
        <div>
            <div className="proshow-heading">
                {/*{isMobile?<h2>Proshows</h2>:<h2>sdfsdjf</h2>}*/}
                <h2>Attractions</h2>

            </div>
            <section id="dg-container" className="proshow-container">


                <div className="carousel">

                    {/*{isMobile ? <ProShowMobile/>:<ProshowPC/> }*/}
                    <img src={green} alt="nerdinia"/>
                    <img src={lagori} alt="debate"/>
                    <img src={maari} alt="culturals"/>
                    <img src={pink} alt="Ascension"/>

                </div>
            </section>
        </div>

    )

}

export default ProShowMobile