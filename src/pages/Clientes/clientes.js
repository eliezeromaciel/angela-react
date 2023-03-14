// import api from './api'

// const getClientes = async () => {
//   const resp = await api.get('/departamentos')
//   return resp
// }

const getClientes = () => {
  const resp = [
    { nome:'angela', telefone: 51984155331, whats: 51984155331, insta: '@angelaMaciel', dn: '22/15/1980' },
    { nome:'Joana', telefone: 52968396943, whats: 52968396943, insta: '@joanasilva', dn: '24/10/1990' },
    { nome:'Maristela', telefone: 5488880603, whats: 5488880603, insta: '@marilinda', dn: '11/09/1991' },
    { nome:'Francine', telefone: 51997626285, whats: 51997626285, insta: '@frantodatoda', dn: '04/05/2000' },

  ]
  return resp
}

export default getClientes