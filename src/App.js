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
import Home from './pages/Home'
import Mensagens from './pages/Mensagens'
import Clientes from './pages/Clientes'

function App() {
  return (
    <BrowserRouter>

      <Menu/>

      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='/registros'element={<Registros/>}> 
            <Route path='/registros/mensagens' element={<Mensagens/> } />
            <Route path='/registros/clientes' element={<Clientes/> } />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
