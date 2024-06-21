import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <div className="input-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter firstname" />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter lastname" />
        </div>
        <div className="input-group">
          <label>Email Address</label>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />
        </div>
        <NavLink to='/landing'>
          <button type="submit">Register</button>
        </NavLink><br /><br />
        <p>Already have an account ?</p>
        <NavLink className='register-link' to=''>
          <a href="">Login here!</a>
        </NavLink>
      </form>
    </div>
  );
}

export default Register;
