import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';

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
  // .then( data =>console.log(data))//data=response
  .then(item=>this.setState({monsters:item}))//item=users best practise
 

}
  render(){
  return (
    <div className="App">
    <h1>hi my world </h1>
    <h1>{this.state.message}</h1>
    <button onClick={()=>{this.setState({message:"Would you like to abolish this law"})}}>ClickMe</button>

    
    
      <CardList>{this.state.monsters.map(item=>(<h3 key={item.id}>{item.name}</h3>))}</CardList>
    
    
    </div>
  );
  
}
}
export default App;
