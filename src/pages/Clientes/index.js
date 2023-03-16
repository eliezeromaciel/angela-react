import React, { useEffect, useState }from 'react'
import getClientes from '../../services/clientes'
import { Link } from 'react-router-dom'

const Clientes = () => {

  const [clientes, setClientes] = useState ('') 


  const loadClientes = async () => {
    try {
      const result = await getClientes ()
      setClientes(result)     // NAO ESQUECER DO PONTO DATA.      result.DATA
    } catch (err) {
      console.log(`Erro na API ==> ${err}`)
    }
  }

  
  useEffect ( () => {
    if (clientes === '') {
      loadClientes()
    }
  }, [clientes] )

  
  return (
    <> 

      <div className='row'>
        <div className='col-9'>
          <h3>  Lista de Clientes  </h3>
        </div>
        <div className='col-3 text-end'>
          <Link
            to='/registros/clientes/new' 
            className='btn btn-secondary  mx-2 '
          >
            <i className="bi bi-plus"></i> Nova
          </Link>
        </div>
      </div>

      <table className='table table-striped '>
        <thead>
          <tr>
            <th className='col-4'>Nome</th>
            <th className='col-2 '>telefone</th>
            <th className='col-2'>Whatsapp</th>
            <th className='col-2'>Instagram</th>
            <th className='col-1'>aniversário</th>
          </tr>
        </thead>
        <tbody className='table-group-divider align-middle'>
          { clientes !== '' && clientes.map ( (cl) => {
            return (
              <tr key={cl.nome}>
                <td>{cl.nome}</td>
                <td>{cl.telefone}</td>
                <td>{cl.whats}</td>
                <td>{cl.insta}</td>
                <td>{cl.dn}</td>
              </tr>
            ) 
          })}

        </tbody>
      </table>




      
    </>
  )
}

export default Clientes