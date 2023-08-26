import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { styled } from 'styled-components'
import { FetchDataForm } from '@components/forms/FetchDataForm'
import { PrimaryNavbar } from '@components/navbars/PrimaryNavbar'
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi'
import { FiSun } from 'react-icons/fi'
import HourlyTemperatureSection from '@components/sections/HourlyTemperatureSection'

export const LocationWeather = () => {
  const [cityWeatherData, setCityWeatherData] = useState()
  const { location } = useParams()

  const API_KEY = '795e1e963d1887c1d98f97b6b45e0eea'

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        )

        setCityWeatherData(data.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  console.log(cityWeatherData)

  return (
    <LocationWeatherContainer>
      <PrimaryNavbar>
        <FetchDataForm setLocationList={'ppp'} />
      </PrimaryNavbar>

      <StyledTemperatureContainer>
        <StyledLocationName>{cityWeatherData?.name}</StyledLocationName>

        <StyledMinMaxTemperature>
          <StyledTemperature>{parseInt(cityWeatherData?.main.temp)}&#176;</StyledTemperature>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <PiCaretUpBold />
              {parseInt(cityWeatherData?.main.temp_max)}&#176;
            </div>
            <div>
              <PiCaretDownBold />
              {parseInt(cityWeatherData?.main.temp_min)}&#176;
            </div>
          </div>
        </StyledMinMaxTemperature>

        <StyledWeatherFeeling>
          <div>{cityWeatherData?.weather[0].main}</div>
          <div>{parseInt(cityWeatherData?.main.feels_like)}</div>
        </StyledWeatherFeeling>

        <StyledSunIcon />
      </StyledTemperatureContainer>

      <HourlyTemperatureSection location={location} />
    </LocationWeatherContainer>
  )
}

const LocationWeatherContainer = styled.div`
  background: linear-gradient(to top, #ef7b14, #eda924);
`

const StyledLocationName = styled.div`
  font-size: 1.5rem;
`

const StyledTemperatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  font-size: 4rem;
  gap: 1rem;
  padding: 3rem;
`

const StyledTemperature = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 4rem;
  font-weight: 600;
`

const StyledMinMaxTemperature = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
`

const StyledWeatherFeeling = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
`

const StyledSunIcon = styled(FiSun)`
  grid-column: 2;
  grid-row: 1 / span 3;
  justify-self: flex-end; /* Align to the right edge */
  font-size: 25rem;
  padding: 4rem;
  background-color: #f09e2e;
  border-radius: 100rem;

  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  transform-origin: bottom center;
  transform: translateY(50%);
  rotate: -90deg;

  position: relative;
  right: -16rem; /* Adjust this value to position the sun icon */
  top: -12rem;
`
