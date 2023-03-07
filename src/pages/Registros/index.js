import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuRegistros from '../../components/Menu-Registros'

const Registros = () => {
  return (
    <div className='container'>

      <MenuRegistros/>

      <Routes>
        <Route to='/registros/mensagens' element={<>div das mensagens</>}/>
        <Route to='/registros/clientes'element={<>div das clientes</>}/>
      </Routes>
    </div>
  )
}

export default Registros