import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle mx-auto">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse position-relative" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className="nav-link active" 
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/registros">
                Registros
              </Link>
            </li>
          </ul>
        </div>
       
       
      </div>

      
    </nav>
  )
}

export default Menu