import { deleteCity } from '@redux/features/citiesSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { styled, css } from 'styled-components'

interface ILocationListItem {
  location: string
  country: string
  temperature: number
  weatherIcon: any
}

export const LocationListItem = ({ city }: { city: ILocationListItem }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteCity(city.location))
  }

  return (
    <StyledWeatherDataList>
      <StyledWeatherDataContainer>
        <StyledLink to={`/contacts/${city.location}`}>
          <StyledWeatherDataWrapper>
            {city.temperature}&#176;
            <StyledWeatherIcon src={city.weatherIcon} alt={`Weather in ${city.location}`} />
          </StyledWeatherDataWrapper>

          <StyledLocationData>
            <StyledLocationText>{city.location}</StyledLocationText>
            <StyledCountryText>{city.country}</StyledCountryText>
          </StyledLocationData>
        </StyledLink>
        <StyledDeleteButton onClick={handleDelete}>-</StyledDeleteButton>
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
  position: relative;
  width: 40vw;
  height: 16vh;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #878fa4;

  @media (max-width: 375px) and (max-width: 678px) {
    width: 80vw;
    height: 22vh;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 25vw;
    height: 18vh;
    margin: 0 auto;
  }
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
  background-color: steelblue;
  color: white;
  border: none;
  border-radius: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`
