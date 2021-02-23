import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayok= ['Razzak','Josim','Nadia','Abdullah','omar','ibrahim']
  const Products = [
    {name : 'photoShop',price :'$90.99'},
    {name : 'Ilastrator',price :'$60.99'},
    {name : 'pdfReader',price :'$30.99'},
]

  return (
    <div className="App">
      <header className="App-header">
        <p> I am a React-Person </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayok.map(nayok =><li>{nayok}</li>)
          }
          
        </ul>
        <Product Product={Products[0]}> </Product>
        <Product Product={Products[1]}> </Product>
        <Product Product={Products[2]}> </Product>

      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  return (
    <div>
      <h1> Count : {count}</h1>
    </div>
  )
}
function Users(){
  const [user,setUsers] =useState([]);
  return (
    <div>
      <h3> Dynamic users </h3>
    </div>
  )
}
function Product (props){
  const productStyle= {
    border:'1px solid gray',
    backgroundColor: 'lightgray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style ={productStyle}>
      <h3>  {props.Product.name}</h3>
      <h5>{props.Product.price}</h5>
      <button> Buy now </button>

    </div>
  )
}

export default App;

