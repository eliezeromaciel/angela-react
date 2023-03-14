import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Registros = () => {
  return (
    <div className='container'>
      <div className='navbar navbar-expand-lg bg-primary-subtle my-3 rounded'>
        <div className='container-fluid justify-content-center '>
          <Link 
            className="nav-link active m-2 p-2 border border-primary rounded col-sm-1 text-center" 
            aria-current="page"
            to="/registros/mensagens">
            Mensagens
          </Link>
          <Link 
            className="nav-link active  m-2 p-2 border border-primary rounded col-sm-1 text-center" 
            aria-current="page"
            to="/registros/clientes">
            Clientes
          </Link>
        </div>
      </div>
      <Outlet />

      
    </div>
  )
}

export default Registros