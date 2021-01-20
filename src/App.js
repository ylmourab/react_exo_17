import React,{useState} from 'react'
import Component from './components/Component'


function App() {
  const [number,setNumber] = useState(0)

  

 
  


  return (
    <div className="App">
      <h1>{number}</h1>
      
      <Component fonction= {() => setNumber(number + 4)}>
      </Component>




  
    </div>
  );
}

export default App;
