import React, { useContext } from 'react';
import CounterContext from './CounterContext.js';

function Child() {
    
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    
    return(
        <div>
            <center>
            <h1>This is First Child using CounterContext</h1>
            <h3>Counter Value is:</h3>
            <h3>{counterValue[0]}</h3>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment</button>
            <button onClick={()=> {counterValue[1](--counterValue[0])}}>Decrement</button>
            </center>
        </div>
    );
}
export default Child;