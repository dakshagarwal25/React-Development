import React, { useState } from 'react'

const Login = ({details}) => {
    let[data,setdata]=useState({
        email:'',
        password:''
    })
    let handlechange=(e)=>{
      let{name,value}=e.target;
      setdata({...data,[name]:value})
    }
    let handlesubmit = (e) => {
      e.preventDefault();
      if (details.email === data.email && details.password === data.password) {
        alert('Login successful');
      } else {
        alert('Invalid email or password');
      }
      console.log('Login data:', data);
    };
  return (
    <div>
        <h2>Login</h2>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" value={data.email} placeholder='Email Address' onChange={handlechange} />
            <label htmlFor="password">Password :</label>
            <input type="password" name="password" value={data.password} placeholder='Password' onChange={handlechange} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login