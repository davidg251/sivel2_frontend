import axios from 'axios'
import conf from './conf'

const Api = {
  doGet(uri) {
    return axios.get(`${conf.API_ENDPOINT}/${uri}`)
  }
}

export default Api