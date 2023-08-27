import { combineReducers } from 'redux'
import cityReducer from '../features/citiesSlice'

const rootReducer = combineReducers({
  cities: cityReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer as any
