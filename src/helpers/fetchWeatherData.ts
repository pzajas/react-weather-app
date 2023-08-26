import axios from 'axios'

export const fetchData = async (userInput: string) => {
  const API_KEY = '795e1e963d1887c1d98f97b6b45e0eea'
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${API_KEY}`
    )

    console.log(response.data)

    const newLocationData = {
      location: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      weatherIcon: response.data.weather[0].icon,
    }
    return newLocationData
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
