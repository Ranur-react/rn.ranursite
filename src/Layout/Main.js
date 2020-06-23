import React, {Component} from 'react';

class Main extends Component{
  constructor(props)
    {
    super(props);
    this.state=
      {
        title:"Menu Makanan1",
        title2:"Menu Minuman2",
        title3:"Menu Minuman3",
        title4:"Menu Minuman4",
        title5:"Menu Minuman5"
      }
      this.canged=this.canged.bind(this);
      this.handleChage=this.handleChage.bind(this);
    };
    canged(){
      //Update State/tambah state--/changeState
      this.setState((state,props)=>{
        return( {
          title:this.state.title2,
          title2:this.state.title3,
          title3:this.state.title4,
          title4:this.state.title5,
          title5:this.state.title
                })
      });
    }
    handleChage(){
      console.log("Jalan...");
    }
    render(){
      return (
        <div>
          <h3>{this.state.title}</h3>
          <button onClick={this.canged} >Change</button>
          <input type="text" onChange={this.handleChage} />
        </div>
      );
    }

  }

  export default Main;
