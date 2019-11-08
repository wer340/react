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
  // .then( data =>console.log(data))//data=response
  .then(item=>this.setState({monsters:item}))//item=users best practise
 

}
  render(){
  return (
    <div className="App">
    <h1>hi my world </h1>
    <h1>{this.state.message}</h1>
    <button onClick={()=>{this.setState({message:"Would you like to abolish this law"})}}>ClickMe</button>

    <div>
      
      <table>
        <thead>
          <td>کمپانی</td>
          <td>شهر</td>
          <td>وبسایت</td>
          <td>تلفن</td>
        </thead>
        <tr>
          <td>{this.state.monsters.map(item=>(<h3 key={item.id}>{item.company.name}</h3>))}</td>
          <td>{this.state.monsters.map(item=>(<h3 key={item.id}>{item.address.city}</h3>))}</td>
          <td>{this.state.monsters.map(item=>(<h4 key={item.id}>{item.website}</h4>))}</td>
          <td>{this.state.monsters.map(item=>(<h4 key={item.id}>{item.phone}</h4>))}</td>
        </tr>
      </table>
    </div>
    </div>
  );
  
}
}
export default App;
