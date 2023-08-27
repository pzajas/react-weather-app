import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const DailyTemperatureSection = ({ location }) => {
  const [dailyWeatherData, setDailyWeatherData] = useState()
  const icon = dailyWeatherData?.current?.condition.icon

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const weatherData = dailyWeatherData?.forecast?.forecastday[0].day

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=4f223485bbd542168f1154529232608&q=${location}`
        )

        setDailyWeatherData(response?.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  console.log(icon)
  return (
    <StyledDailyTemperatureSection>
      {daysOfWeek.map((day) => (
        <StyledSingleDayTemperature key={day}>
          <p>{day}</p>
          <img src={icon} alt="Weather Icon" />
          <StyledTemperatureContainer>
            <div className="temperature" style={{ fontWeight: 'bold' }}>
              {parseInt(dailyWeatherData?.current?.temp_c)}
            </div>
            <div className="temperature">{parseInt(weatherData?.mintemp_c)}</div>
          </StyledTemperatureContainer>
        </StyledSingleDayTemperature>
      ))}
    </StyledDailyTemperatureSection>
  )
}

const StyledDailyTemperatureSection = styled.div`
  width: 100%;
  height: auto;
  padding: 3rem;
`

const StyledSingleDayTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-size: 1.5rem;
    width: 10rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`

const StyledTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .temperature {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`
