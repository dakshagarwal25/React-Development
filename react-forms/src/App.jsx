// import React, { useState } from 'react'

// const App = () => {
//   let[username,setusername]=useState('');
//   let[password,setpassword]=useState('');
//   let handleclick=(e)=>{
//     e.preventDefault()
//     console.log(username,password);
//   }
//   return (
//     <div>
//       <form action="">
//         <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} />
//         <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
//         <button type='submit' onClick={handleclick}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  let[state,setstate]=useState({
    uname:'',
    pswd:'',
    mail:'',
    num:'',
    dob:'',
    gender:'',
    clr:'',
    file:'',
    lang:'',
    country:''
  })
  let[skills,setskills]=useState([])
  let handlechange=(e)=>{
    let{name,value}=e.target;
    setstate({...state,[name]:value})
  }
  let handlecheckbox=(e)=>{
    let{value,checked}=e.target;
    if(checked){
      setskills([...skills,value])
    }else{
      setskills(skills.filter((ele)=>ele!=value))
    }
  }
  let handlesubmit=(e)=>{
    e.preventDefault();
    console.log(state);
    console.log(skills);
  }
  return (
    <div className='main'>
      <h1>Apne baare me bataiye jajmaan!</h1>
      <form action="" onSubmit={handlesubmit}>
        <h2>Naam :</h2>
        <input type="text" placeholder='username' value={state.uname} name='uname' onChange={handlechange} />
        <h2>Pass :</h2>
        <input type="password" placeholder='password' value={state.pswd} name='pswd' onChange={handlechange} />
        <h2>Mail Khaata :</h2>
        <input type="email" placeholder='email address' value={state.mail} name='mail' onChange={handlechange} />
        <h2>Samsoong ka number :</h2>
        <input type="number" placeholder='contact no' value={state.num} name='num' onChange={handlechange} />
        <h2>Janm Taarikh :</h2>
        <input type="date" placeholder='date' value={state.dob} name='dob' onChange={handlechange} />
        <h2>Gender :</h2>
        <div onChange={handlechange}>
          <input type="radio" name="gender" value="male"/><br/>
          <label>Male</label>
          <input type="radio" name="gender" value="female"/>
          <label>Female</label>
          <input type="radio" name='gender' value="other"/>
          <label>Other</label>
        </div>
        <h2>Rang :</h2>
        <input type="color" placeholder='favourite color' value={state.clr} name='clr' onChange={handlechange} />
        <h2>BioData :</h2>
        <input type="file" placeholder='upload a file' value={state.file} name='file' onChange={handlechange} />
        <h2>Bhaasha :</h2>
        <select name="lang" id='' onChange={handlechange}>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="russian">Russian</option>
        </select>
        <h2>Kaun Desh se ho :</h2>
        <input list='countries' name='country' onChange={handlechange} />
        <datalist id='countries'>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
        </datalist><br/>
        <h2>Skills :</h2>
        <div onChange={handlecheckbox}>
          <label htmlFor="">Select Skills :</label>
          <input type="checkbox" name="skill1" value='html' />HTML
          <input type="checkbox" name='skill2' value='css' />CSS
          <input type="checkbox" name='skill3' value='js' />JavaScript
          <input type="checkbox" name='skill4' value='react' />ReactJS
        </div><br /><br />
        <h2>Dabaa de!!!</h2>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App