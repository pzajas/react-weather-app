import { FetchDataForm } from '@components/forms/FetchDataForm'
import { LocationList } from '@components/lists/LocationList'
import { WeatherNavbar } from '@components/navbars/WeatherNavbar'
import { useState } from 'react'
import { styled } from 'styled-components'

export const App = () => {
  const [locationList, setLocationList] = useState([])

  return (
    <GradientBackground>
      <WeatherNavbar>
        <FetchDataForm setLocationList={setLocationList} />
      </WeatherNavbar>
      <LocationList locationList={locationList} />
    </GradientBackground>
  )
}

const GradientBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #4a4d6c, #778196);
`
