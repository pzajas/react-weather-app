import styled from 'styled-components'
import { LocationListItem } from './LocationItem'

interface ILocationItem {
  location: string
  country: string
  temperature: number
  weatherIcon: string
}

export const LocationList = ({ locationList, setLocationList }: { locationList: ILocationItem[] }) => {
  const handleDelete = (locationToDelete: string) => {
    const updatedList = locationList.filter((item) => item.location !== locationToDelete)
    setLocationList(updatedList)
  }

  return (
    <GridContainer>
      {locationList.map((item: ILocationItem) => (
        <LocationListItem
          key={item.location}
          location={item.location}
          country={item.country}
          temperature={item.temperature}
          icon={item.weatherIcon}
          setLocationList={setLocationList}
          onDelete={handleDelete}
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
