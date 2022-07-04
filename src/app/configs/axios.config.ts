import axios from 'axios'
import { loadEnvVariable } from './env.config'

const baseInstance = axios.create({
  baseURL: loadEnvVariable('BASE_URL'),
  timeout: parseInt(loadEnvVariable('REQUEST_TIMEOUT') as string),
  withCredentials: true,
})

baseInstance.defaults.headers.get['Content-Type'] = 'application/json'
baseInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
baseInstance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
baseInstance.defaults.headers.delete['Content-Type'] = 'application/json'

export default baseInstance
