import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import Getdata from './components/Getdata'
import Del from './components/Del'
import SignIn from './components/SignIn'
import Edit from './components/Edit'
function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Routes>

  <Route path='/' element={<Signup/>}/>
  <Route path='read' element={<Getdata/>}/>
 <Route path='del/:id?' element={<Del/>}/>
 <Route path='signIn' element={<SignIn/>}/>
 <Route path='edit/:id?' element={<Edit/>}/>
 </Routes>
 </>
  )
}

export default App
