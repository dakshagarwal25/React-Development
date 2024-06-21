import React, { useState } from 'react'
import Login from './Loginn';

const App = () => {
  let[state,setstate]=useState({
    username:'',
    password:'',
    email:''
  })
  let handlechange=(e)=>{
    let{name,value}=e.target;
    setstate({...state,[name]:value})
  }
  let handleRegister = (e) => {
    e.preventDefault();
    console.log('Register data:', state);
    alert('Registration successful');
  };
  return (
    <div>
      <div>
        <h2>Register</h2>
        <form action="" onSubmit={handleRegister}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={state.username} placeholder='Username' onChange={handlechange} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={state.password} placeholder='Password' onChange={handlechange} />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={state.email} placeholder='Email Address' onChange={handlechange} />
          <button type='submit'>Register</button>
        </form>
      </div>
      <div>
        <Login details={state}/>
      </div>
    </div>
  )
}

export default App