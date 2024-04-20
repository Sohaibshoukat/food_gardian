import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Alert from './Components/Alert'
import AlertState from './Context/Alert/AlertState'
import Home from './Page/Home'
import Login from './Page/Login'
import Signup from './Page/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <AlertState>
          <Alert />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
          </Routes>
        </AlertState>
      </BrowserRouter>
    </>
  )
}

export default App
