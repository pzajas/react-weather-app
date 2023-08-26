import { FetchDataForm } from '@components/forms/FetchDataForm'
import { LocationList } from '@components/lists/LocationList'
import { PrimaryNavbar } from '@components/navbars/PrimaryNavbar'
import DailyTemperatureSection from '@components/sections/DailyTemperatureSection'
import { useState } from 'react'
import { styled } from 'styled-components'

const WeatherComponent = () => {
  const [locationList, setLocationList] = useState([])

  return (
    <GradientBackground>
      <PrimaryNavbar>
        <FetchDataForm setLocationList={setLocationList} />
      </PrimaryNavbar>
      <LocationList locationList={locationList} />
    </GradientBackground>
  )
}

export default WeatherComponent

const GradientBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #4a4d6c, #778196);
`
