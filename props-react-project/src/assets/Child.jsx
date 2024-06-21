import React, { useState } from 'react'

const Child = ({ele}) => {
  let{userId,jobTitleName,firstName,lastName,employeeCode,region,phoneNumber,emailAddress}=ele;
  let[block,setblock]=useState({
    btn:"block",
    cln:"active"
  })
  let handle=()=>{
    if(block.cln=="active"){
      setblock({btn:"unblock",cln:"inactive"})
    }
    else{
      setblock({btn:"block", cln:"active"})
    }
  }
  if(ele){
    return (
      <>
      <div className='main'>
        <div className={block.cln}>
          <div className="info">
            <h1>{userId}</h1>
            <p>{jobTitleName}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{employeeCode}</p>
            <p>{region}</p>
            <p>{phoneNumber}</p>
            <p>{emailAddress}</p>
          </div>
          <button onClick={()=>{handle()}}>{block.btn}</button>  
        </div>
      </div>
      </>
    )
  }
  else{
    return(
      <h1>data is not available</h1>  
    )
  }
}

export default Child