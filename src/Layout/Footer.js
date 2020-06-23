import React, {Component} from 'react';

const Footer=  (props) => {
    return(
      <div>
            <h4>FOOTER PAGE {props.name} </h4>
            <p>@{props.tahun}</p>
        </div>
    );
}
export default Footer;
