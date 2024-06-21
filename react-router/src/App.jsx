import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './routing/Login';
import Register from './routing/Register';
import Landing from './routing/Landing';
import './App.css';

const App = () => {
  let router = createBrowserRouter([
    {
      path:'/',
      element: <Login />
    },
    {
      path:'/register',
      element: <Register />
    },
    {
      path:'/landing',
      element: <Landing />
    }
  ])
  return (
    <div className="app-container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App