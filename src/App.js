import React,{useState} from 'react'
import Component from './components/Component'


function App() {
  const [number,setNumber] = useState(0)

  

 
  


  return (
    <div className="App">
      <h1>{number}</h1>
      
      <Component fonction= {(x) => setNumber(number + x)}>
      </Component>




  
    </div>
  );
}

export default App;
