import axios from 'axios' // 引入axios

// 配置一个axios实例
const req = axios.create({
  // 响应时间限制
  timeout: 10000
  // headers: {'content-type': 'application/x-www-form-urlencoded'}请求头
  // headers: {'content-type': 'application/x-www-form-urlencoded'}
})

// 配置请求拦截器
req.interceptors.request.use(config => {
  return config
})

// 配置响应拦截器
req.interceptors.response.use(config => {
  const data = config.data
  return data
}, error => {
  // console.log(error)
  return Promise.reject(error)
})

export default req
