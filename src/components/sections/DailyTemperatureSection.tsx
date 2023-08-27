import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const DailyTemperatureSection = ({ location }) => {
  const [dailyWeatherData, setDailyWeatherData] = useState()

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=4f223485bbd542168f1154529232608&q=${location}&days=8`
        )

        setDailyWeatherData(response?.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  return (
    <StyledDailyTemperatureSection>
      {daysOfWeek.map((day, index) => (
        <StyledSingleDayTemperature key={day}>
          <p>{day}</p>
          <StyledIconAndRainPercent>
            <img src={dailyWeatherData?.forecast?.forecastday[index + 1]?.day?.condition?.icon} alt="Weather Icon" />
            <div>
              {dailyWeatherData?.forecast?.forecastday[index + 1]?.day?.condition?.text.includes('rain')
                ? `${dailyWeatherData?.forecast?.forecastday[index + 1]?.day?.daily_chance_of_rain} %`
                : null}
            </div>
          </StyledIconAndRainPercent>

          <StyledTemperatureContainer>
            <div className="temperature" style={{ fontWeight: 'bold' }}>
              {parseInt(dailyWeatherData?.forecast?.forecastday[index]?.day?.avgtemp_c)}
            </div>
            <div className="temperature">
              {parseInt(dailyWeatherData?.forecast?.forecastday[index]?.day?.mintemp_c)}
            </div>
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
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-size: 1.5rem;
    width: 10rem;
  }
`

const StyledIconAndRainPercent = styled.div`
  width: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  img {
    height: 3rem;
  }

  div {
    font-size: 1.2rem;
  }
`

const StyledTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 4rem;

  .temperature {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`
