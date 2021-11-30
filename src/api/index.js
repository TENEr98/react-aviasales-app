import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL
const baseImgURL = import.meta.env.VITE_BASE_UMG_URL

const instance = axios.create({ baseURL })
const instanceImg = axios.create({ baseImgURL })

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    return error
  }
)

export const AviasalesAPI = {
  getId() {
    return instance
      .get(`/search`)
      .then((response) => response)
      .catch((err) => err.response)
  },
  getTickets(id) {
    return instance
      .get(`/tickets?searchId=${id}`)
      .then((response) => response)
      .catch((err) => err.response)
  }
}
