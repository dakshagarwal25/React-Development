import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  let handleClick = () => {
    navigate('/register');
  }
  
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <a className='register-link'>Forgot Password ?</a><br /><br />
        <button type="submit">Login</button>
      </form><br />
      <p>Don't have an account?</p>
      <a onClick={handleClick} className="register-link">Register here!</a>
    </div>
  );
}

export default Login;
