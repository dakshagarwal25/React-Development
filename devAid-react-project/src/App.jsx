import React from 'react'
import Navbar from './Navbar'
import Maincont from './Maincont';
import ProfileBlock from './ProfileBlock';
import './app.css';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Maincont/>
        <ProfileBlock/>
    </div>
  )
}

export default App