import styled from 'styled-components'
import { PiCaretUpBold, PiCaretDownBold } from 'react-icons/pi'
import { BiSun } from 'react-icons/bi'
import { TemperatureText } from '@components/texts/TemperatureText'

export const TemperatureSection = ({ weatherLocation, weatherCurrent, weatherForecast }) => {
  return (
    <StyledTemperatureContainer>
      <StyledLocationName>{weatherLocation?.name}</StyledLocationName>
      <StyledMinMaxTemperature>
        <TemperatureText temperature={weatherCurrent?.temp_c} fontSize="60px" fontWeight="600" />
        <TemperatureWrapper>
          <IconWrapper>
            <PiCaretUpBold />
          </IconWrapper>
          <TemperatureText temperature={weatherForecast?.day.maxtemp_c} fontSize="12px" />
          <IconWrapper>
            <PiCaretDownBold />
          </IconWrapper>
          <TemperatureText temperature={weatherForecast?.day.mintemp_c} fontSize="12px" />
        </TemperatureWrapper>
      </StyledMinMaxTemperature>
      <SunIconContainer>
        <SunIconWrapper />
      </SunIconContainer>
      <StyledWeatherFeeling>
        <AtmoConditions>{weatherCurrent?.condition.text}</AtmoConditions>
        <TemperatureText temperature={weatherCurrent?.feelslike_c} fontSize="12px" text="Feels like" />
      </StyledWeatherFeeling>
    </StyledTemperatureContainer>
  )
}

const StyledTemperatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  font-size: 4rem;
  gap: 1rem;
  padding: 3rem 0rem 3rem 3rem;
`

const StyledLocationName = styled.div`
  grid-column: 1;
  grid-row: 1;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 4rem;
`

const StyledMinMaxTemperature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  grid-column: 1;
  grid-row: 2;
`

const SunIconContainer = styled.div`
  grid-column: 2;
  grid-row: 1 / span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0a830;
  border-radius: 200px;
  padding: 4rem;
  transform: translateX(40%);
`

const SunIconWrapper = styled(BiSun)`
  font-size: 20rem;
  display: block;
  margin: 0 auto;
`

const AtmoConditions = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  gap: 0.5rem;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledWeatherFeeling = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
`
