import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'

import { persistor, store } from '@redux/store/store'

import './index.css'
import { LocationWeather } from './routes/LocationWeather'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'contacts/:location',
    element: <LocationWeather />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
