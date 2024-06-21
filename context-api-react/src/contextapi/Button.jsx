import React, { useContext } from 'react'
import CountComp from './CountComp'
import { CounterContext } from './CounterContext';

const Button = () => {
    let{count,setcount}=useContext(CounterContext);
  return (
    <div>
        <CountComp/>
        <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  )
}

export default Button