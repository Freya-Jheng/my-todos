import axios from 'axios'

const baseURL = 'https://todo-list-222222.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL,
})
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (err) => Promise.reject('from helper',err)
)

export const apiHelper = axiosInstance

