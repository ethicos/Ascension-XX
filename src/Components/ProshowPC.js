import React from "react";

//
// let ProShowPC = function () {
//
//     return(
//         <div>
//             <img src="http://placehold.it/600x350/faf345/000000&text=item 1" alt="Image 1"/>
//             <img src="http://placehold.it/600x350/ffa345/000000&text=item 2" alt="Image 2"/>
//             <img src="http://placehold.it/600x350/ffa3ee/000000&text=item 3" alt="Image 3"/>
//         </div>
//
//     )
//
// }
//
import ss from './assets/images/sooraj santhosh.jpg';
import anne from './assets/images/anne_amie.jpeg';
//import yellow from './assets/images/yello.png';
import lagori from './assets/images/lagori-pc.jpg';
import maari from './assets/images/mari_horiz.jpg';
import ProShowMobile from "./ProShowMobile";

let ProShowPC = function () {

    return(
        // <div>
        //
        //     <img src={green} alt="Image 1"/>
        //     <img src={yellow} alt="Image 2"/>
        //     <img src={pink} alt="Image 3"/>
        // </div>
        <div>
            <div className="proshow-heading">
                <h2 id="proshow-h2">Ascension 2020</h2>
                <h5 style={{marginTop:'-5px'}} id="proshow-sub"></h5>
            </div>
            <section id="dg-container" className="proshow-container">


                <div className="carousel">

                    {/*{isMobile ? <ProShowMobile/>:<ProshowPC/> }*/}
                    <img src={ss} alt="Ascension"/>
                    <img src={anne} alt="Nerdinia"/>
                    <img src={lagori} alt="debate"/>
                    <img src={maari} alt="culturals"/>

                </div>
            </section>
        </div>


    )

}



export default ProShowPC