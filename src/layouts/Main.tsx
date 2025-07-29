import bgImg from '../assets/7.svg'
import { IoSearch } from "react-icons/io5";

export interface WeatherData {
  name: string
  weather: {
    description: string
    icon: string
    main: string
  }[]
  main: {
    humidity: number
    temp: number
  }
  sys: {
    country: string
  }
  wind: {
    speed: number
  }
}

interface MainProps {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  handleClick: () => void
  weather: WeatherData | null
}

const Main: React.FC<MainProps> = ({query, setQuery, handleClick, weather}) => {
  return <main className="flex flex-col items-center w-[1536px] h-[729px]" style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', backgroundPosition: 'center',
  }}>
      <div className='flex space-x-2 mt-10'>
        <input className='border-none p-3 w-[600px] h-[40px] rounded-xl' type="text"
          placeholder='search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <button className='bg-slate-500 w-[60px] h-[40px] rounded-xl pl-5' onClick={handleClick}>
          <IoSearch />
        </button>
      </div>

      <div className='flex items-center justify-center h-[100vh] gap-5'>
        {weather && (
          <div className="flex justify-around items-center bg-white/15 text-white p-5 w-[500px] h-[300px]">
            <div>
              <h1 className="text-3xl">{weather.name}</h1>
              <span>{ weather.sys.country}</span>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            </div>
            <div className='space-y-1'>
              <p className="text-xl">{weather.weather[0].description}</p>
              <p className="text-2xl">{Math.floor(weather.main.temp)} °C</p>
              <p>humidity { weather.main.humidity} %</p>
              <p>wind { weather.wind.speed} km/s</p>
              <p>{ weather.weather[0].main}</p>
            </div>
          </div>
        )}
      </div>
  </main>
}

export default Main