import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

interface ILocationListItem {
  location: string
  country: string
  temperature: number
  icon: any
}

const LocationListItem = ({ location, country, temperature, icon }: ILocationListItem) => {
  console.log(icon)
  return (
    <Link to={`/contacts/${location}`}>
      <StyledWeatherDataList>
        <StyledWeatherDataContainer>
          <StyledWeatherDataWrapper>
            {temperature}&#176;
            <StyledWeatherIcon src={icon} alt="Weather Icon" />
          </StyledWeatherDataWrapper>
          <StyledLocationDataWrapper>
            <div style={{ fontSize: '16px' }}>{location}</div>
            <div style={{ fontSize: '12px', color: 'lightgrey' }}>{country}</div>
          </StyledLocationDataWrapper>
        </StyledWeatherDataContainer>
      </StyledWeatherDataList>
    </Link>
  )
}

export default LocationListItem

const StyledWeatherDataList = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Poppins';
`

const StyledWeatherDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  height: 16vh;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #878fa4;
`

const StyledWeatherDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`

const StyledLocationDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const StyledWeatherIcon = styled.img`
  width: 4rem;
  height: 4rem;
`
