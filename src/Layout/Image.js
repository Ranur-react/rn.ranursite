import React , {Component} from 'react';

class Image extends Component {
  render(){
    return(
      <div>
        <img src={this.props.link} width={this.props.lebar} alt="Gambar-Makanan" />
      </div>
    );
  }
}


export default Image;
