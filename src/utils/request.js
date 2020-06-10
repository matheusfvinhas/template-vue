import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export { HTTPClient }
