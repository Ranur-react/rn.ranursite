import React,{Component} from 'react';
import Top  from './Top';




class Header extends Component {

  //construk=ctor/autoload komponen like constructor on CI
constructor(props){
  super(props);
    this.state={
      judul:"Makanan Khas Indonesia",
      daftar:"Daftar Makanan Nusantara",
      datali: this.props.datalist + "diindonesia",
      pesan: "Not.."
    };
    // this.handlemassge=this.handlemassge.bind(this); //ini digunkan untuk properties langsung ke dalam method
};


//method
//method hanya dapat di tulis di saam constructor dalam sebuah Component
handlemassge(value,e){
  // alert(this.state.pesan);  //handlemassge with bind
  e.preventDefault();
  alert(this.state.pesan);
}

//default method
  render(){
    return(
      <div>
      <h2>{this.state.judul}</h2>
      <p>{this.state.daftar}</p>
      <p>{this.state.datali}</p>
      <a href="/" onClick={(e)=>this.handlemassge(this.state.pesan,e)}  >Halaman HEader</a>
      <br />
      <Top />
      </div>
    );
  }
}

export default Header;
