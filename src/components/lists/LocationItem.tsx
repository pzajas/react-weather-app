import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface ILocationListItem {
  location: string
  country: string
  temperature: number
  icon: any
}

export const LocationListItem = ({ location, country, temperature, icon, onDelete }: ILocationListItem) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(location) // Pass the location to the onDelete function
    }
  }
  return (
    <StyledWeatherDataList>
      <StyledWeatherDataContainer>
        <StyledWeatherDataWrapper>
          {temperature}&#176;
          <StyledWeatherIcon src={icon} alt={`Weather in ${location}`} />
        </StyledWeatherDataWrapper>
        <StyledLocationData>
          <StyledLink to={`/contacts/${location}`}>
            <StyledLocationText>{location}</StyledLocationText>
            <StyledCountryText>{country}</StyledCountryText>
          </StyledLink>
        </StyledLocationData>
        <StyledDeleteButton onClick={handleDelete}>Delete</StyledDeleteButton>
      </StyledWeatherDataContainer>
    </StyledWeatherDataList>
  )
}

const commonTextStyle = css`
  font-family: 'Poppins';
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledWeatherDataList = styled.li`
  display: flex;
  flex-wrap: wrap;
  ${commonTextStyle}
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
  font-weight: 500;
`

const StyledLocationData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  ${commonTextStyle}
`

const StyledLocationText = styled.div`
  font-size: 2rem;
`

const StyledCountryText = styled.div`
  font-size: 12px;
  color: lightgrey;
`

const StyledWeatherIcon = styled.img`
  width: 4rem;
  height: 4rem;
`

const StyledDeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
`
