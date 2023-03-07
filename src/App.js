import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Menu from './components/Menu'
import { 
  BrowserRouter, 
  Route, 
  Routes } 
  from 'react-router-dom'
import Registros from './pages/Registros'

function App() {
  return (
    <BrowserRouter>

      <Menu/>
      
      <Routes>
        <Route path='/' element={<>Home</>}/>
        <Route path='/registros' element={<Registros/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
