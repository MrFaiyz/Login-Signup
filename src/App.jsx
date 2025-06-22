import { Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import NavBar from './Components/NavBar'

import './css/App.css'

function App() {
 
  return (
    <>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  )
}

export default App
