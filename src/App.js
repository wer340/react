import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      message:"my world getting little for this resents approach me ",
      monsters:[],
      serachField:""
           
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
      <h1>{this.state.message}</h1>

    <button onClick={()=>{this.setState({message:"Would you like to abolish this law"})}}>ClickMe</button>
<input type='search' onChange={e =>console.log(e)} />
    
    
      <CardList Love={this.state.monsters} />
    
    
    </div>
  );
  
}
}
export default App;
