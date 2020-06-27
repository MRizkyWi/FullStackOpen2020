import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Country = ({country}) => {
  const [weather, setWeather] = useState(
    {
      detail: [],
      id: [],
      icon: [],
      temp: [],
      speed: [],
      deg: []
    }
  )
  
  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q='+country.capital+'&appid='+process.env.REACT_APP_WEATHER_API_KEY+'&units=metric')
      .then(response =>{
        setWeather({
          detail: response.data,
          id: response.data.weather[0].id,
          icon: response.data.weather[0].icon,
          main: response.data.main.temp,
          speed: response.data.wind.speed,
          deg: response.data.wind.deg
        })
      })
  }, [country.capital])
    
  const image = 'http://openweathermap.org/img/wn/'+weather.icon+'@2x.png'

  return (
    <div>
      <h1>
        {country.name}
      </h1>
      <p>
        capital {country.capital}
      </p>
      <p>
        population {country.population}
      </p>
      <h2>
        Spoken languages
      </h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.iso639_1}>
            {language.name}
          </li>)}
      </ul>
      <img src={country.flag} alt="flag"/>
      <h2>
        Weather in {country.capital}
      </h2>
      <p>
        <b>temperature:</b> {weather.temp} Celcius
      </p>
        <img src={image} alt="icon"/>
      <p>
        <b>wind:</b> {weather.speed} m/s {weather.deg} degree
      </p>
    </div>
  )
}

const Display = ({countries, filter, handleButtonClick}) => {
 
  let list = (countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase())))
  
  if (list.length === 0) return null

  if (list.length > 10){
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } 

  if (list.length > 1){
    return (
      <div>
        {list.map((country, id) =>
          <li key={id}>
            {country.name}
            <button onClick={() => handleButtonClick(country.name)}>show</button>
          </li>
        )}
      </div>
    )
  } 

  return(
    <Country country={list[0]}/>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) =>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const handleButtonClick = (name) => {
    setFilter(name)
  }

  return (
    <div>
      <p>find countries <input value={filter} onChange={handleFilterChange}/></p>
      <Display countries={countries} filter={filter} handleButtonClick={handleButtonClick}/>
    </div>
  );
}

export default App;
