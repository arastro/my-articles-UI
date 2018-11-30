import axios from 'axios'

axios.defaults.baseURL = "https://myarticles-ivan.herokuapp.com/api/v1"
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = false


export const getArticlesRequest = () => {
    return axios.get(`/articles`)
      .then((response) => ({ response }))
      .catch((error) => ({ error }))
  }