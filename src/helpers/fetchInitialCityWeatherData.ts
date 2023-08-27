import axios from 'axios'

export const fetchInitialCityWeatherData = async (userInput: string) => {
  const API_KEY = '4f223485bbd542168f1154529232608'
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=8`)

    const newLocationData = {
      location: response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.temp_c,
      weatherIcon: response.data.current.condition.icon,
    }

    return newLocationData
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
