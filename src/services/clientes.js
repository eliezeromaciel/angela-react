import api from './api'

// const getClientes = async () => {
//   const resp = await api.get('/registros/clientes')
//   return resp
// }

const getClientes = () => {
  const resp = [
    { nome:'angela', telefone: 51984155331, whatsapp: 51984155331, insta: '@angelaMaciel', dn: '22/15/1980' },
    { nome:'Joana', telefone: 52968396943, whatsapp: 52968396943, insta: '@joanasilva', dn: '24/10/1990' },
    { nome:'Maristela', telefone: 5488880603, whatsapp: 5488880603, insta: '@marilinda', dn: '11/09/1991' },
    { nome:'Francine', telefone: 51997626285, whatsapp: 51997626285, insta: '@frantodatoda', dn: '04/05/2000' },
  ]
  return resp
}

export const getClienteById = async ({whats}) => {
  const resp = await api.get(`/registros/cliente/${whats}`)
  console.log(`resposta do GetClienteById é: ${resp}`)
  return resp
}

export const postClientes = async ({telefone, nome, whatsapp, instagram, dNascim})=> {
  // const resp = await api.post('/registros/clientes/new')
  const resp = [telefone, nome, whatsapp, instagram, dNascim ]
  console.log(` dados enviados por POST : ${resp}`)
  return resp
}

export const updateCliente = async ({telefone, nome, whatsapp, instagram, dNascim})=> {
  const resp = await api.put(`/registros/cliente/${whatsapp}`, {telefone, nome, instagram, dNascim})
  return resp
}

export const deleteCliente = async ({whatsapp} ) => {
  const resp = await api.delete(`/registros/cliente/${whatsapp}`)
  return resp
}


export default getClientes