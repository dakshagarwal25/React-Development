import React, { useState } from 'react'
import Navbar from './contextapi/Navbar'
import { CounterContext } from './contextapi/CounterContext'

const App = () => {
  let[count,setcount]=useState(0)
  return (
    <CounterContext.Provider value={{count,setcount}}>
      <Navbar/>
    </CounterContext.Provider>
  )
}

export default App