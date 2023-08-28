import { styled } from 'styled-components'

export const CreateDate = (date: any) => {
  const options = { weekday: 'short', month: 'long', day: 'numeric' }
  return <StyledCurrentDate>{date.toLocaleDateString('en-US', options)}</StyledCurrentDate>
}

const StyledCurrentDate = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textDark};
`
