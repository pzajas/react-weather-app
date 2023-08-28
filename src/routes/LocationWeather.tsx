import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider, styled } from 'styled-components'
import { HourlyTemperatureSection } from '@components/sections/HourlyTemperatureSection'
import { DailyTemperatureSection } from '@components/sections/DailyTemperatureSection'
import { WeatherConditions } from '@components/sections/WeatherConditions'
import { WeatherNavbar } from '@components/navbars/WeatherNavbar'
import { TemperatureText } from '@components/texts/TemperatureText'
import { CreateDate } from '../helpers/createDate'
import { TemperatureSection } from '@components/sections/LocationTemperatureSection'
import { ICityWeatherData } from 'typescript/interfaces'
import { fetchCityWeatherData } from '@helpers/fetchCityWeatherData'
import { orangeTheme, blueTheme } from '../styles/theme'
import { VscColorMode } from 'react-icons/vsc'

export const LocationWeather = () => {
  const [cityWeatherData, setCityWeatherData] = useState<ICityWeatherData | undefined>(undefined)
  const [currentTheme, setCurrentTheme] = useState(orangeTheme)
  const weatherLocation = cityWeatherData?.location
  const weatherCurrent = cityWeatherData?.current
  const weatherForecast = cityWeatherData?.forecast

  const { location }: any = useParams()
  const date = new Date()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { response } = await fetchCityWeatherData(location)

        setCityWeatherData(response)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [location])

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === orangeTheme ? blueTheme : orangeTheme)
  }

  return (
    <ThemeProvider theme={currentTheme}>
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
      <StyledToggleButton onClick={toggleTheme}>
        <StyledThemeIcon />
      </StyledToggleButton>
    </ThemeProvider>
  )
}

const LocationWeatherContainer = styled.div`
  background: ${(props) => props.theme.background};
  height: auto;
  overflow-x: hidden;
`

const StyledToggleButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: orangered;

  color: black;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
`

const StyledThemeIcon = styled(VscColorMode)`
  color: ${(props) => props.theme.colors.white};
`
