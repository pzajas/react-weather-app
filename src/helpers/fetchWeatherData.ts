import axios from 'axios'

export const fetchData = async (userInput: string) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: userInput },
    headers: {
      'X-RapidAPI-Key': 'f21a21d23dmsh8222d459ad91e21p1d14b5jsn7115de4be286',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  try {
    const response = await axios(options)
    const newLocationData = {
      location: response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.feelslike_c,
      weatherIcon: response.data.current.condition.icon,
    }
    return newLocationData
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
