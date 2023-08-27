import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { HourlyTemperatureSection } from '@components/sections/HourlyTemperatureSection'
import { DailyTemperatureSection } from '@components/sections/DailyTemperatureSection'
import { WeatherConditions } from '@components/sections/WeatherConditions'
import { WeatherNavbar } from '@components/navbars/WeatherNavbar'
import { TemperatureText } from '@components/texts/TemperatureText'
import { CreateDate } from '@helpers/CreateDate'
import { TemperatureSection } from '@components/sections/LocationTemperatureSection'
import { ICityWeatherData } from 'typescript/interfaces'

export const LocationWeather = () => {
  const [cityWeatherData, setCityWeatherData] = useState<ICityWeatherData | undefined>(undefined)
  const weatherLocation = cityWeatherData?.location
  const weatherCurrent = cityWeatherData?.current
  const weatherForecast = cityWeatherData?.forecast

  const { location } = useParams()
  const date = new Date()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=4f223485bbd542168f1154529232608&q=${location}&days=8`
        )

        setCityWeatherData(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  return (
    <LocationWeatherContainer>
      <WeatherNavbar>
        {CreateDate(date)}
        <TemperatureText text="C" fontSize="20px" fontWeight="600" />
      </WeatherNavbar>
      <TemperatureSection
        weatherLocation={weatherLocation}
        weatherCurrent={weatherCurrent}
        weatherForecast={weatherForecast}
      />
      {cityWeatherData && <HourlyTemperatureSection cityWeatherData={cityWeatherData} />}
      {cityWeatherData && <DailyTemperatureSection cityWeatherData={cityWeatherData} />}
      {cityWeatherData && <WeatherConditions cityWeatherData={cityWeatherData} />}
    </LocationWeatherContainer>
  )
}

const LocationWeatherContainer = styled.div`
  background: linear-gradient(to top, #ef7b14, #eda924);
  height: auto;
  overflow-x: hidden;
`
