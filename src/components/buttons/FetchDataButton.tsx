import styled from 'styled-components'

interface IFetchDataButton {
  icon: any
  onClick?: any
}

export const FetchDataButton = ({ icon, onClick }: IFetchDataButton) => {
  return <Button onClick={onClick}>{icon}</Button>
}

const Button = styled.button`
  background: none;
  border: none;
  margin-left: 50%;
`
