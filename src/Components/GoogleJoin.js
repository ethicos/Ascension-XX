import React from 'react';
import GoogleLogo from './assets/images/Google.svg';

import './assets/css/GoogleJoin.css';

const GoogleJoin = (props) => {
    return ( 
        <button className="googleBtn">
          <img src={GoogleLogo} alt="Google"/>
          Login With Google
        </button>
     );
}
 
export default GoogleJoin;