import React,{Component} from 'react';
import Header from './Layout/Header';
import Body from './Layout/Body';
import Footer from './Layout/Footer';
import List  from './Layout/List'
import Main  from './Layout/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header datalist="3 Terbaik "/>
        <Main />
        <List link="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
        <Footer name="Makanan Nusantara" tahun="2020"/>
      </div>
    );
  }
}


export default App;
