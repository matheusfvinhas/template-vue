import { HTTPClient } from '../utils/request'

export default {
  get: async () => {
    // colocar o endpoint para buscar as pessoas, verificar no site da API
    // https://swapi.dev/
    // a URL base ja esta no arquivo request.js, coloque aqui somente o endpoint de consulta de personagens
    const { data } = await HTTPClient.get(/* endpoint aqui */)
    return data
  }
}
