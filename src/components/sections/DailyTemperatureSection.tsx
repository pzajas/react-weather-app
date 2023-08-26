import { styled } from 'styled-components'

const DailyTemperatureSection = ({ cityWeatherData }) => {
  const icon = cityWeatherData?.weather[0]?.icon

  return (
    <StyledDailyTemperatureSection>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
      <StyledSingleDayTemperature>
        <p>Monday</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />
        <div>{parseInt(cityWeatherData?.main?.temp)}</div>
      </StyledSingleDayTemperature>
    </StyledDailyTemperatureSection>
  )
}

export default DailyTemperatureSection

const StyledDailyTemperatureSection = styled.div`
  height: 40vh;
  padding: 3rem;
`

const StyledSingleDayTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-size: 1.5rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`
