import React, { useState,} from 'react'
import { Navigate } from 'react-router-dom'
import {postClientes} from '../../services/clientes'


const FormClientes = () =>{

  const [nome, setNome] = useState ('')
  const [telefone, setTelefone] = useState ('')
  const [whatsapp, setWhatsapp] = useState ('')
  const [instagram, setInstagram] = useState ('')
  const [dNascim, setDNascim] = useState ('')
  const [mensagem, setMensagem] = useState('')

  const validaForm = () => {
    
    if (nome === '') {
      setMensagem ('Preencha o nome')
      return false
    }
    if (telefone === '') {
      setMensagem ('Preencha o telefone')
      return false
    }
    if (whatsapp === '') {
      setMensagem ('Preencha o whatsapp')
      return false
    }
    if (instagram === '') {
      setMensagem ('Preencha o instagram')
      return false
    }
    if (dNascim === '') {
      setMensagem ('Preencha o data nascimento')
      return false
    }

    postClientes({nome :nome, telefone:telefone, whatsapp: whatsapp, instagram: instagram, dNascim: dNascim})
    
    setNome('')
    setTelefone('')
    setWhatsapp('')
    setInstagram('')
    setDNascim('')
    setMensagem('')

  }

  return (
    <>    
      {/* <h3>{idDepartamento ? 'Edição' : 'Cadastro'} de Departamento</h3>   */}
      <h3>Cadastro de Clientes</h3>  
      
      <div className="row mt-3">
        <div className="col-3">
          <input 
            // ref={inputNomeElem}   
            type="text"
            className={'form-control'}
            placeholder="nome"
            maxLength={30}
            value={nome} 
            onChange={(ev)=> {
              setNome (ev.target.value)              
            }}  
          />
        </div>

        <div className="col-2">
          <input
            // ref={inputSiglaElem}
            type="number"
            className={'form-control '}
            placeholder="telefone"
            maxLength={11}
            value={telefone}
            onChange={(ev)=> {
              setTelefone (ev.target.value)
            } }
          />
        </div>
      
        <div className="col-2">
          <input
            // ref={inputSiglaElem}
            type="number"
            className={'form-control '}
            placeholder="whatsapp"
            maxLength={11}
            value={whatsapp}
            onChange={(ev)=> {
              setWhatsapp (ev.target.value)
            } }
          />
        </div>

        <div className="col-2">
          <input
            // ref={inputSiglaElem}
            type="text"
            className={'form-control '}
            placeholder="instagram"
            maxLength={20}
            value={instagram}
            onChange={(ev)=> {
              setInstagram (ev.target.value)
            } }
          />
        </div>

        <div className="col-2">
          <input
            // ref={inputSiglaElem}
            type="date"
            
            className={'form-control'}
            placeholder="data nascimento"
            maxLength={10}
            value={dNascim}
            onChange={(ev)=> {
              setDNascim (ev.target.value)
            } }
          />
        </div>

        <div className='col-1'>
          <button 
            className='btn btn-success'
            onClick={validaForm}  
          >
            Salvar
          </button>
        </div>
        {/* <div className="col-3">
          <button 
            className={`btn btn-${idDepartamento ? 'success' : 'primary'}`}            
            onClick={validaForm}
          > 
            <i className="bi bi-save"/> {idDepartamento ? 'Editar' : 'salvar'}
          </button>
        </div> */}
      </div>
      
      { mensagem !=='' &&
        <div className='row mt-3'> 
          <div 
            className="col-6 offset-3 alert alert-danger" 
            role="alert">
            <i className='bi bi-exclamation-diamond-fill'/> {mensagem}
          </div>
        </div>
      }
      
    </>
  )
}

export default FormClientes