import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CityData {
  location: string
  country: string
  temperature: number
  weatherIcon: string
}

interface CityState {
  cities: CityData[]
}

const initialState: CityState = {
  cities: [],
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<CityData>) => {
      state.cities.push(action.payload)
    },
  },
})

export const { addCity } = citySlice.actions
export default citySlice.reducer
