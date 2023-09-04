import { FetchDataButton } from '@components/buttons/FetchDataButton'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { AiOutlinePlus } from 'react-icons/ai'
import { fetchCityWeatherData } from '@helpers/fetchCityWeatherData'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addCity } from '@redux/features/citiesSlice'

interface FormData {
  city: string
}

interface FetchDataFormProps {
  setLocationList: React.Dispatch<React.SetStateAction<LocationData[]>>
}

interface LocationData {
  location: string
  country: string
  temperature: number
  weatherIcon: string
}

export const FetchDataForm: React.FC<FetchDataFormProps> = ({ setLocationList }) => {
  const { control, handleSubmit, reset } = useForm<FormData>()
  const { cities } = useSelector((state: any) => state.cities)
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const city = formData.city
    const cityExists = cities.some((existingCity: LocationData) => existingCity.location === city)

    if (cityExists) {
      alert(`${city} already exists in the city list.`)
    } else {
      try {
        const { newLocationData }: { newLocationData: LocationData } = await fetchCityWeatherData(city)

        setLocationList((prevList) => [...prevList, newLocationData])
        dispatch(addCity(newLocationData))
        reset()
      } catch (error: any) {
        const message = error?.response?.data?.error?.message.replace('q', 'city')
        alert(message)
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="city"
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
  border-bottom: 1px solid white;
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
