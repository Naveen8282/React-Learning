import React, {useState} from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState(100)
  
  const [example, setExample] =useState({name:"NaSo" , count: 100});

  const like =() =>{
    setExample(preve =>{return{...example,
    count: example.count+1
    // setExample({...example,count: example.count+1})
    }})
  }
const increment = () =>{
  setNumber(number +1);
};

const decrement = () =>{
  setNumber(number -1);
}

  return (
    <div className="App">
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={like}>likes</button>
    <p>hello naveen <b>{number} {example.name} has {example.count}</b></p>
    </div>
  );
}

export default App;
