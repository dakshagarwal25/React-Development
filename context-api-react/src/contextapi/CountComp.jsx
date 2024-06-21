import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const CountComp = () => {
    let{count}=useContext(CounterContext)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default CountComp