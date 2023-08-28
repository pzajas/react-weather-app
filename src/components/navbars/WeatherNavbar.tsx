import { ReactNode } from 'react'
import { BsList } from 'react-icons/bs'
import { styled } from 'styled-components'

interface IPrimaryNavbar {
  children: ReactNode
}

export const WeatherNavbar = ({ children }: IPrimaryNavbar) => {
  return (
    <WeatherNavbarContainer>
      <BsList size={30} />
      {children}
    </WeatherNavbarContainer>
  )
}

const WeatherNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 3rem;
  }
`
