import axios from 'axios'
import { styled } from 'styled-components'
import { useEffect, useState, useRef } from 'react'

const HourlyTemperatureSection = ({ location }) => {
  const [hourlyTempData, setHourlyTempData] = useState([])
  const nowRef = useRef(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=4f223485bbd542168f1154529232608&q=${location}`
        )

        setHourlyTempData(response?.data?.forecast?.forecastday[0]?.hour)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  const currentHour = new Date().getHours()

  useEffect(() => {
    if (nowRef.current) {
      nowRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [hourlyTempData])

  return (
    <StyledHourlyTemperatureSection>
      <ScrollableContainer>
        {hourlyTempData?.map((day) => (
          <StyledHourlyTemperatureItem
            key={day.time}
            ref={day.time === `2023-08-26 ${currentHour}:00` ? nowRef : null}
            isNow={formatTime(day.time, currentHour) === 'NOW'}
          >
            <p>{formatTime(day.time, currentHour)}</p>
            <span>{parseInt(day.temp_c)}&#176;</span>
          </StyledHourlyTemperatureItem>
        ))}
      </ScrollableContainer>
    </StyledHourlyTemperatureSection>
  )
}

const formatTime = (time, currentHour) => {
  const hour = parseInt(time.substring(11, 13))
  const period = hour >= 12 ? 'PM' : 'AM'

  if (hour === currentHour) {
    return 'NOW'
  }

  const formattedHour = hour > 12 ? hour - 12 : hour
  return `${formattedHour} ${period}`
}

const StyledHourlyTemperatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  overflow-x: scroll;
  padding: 0rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-left: none;
  border-right: none;
`

const ScrollableContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const StyledHourlyTemperatureItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 4rem;
  /* background-color: ${(props) => (props.isNow ? '#b37700' : 'transparent')}; */
  color: ${(props) => (props.isNow ? 'gold' : 'white')};

  p {
    font-size: 1rem;
  }

  span {
    font-size: 1.5rem;
  }
`

export default HourlyTemperatureSection
