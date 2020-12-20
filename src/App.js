import React,{useState} from 'react';
import './App.css';
import Parent from './Parent.js'
import CounterContext from "./CounterContext.js";


function App() {
  let countState = useState(0)
  
  return (
<CounterContext.Provider value={countState}>
    <div className="second">
     <Parent/>
     </div>
</CounterContext.Provider>
  );
}

export default App;