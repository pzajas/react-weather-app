import { FetchDataButton } from '@components/buttons/FetchDataButton'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { fetchData } from '@helpers/fetchWeatherData'
import { styled } from 'styled-components'

export const FetchDataForm = ({ setLocationList }) => {
  const [weatherData, setWeatherData] = useState(null)
  const { control, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    const userInput = data.userInput
    try {
      const newLocationData = await fetchData(userInput)
      setWeatherData(newLocationData)
      setLocationList((prevList) => [...prevList, newLocationData])
      reset()
    } catch (error) {
      console.log(error)
    }
  }
  console.log(weatherData)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="userInput"
        control={control}
        defaultValue=""
        render={({ field }) => <Input type="text" placeholder="Add a city" {...field} />}
      />
      <FetchDataButton icon={<NavbarPlusIcon size={30} />} />
    </Form>
  )
}

const Form = styled.form`
  display: flex;
`

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  text-align: center;
  color: white;
  outline: none;

  &::placeholder {
    color: white;
  }
`

const NavbarPlusIcon = styled(AiOutlinePlus)`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`
