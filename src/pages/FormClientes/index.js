import React, { useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'   
import {getClienteById, postClientes, updateCliente} from '../../services/clientes'


const FormClientes = () =>{

  const {whats} = useParams()    
  const navigate = useNavigate() 

  const [nome, setNome] = useState ('')
  const [telefone, setTelefone] = useState ('')
  const [whatsapp, setWhatsapp] = useState ('')
  const [instagram, setInstagram] = useState ('')
  const [dNascim, setDNascim] = useState ('')
  const [mensagem, setMensagem] = useState('')


  const validaForm = async () => {
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
    
    setNome('')
    setTelefone('')
    setWhatsapp('')
    setInstagram('')
    setDNascim('')
    setMensagem('')

    try {
      if (whats) {
        console.log(`o parametro whats é : ${whats}`)
        updateCliente ({nome, telefone, whatsapp, instagram, dNascim})
      } else {
        await postClientes({ telefone, nome, whatsapp, instagram, dNascim}) 
      }
    }catch (err) {
      console.log (err)
    }
    navigate ('/registros/clientes')
  }

  
  const loadCliente = async () => {
    const resp = await getClienteById ({whats})
    const {nome, telefone, whatsapp, instagram, dNascim} = resp.data[0]
    setNome (nome)
    setTelefone (telefone)
    setWhatsapp (whatsapp)
    setInstagram(instagram)
    setDNascim(dNascim)
  }

  useEffect ( () => {
    if (whats) {
      loadCliente()
      console.log(`useeffect bombando, por existir o parametro na URL: ${whats}`)
    }
  } , [] ) // importante colocar [], pois sem ele, o useeffect monitora alteracao de TODOS os states do código. e neste caso, cada vez q digitasse algo no input, ele acionaria a funcao loaddepartamento. 


  return (
    <>    
      <h3>{whats ? 'Edição' : 'Cadastro'} de Cliente</h3>  
      
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