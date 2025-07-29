import { useState } from 'react';
import axios from 'axios';
import type { WeatherData } from './layouts/Main'
import Main from './layouts/Main';

const App = () => {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "f40b7e54353314d0bd3542a10c229636"
  }
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)

  const handleClick = async () => {
    axios
      .get(`${api.base}weather?q=${query}&units=metric&lang=uz&APPID=${api.key}`)
      .then(res => {
        setWeather(res.data)
        setQuery('')        
      })
      .catch(err => {
        console.log(err);
        
      })
  }

  
  return (
    <Main
      query={query}
      setQuery={setQuery}
      handleClick={handleClick}
      weather={weather}
    />
  )

}
export default App;
