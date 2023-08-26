import { BsList } from 'react-icons/bs'
import { styled } from 'styled-components'
import { FetchDataForm } from '@components/forms/FetchDataForm'

export const PrimaryNavbar = ({ children }) => {
  return (
    <Wrapper>
      <BsList size={30} />
      {children}
      {/* <BsList size={30} />
      <FetchDataForm setLocationList={setLocationList} /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 3rem;
`
