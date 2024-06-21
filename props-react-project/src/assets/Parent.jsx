// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//     let ename='tinku'
//     let eage= 30
//     let ishired=true
//     let salary=30000
//   return (
//     <div>
//         <h2>{ename}</h2>
//         <Child empage={eage} ishired={ishired} empsalary={salary}></Child>
//         <h1>details of employee</h1>
//     </div>
//   )
// }

// export default Parent

import React, { useState } from 'react'
import Child from './Child' 

const Parent = ({data}) => {
  if(data){
    return (
      <>
      {
        data.map(ele=>{
          return(
            <Child ele={ele}/>
          )
        })
      }
      </>
    )
  }
  else{
    return(
      <h1>data is not available</h1>
    )
  }
}

export default Parent