import axios from 'axios'
import { styled } from 'styled-components'
import { useEffect, useState } from 'react'

const HourlyTemperatureSection = ({ location }) => {
  const [hourlyTempData, setHourlyTempData] = useState()
  const API_KEY = '795e1e963d1887c1d98f97b6b45e0eea'

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        )

        setHourlyTempData(response.data.main.temp)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  return (
    <StyledHourlyTemperatureSection>
      <StyledHourlyTemperatureItem>
        <div style={{ fontSize: '10px', color: 'lightgrey' }}>Now</div>
        <div style={{ fontSize: '15px' }}>{parseInt(hourlyTempData)}&#176;</div>
      </StyledHourlyTemperatureItem>
      <StyledHourlyTemperatureItem>
        <div style={{ fontSize: '10px', color: 'lightgrey' }}>Now</div>
        <div style={{ fontSize: '15px' }}>{parseInt(hourlyTempData)}&#176;</div>
      </StyledHourlyTemperatureItem>
      <StyledHourlyTemperatureItem>
        <div style={{ fontSize: '10px', color: 'lightgrey' }}>Now</div>
        <div style={{ fontSize: '15px' }}>{parseInt(hourlyTempData)}&#176;</div>
      </StyledHourlyTemperatureItem>
      <StyledHourlyTemperatureItem>
        <div style={{ fontSize: '10px', color: 'lightgrey' }}>Now</div>
        <div style={{ fontSize: '15px' }}>{parseInt(hourlyTempData)}&#176;</div>
      </StyledHourlyTemperatureItem>
      <StyledHourlyTemperatureItem>
        <div style={{ fontSize: '10px', color: 'lightgrey' }}>Now</div>
        <div style={{ fontSize: '15px' }}>{parseInt(hourlyTempData)}&#176;</div>
      </StyledHourlyTemperatureItem>
    </StyledHourlyTemperatureSection>
  )
}

export default HourlyTemperatureSection

const StyledHourlyTemperatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center the item vertically */
  height: 10vh;
  padding: 0rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-left: none;
  border-right: none;
`

const StyledHourlyTemperatureItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 4rem;
`
