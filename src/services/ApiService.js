import axios from 'axios'
// import NProgress from 'nprogress'

const apiService = axios.create({
  baseURL: 'https://libro.pythonanywhere.com',
  // baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// apiService.interceptors.request.use(config => {
//   NProgress.start()
//   return config
// })

// apiService.interceptors.response.use(response => {
//   NProgress.done()
//   return response
// })

export default {
  getBooks() {
    return apiService.get('/books')
  },
  getBook(id) {
    return apiService.get('/books/' + id)
  },
  getOrders() {
    return apiService.get('/orders')
  },
  getOrder(id) {
    return apiService.get('/orders/' + id)
  },
  getStatistics() {
    return apiService.get('/statistics')
  },
  getUsers() {
    return apiService.get('/user')
  },
  getUser(id) {
    return apiService.get('/user/' + id)
  }
}
