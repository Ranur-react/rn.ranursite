import React, {Component} from 'react';
import Image from './Image';

class List extends Component{
  constructor(props){
    super(props);
      this.state={
        src:this.props.link

    };
  }
    render(){
      return(

        <div>
        <ol>
        <Image link={this.state.src} lebar="400" />
          <li>Nasi  Padang</li>
          <Image link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="300" />
          <li>Sate</li>
          <Image link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="200" />
          <li>Soto Lamongan</li>
          <Image link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="100" />
        </ol>
        </div>
      );

    }
}

export default List;
