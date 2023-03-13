import React from 'react'
import { Link } from 'react-router-dom'

const MenuRegistros = () => {
  return (
    <div className='navbar navbar-expand-lg bg-primary-subtle m-3 rounded'>
      <div className='container-fluid justify-content-center'>
        <Link 
          className="nav-link active m-2 " 
          aria-current="page"
          to="/registros/mensagens">
            Mensagens
        </Link>
        <Link 
          className="nav-link active m-2" 
          aria-current="page"
          to="/registros/clientes">
            Clientes
        </Link>
      </div>
    </div>
  )
}

export default MenuRegistros