import styled from 'styled-components'
import { LocationListItem } from './LocationItem'
import { useSelector } from 'react-redux'

interface ILocationItem {
  location: string
  country: string
  temperature: number
  weatherIcon: string
}

export const LocationList = () => {
  const { cities } = useSelector((state: ILocationItem[]) => state.cities)

  return (
    <GridContainer>
      {cities.map((city: ILocationItem) => (
        <LocationListItem city={city} />
      ))}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: space-evenly;
  align-content: space-evenly;
  padding: 30px;
  justify-items: center;
  align-items: center;

  @media (max-width: 375px) {
    grid-template-columns: 2fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
