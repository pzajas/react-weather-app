import { styled } from 'styled-components'

interface WeatherConditionCardProps {
  title: string
  content: React.ReactNode
}

export const WeatherConditionCard = ({ title, content }: WeatherConditionCardProps) => {
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
