import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Alert from './Components/Alert'
import AlertState from './Context/Alert/AlertState'
import Home from './Page/Home'
import Login from './Page/Login'
import Signup from './Page/Signup'
import CustomerDashboard from './Page/Customer/Dashboard'
import BusinessDashboard from './Page/Business/Dashboard'

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
            <Route path="/customer/*" element={<CustomerDashboard />}></Route>
            <Route path="/business/*" element={<BusinessDashboard />}></Route>
          </Routes>
        </AlertState>
      </BrowserRouter>
    </>
  )
}

export default App
