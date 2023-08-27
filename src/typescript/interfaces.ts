export interface ICityWeatherData {
  location: {
    name: string
    region: string
    country: string
    localtime: string
  }
  current: {
    temp_c: number
    wind_kph: number
    pressure_mb: number
    condition: {
      text: string
      icon: string
    }
  }
  forecast: {
    forecastday: {
      hour: any
      day: {
        avgtemp_c: number
        avghumidity: number
        mintemp_c: string
        maxtemp_c: string
        condition: {
          text: string
          icon: string
        }
        daily_chance_of_rain: string
      }
      astro: {
        sunrise: string
        sunset: string
      }
    }[]
  }
}

export interface ILocationWeatherData {
  location: {
    name: string
  }
  current: {
    temp_c: number
    feelslike_c: number
    condition: {
      text: string
    }
  }
  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number
        mintemp_c: number
      }
    }
  }
}

export interface IDailyWeatherData {
  forecast: {
    forecastday: {
      day: {
        maxtemp_c: string
        mintemp_c: string
        condition: {
          icon: string
          text: string
        }
        daily_chance_of_rain: number
        avgtemp_c: number
      }
    }[]
  }
}

export interface LocationData {
  location: string
  country: string
  temperature: number
  weatherIcon: string
}
