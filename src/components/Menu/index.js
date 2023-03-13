import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle mx-auto">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse position-relative justify-content-center" >
          <ul className="navbar-nav">
            <li className="nav-item bg-warning-subtle rounded m-1">
              <Link 
                className="nav-link active" 
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item bg-warning-subtle rounded m-1">
              <Link 
                className="nav-link active" 
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