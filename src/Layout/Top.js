import React, {Component} from 'react';

const Top=()=>{

    const terkejut=(a,e)=> {
        e.preventDefault();
        alert(a)
  };



return(
  <a href="/" onClick={(e)=>terkejut("Top Alert....",e)} >Halaman Top  </a>

);


}
export default Top;
