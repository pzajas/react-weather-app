import { styled } from 'styled-components'

interface TemperatureProps {
  fontSize?: string
  fontWeight?: string
  temperature?: number
  text?: string
}

export const TemperatureText = ({ text, temperature, fontSize, fontWeight }: TemperatureProps) => {
  const validTemperature = temperature !== undefined ? parseInt(temperature.toString()) : 0

  return (
    <TemperatureContainer fontSize={fontSize} fontWeight={fontWeight}>
      <TextContainer fontSize={fontSize}>
        {text} {validTemperature ? validTemperature : null}&#176;
      </TextContainer>
    </TemperatureContainer>
  )
}
const TemperatureContainer = styled.div<TemperatureProps>`
  display: flex;
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
`

const TextContainer = styled.div<TemperatureProps>`
  font-size: ${(props) => props.fontSize || '20px'};
`
