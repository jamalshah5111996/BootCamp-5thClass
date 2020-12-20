import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

function Child2() {

    let [state,dispatch] = useReducer(CounterReducer,0);
    console.log(state)
    return(
        <div>
            <center> <h1>This is Second Child using Reducer</h1>
            <h3>Value of Reducer state is: </h3>
            <h3>{state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
            </center>
            </div>
    );
}

export default Child2;