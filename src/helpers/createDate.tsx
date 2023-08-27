import { styled } from 'styled-components'

export const formatDate = (date: any) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  return <StyledCurrentDate>{date.toLocaleDateString('en-US', options)}</StyledCurrentDate>
}

const StyledCurrentDate = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`
