import styled from 'styled-components'
import { LocationListItem } from './LocationItem'

interface ILocationItem {
  location: string
  country: string
  temperature: number
  weatherIcon: string
}

export const LocationList = ({ locationList }: { locationList: ILocationItem[] }) => {
  console.log(locationList)

  return (
    <GridContainer>
      {locationList.map((item: ILocationItem) => (
        <LocationListItem
          key={item.location}
          location={item.location}
          country={item.country}
          temperature={item.temperature}
          icon={item.weatherIcon}
        />
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
`
