import { WeatherConditionCard } from '@components/cards/WeatherConditionCard'
import { styled } from 'styled-components'

export const WeatherConditions = ({ cityWeatherData }) => {
  const sunriseTime = cityWeatherData?.forecast?.forecastday[0]?.astro.sunrise
  const sunsetTime = cityWeatherData?.forecast?.forecastday[0]?.astro.sunset
  const precipitation = cityWeatherData?.forecast?.forecastday[0]?.day.daily_chance_of_rain
  const humidity = cityWeatherData?.forecast?.forecastday[0]?.day.avghumidity
  const wind = cityWeatherData?.current?.wind_kph
  const pressure = cityWeatherData?.current.pressure_mb

  const weatherConditions = [
    { title: 'Sunrise', data: sunriseTime },
    { title: 'Sunset', data: sunsetTime },
    { title: 'Precipitation', data: `${precipitation} %` },
    { title: 'Humidity', data: `${humidity} %` },
    { title: 'Wind', data: `${wind} KM/H` },
    { title: 'Pressure', data: `${pressure} hPA` },
  ]

  return (
    <StyledWeatherConditionsContainer>
      <GridContainer>
        {weatherConditions.map((condition, index) => (
          <WeatherConditionCard key={index} title={condition.title} content={condition.data} />
        ))}
      </GridContainer>
    </StyledWeatherConditionsContainer>
  )
}

const StyledWeatherConditionsContainer = styled.div`
  height: auto;
  background-color: #f7992d;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
`
