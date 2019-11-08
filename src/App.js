import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      message:"my world getting little for this resents approach me ",
      monsters:[]
           
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( data =>data.json())//data=response
  .then(item=>this.setState({monsters:item}))//item=users best practise
 

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
