import axios from 'axios'

const baseURL = 'http://localhost:3033'

const api = axios.create({
  baseURL
})

export default api