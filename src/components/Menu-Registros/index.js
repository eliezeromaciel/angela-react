import React from 'react'
import { Link } from 'react-router-dom'

const MenuRegistros = () => {
  return (
    <div className='container'>
      <Link 
        className="nav-link active" 
        aria-current="page"
        to="/registros/mensagens">
            Mensagens
      </Link>
      <Link 
        className="nav-link active" 
        aria-current="page"
        to="/registros/clientes">
            Clientes
      </Link>
    </div>
  )
}

export default MenuRegistros