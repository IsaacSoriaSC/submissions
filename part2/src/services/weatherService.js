import axios from 'axios'

const api_key = import.meta.env.CLIMA_KEY
const baseUrl = 'api.openweathermap.org/data/2.5/weather?id=524901&appid=' + api_key

const getWeather = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

export default {
  getWeather
}
