import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8083`,
    proxy: {
        host: 'http://192.168.43.35',
        port: 8081,
      }
})
}