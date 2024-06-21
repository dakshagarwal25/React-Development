// import { useState } from 'react'
// import Parent from './assets/Parent'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Parent/>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import JSON from './data.json'
import Parent from './assets/Parent';

const App = () => {
  let [state,setstate]=useState(JSON);
  return (
    <div>
      <Parent data = {state}/>
    </div>
  )
}

export default App