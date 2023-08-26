import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { styled } from 'styled-components'
import { FetchDataForm } from '@components/forms/FetchDataForm'
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi'
import { FiSun } from 'react-icons/fi'
import HourlyTemperatureSection from '@components/sections/HourlyTemperatureSection'
import DailyTemperatureSection from '@components/sections/DailyTemperatureSection'
import WeatherConditions from '@components/sections/WeatherConditions'
import { WeatherNavbar } from '@components/navbars/WeatherNavbar'

export const LocationWeather = () => {
  const [cityWeatherData, setCityWeatherData] = useState()
  const { location } = useParams()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=4f223485bbd542168f1154529232608&q=${location}`
        )

        setCityWeatherData(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  console.log(cityWeatherData)

  return (
    <LocationWeatherContainer>
      <WeatherNavbar>
        <FetchDataForm setLocationList={'ppp'} />
      </WeatherNavbar>

      <StyledTemperatureContainer>
        <StyledLocationName>{cityWeatherData?.location.name}</StyledLocationName>

        <StyledMinMaxTemperature>
          <StyledTemperature>{parseInt(cityWeatherData?.current?.temp_c)}&#176;</StyledTemperature>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>
                <PiCaretUpBold />
              </div>
              <div>{parseInt(cityWeatherData?.forecast?.forecastday[0]?.day.maxtemp_c)}&#176;</div>
            </div>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>
                <PiCaretDownBold />
              </div>
              <div>{parseInt(cityWeatherData?.forecast?.forecastday[0]?.day.mintemp_c)}&#176;</div>
            </div>
          </div>
        </StyledMinMaxTemperature>

        <StyledWeatherFeeling>
          <div style={{ fontSize: '15px' }}>{cityWeatherData?.current?.condition.text}</div>
          <div>Feels like {parseInt(cityWeatherData?.current?.feelslike_c)}&#176;</div>
        </StyledWeatherFeeling>
      </StyledTemperatureContainer>

      <HourlyTemperatureSection location={location} />
      <DailyTemperatureSection location={location} />
      <WeatherConditions cityWeatherData={cityWeatherData} />
    </LocationWeatherContainer>
  )
}

const LocationWeatherContainer = styled.div`
  background: linear-gradient(to top, #ef7b14, #eda924);
  height: auto;
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
