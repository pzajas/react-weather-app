import React from 'react'
import { FetchDataButton } from '@components/buttons/FetchDataButton'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { fetchInitialCityWeatherData } from '@helpers/fetchInitialCityWeatherData'
import styled from 'styled-components'
import { LocationData } from 'typescript/interfaces'
import { useDispatch } from 'react-redux'
import { addCity } from '@redux/features/citiesSlice'

interface FormData {
  city: string
}

interface FetchDataFormProps {
  setLocationList: React.Dispatch<React.SetStateAction<LocationData[]>>
}

export const FetchDataForm: React.FC<FetchDataFormProps> = ({ setLocationList }) => {
  const { control, handleSubmit, reset } = useForm<FormData>()
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const city = formData.city
    try {
      const newLocationData: LocationData = await fetchInitialCityWeatherData(city)
      setLocationList((prevList) => [...prevList, newLocationData])
      dispatch(addCity(newLocationData))
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="city" // Change to 'city'
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
