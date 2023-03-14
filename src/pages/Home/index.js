import React from 'react'

const Home = () => {
  return (
    <>
      <div className='container mt-5 bg-info-subtle flex-nowrap'>
        <div className="input-group">
          <input 
            className="form-control m-2 rounded" 
            type="text"
            placeholder='Nome da Cliente'
          />
          <button className='btn btn-secondary rounded m-2'> Pesquisar </button>

          <input 
            className="form-control m-2 rounded" 
            type="number"
            aria-label="First name"
            placeholder='telefone'
          />

          <select 
            className="form-select m-2 rounded" 
            id="inputGroupSelect01">
            <option selected>Serviço Prestado</option>
            <option value="1">Mechas</option>
            <option value="2">Corte</option>
            <option value="3">Hidratação</option>
          </select>

          <div className="col-md-1 me-3" >
            <input 
              className="form-control m-2" 
              type="number"
              placeholder='Feedback'
            />
          </div>

          <div className="col-sm-1 me-3">
            <input 
              className="form-control m-2 " 
              type="number"
              placeholder='convite '
            />
          </div>

          <button className='btn btn-secondary rounded m-2'> Enviar </button>
        </div>
      </div>

      <div className='container mt-3'  >
        <h5>  Nome e Telefone </h5>
        <div>leticia</div>
        <div>leticia</div>
        <div>leticia</div>
        <div>leticia</div>
        <div>leticia</div>
        <div>leticia</div>
        <div>leticia</div>
        
      </div>

      
      
    </>
  )
}

export default Home