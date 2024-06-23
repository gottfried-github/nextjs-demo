import axios from 'axios'

const instance = axios.create({ baseURL: 'http://sw-api.starnavi.io/' })

export default instance
