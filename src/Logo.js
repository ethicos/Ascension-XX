import React from 'react';
import logo from './images/logo.png';
import './css/logo.css';

class Logo extends React.Component {
  render(){
    var classNames = "logo ";
    switch(this.props.size){
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
        <img src={logo} className={classNames} />
      )
    }
}

export default Logo;
