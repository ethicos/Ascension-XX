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
import yellow from './assets/images/yello.png';
import lagori from './assets/images/lagori-pc.jpg';
import julia from './assets/images/julia-pc.jpg';
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
                <h2 id="proshow-h2">Suraj Santhosh </h2>
                <h5 style={{marginTop:'-5px'}} id="proshow-sub">Live concert</h5>
            </div>
            <section id="dg-container" className="proshow-container">


                <div className="carousel">

                    {/*{isMobile ? <ProShowMobile/>:<ProshowPC/> }*/}
                    <img src={ss} alt="Sooraj Santhosh"/>
                    <img src={anne} alt="Anne Amie"/>
                    <img src={lagori} alt="Lagori"/>
                    <img src={julia} alt="Julia Bliss"/>

                </div>
            </section>
        </div>


    )

}



export default ProShowPC