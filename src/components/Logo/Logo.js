import React from 'react';
import logo from '../../images/logo.png';
import './logo.css';

const Logo = (props) =>  {

    var classNames = "logo ";
    switch(props.size){
        case 0:
            classNames += "logo-small";
            break;
        case 1:
            classNames += "logo-medium";
            break;
        case 2:
            classNames += "logo-large";
            break;
        default:
            classNames += "logo-default";
      }
      return (
        <img src={logo} className={classNames} alt="Dyuthi XX"/>
      );
}

export default Logo;
