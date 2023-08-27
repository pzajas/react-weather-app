import { styled } from 'styled-components'
import { ICityWeatherData } from 'typescript/interfaces'

export const DailyTemperatureSection = ({ cityWeatherData }: { cityWeatherData: ICityWeatherData }) => {
  console.log(cityWeatherData)

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <StyledDailyTemperatureSection>
      {daysOfWeek.map((day, index) => (
        <StyledSingleDayTemperature key={day}>
          <p>{day}</p>
          <StyledIconAndRainPercent>
            <img src={cityWeatherData?.forecast?.forecastday[index + 1]?.day?.condition?.icon} alt="Weather Icon" />
            <div>
              {cityWeatherData?.forecast?.forecastday[index + 1]?.day?.condition?.text.includes('rain')
                ? `${cityWeatherData?.forecast?.forecastday[index + 1]?.day?.daily_chance_of_rain} %`
                : null}
            </div>
          </StyledIconAndRainPercent>

          <StyledTemperatureContainer>
            <div className="temperature" style={{ fontWeight: 'bold' }}>
              {parseInt(cityWeatherData?.forecast?.forecastday[index]?.day?.maxtemp_c)}
            </div>
            <div className="temperature">{parseInt(cityWeatherData?.forecast?.forecastday[index]?.day?.mintemp_c)}</div>
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
