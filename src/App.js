import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

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
    const{monsters,serachField}=this.state;
    const filterMonster=monsters.filter(
      item => item.name.toLowerCase().includes(serachField.toLowerCase())

    );
  return (
    <div className="App">
     


   
   <SearchBox  placeHolder='Enter your Name' handleSearchBox={e => {this.setState({serachField:e.target.value})}} />
   
      <CardList Love={filterMonster} />
  
    
    
    </div>
  );
  
}
}
export default App;
