import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      message:"my world getting little for this resents approach me ",
      monsters:[
        {
          name:"frankastain",
          id:'mr1'
         },
         {
           name:"Drucula",
           id:'mr2'
         },
         {
           name:"Zombi",
           id:'mr3'
         },
         {
           name:"Godzila",
           id:'mr4'
         },{
           name:"Mother Of Dragon",
           id:'mr5'
         }
      ]
    }
  }

  render(){
  return (
    <div className="App">
    <h1>hi my world </h1>
    <h1>{this.state.message}</h1>
    <button onClick={()=>{this.setState({message:"Would you like to abolish this law"})}}>ClickMe</button>

    <div>
      {this.state.monsters.map(item=>(<h1 key={item.id}>{item.name}</h1>))}
    </div>
    </div>
  );
}
}
export default App;
