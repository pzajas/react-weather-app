import { styled } from 'styled-components'

const WeatherConditions = ({ cityWeatherData }) => {
  const WeatherConditionCard = ({ title, content }) => {
    return (
      <GridItem>
        <p>{title}</p>
        <div>{content}</div>
      </GridItem>
    )
  }

  const sunriseTime = cityWeatherData?.forecast?.forecastday[0]?.astro.sunrise
  const sunsetTime = cityWeatherData?.forecast?.forecastday[0]?.astro.sunset
  const precipitation = cityWeatherData?.forecast?.forecastday[0]?.day.daily_chance_of_rain
  const humidity = cityWeatherData?.forecast?.forecastday[0]?.day.avghumidity
  const wind = cityWeatherData?.forecast?.forecastday[0]?.day.maxwind_kph
  const pressure = cityWeatherData?.forecast?.forecastday[0]?.hour[0].pressure_mb

  return (
    <StyledWeatherConditionsContainer>
      <GridContainer>
        <WeatherConditionCard title="Sunrise" content={sunriseTime} />
        <WeatherConditionCard title="Sunset" content={sunsetTime} />
        <WeatherConditionCard title="Precipitation" content={`${precipitation} %`} />
        <WeatherConditionCard title="Humidity" content={`${humidity} %`} />
        <WeatherConditionCard title="Wind" content={`${wind} KM/H`} />
        <WeatherConditionCard title="Pressure" content={`${pressure} hPA`} />
      </GridContainer>
    </StyledWeatherConditionsContainer>
  )
}

export default WeatherConditions

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

const GridItem = styled.div`
  padding: 1rem;
  text-align: center;

  p {
    font-size: 1rem;
    color: #fcf193;
    margin-bottom: 1rem;
  }

  div {
    font-size: 1.2rem;
  }
`
