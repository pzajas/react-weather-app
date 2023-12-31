import { FetchDataForm } from '@components/forms/FetchDataForm'
import { LocationList } from '@components/lists/LocationList'
import { WeatherNavbar } from '@components/navbars/WeatherNavbar'
import { useState } from 'react'
import { styled } from 'styled-components'
import { LocationData } from 'typescript/interfaces'

export const App = () => {
  const [, setLocationList] = useState<LocationData[]>([])

  return (
    <GradientBackground>
      <WeatherNavbar>
        <FetchDataForm setLocationList={setLocationList} />
      </WeatherNavbar>
      <LocationListContainer>
        <LocationList />
      </LocationListContainer>
    </GradientBackground>
  )
}

const LocationListContainer = styled.div`
  max-height: calc(100vh - 100px);
  overflow: auto;
`

const GradientBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #4a4d6c, #778196);
`
