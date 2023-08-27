import { styled } from 'styled-components'

export const WeatherConditionCard = ({ title, content }) => {
  return (
    <GridItem>
      <p>{title}</p>
      <div>{content}</div>
    </GridItem>
  )
}

const GridItem = styled.div`
  padding: 1rem;
  text-align: center;

  p {
    font-size: 1rem;
    color: #fcf193;
    margin-bottom: 1rem;
  }

  div {
    font-size: 1.2rem;
  }
`
