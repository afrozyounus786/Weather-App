import React, { useEffect, useState } from 'react';
import './DetailPage.css';
import photo from './assets/photo.png';
import hot from './assets/hot.png';
import cold from './assets/cold.png';
import home from './assets/home.png';
import { useNavigate } from 'react-router-dom';
import { fetchWeather } from "./temp";

const DetailPage = () => {
  const navigate = useNavigate(); 
  const [weather, setWeather] = useState({
    main: {
      temp: null,
      feels_like: null,
      humidity: null,
      mintemp:null,
      maxtemp:null
    },
    weather: [{ description: '' }],
    name: '',
    wind:{
      speed:null

    }
  });
  
  const handle = () => {
    navigate('/'); 
  };

  useEffect(() => {
    const afroz = async () => {
      try {
        const data = await fetchWeather();
        console.log(data);
        setWeather(data);
      } catch (error){
        console.log("Failed to fetch data", error);        
      }
    }
    afroz();
  }, []);
  
const temperature = weather.main.temp;
const feelsLike = weather.main.feels_like;
const humidity = weather.main.humidity;
const description = weather.weather[0].description;
const cityName = weather.name;
const maxtemp = weather.main.temp_max;
const mintemp = weather.main.temp_min;
const windspeed = weather.wind.deg;

  return (
    <>
      <div className="body">
        <div className="detail-wrapper">
          <img src={humidity > 80 ? photo : temperature > 15 ? hot : cold} alt="weather" />
          <button className='exit' onClick={handle}>Exit</button>
        </div>

        <div className="heading">
          <div>
          <pre>
            <h3 style={{color: "red"}}>City - {cityName}</h3>
            <h3>{temperature !== null ? `${temperature}°C` : 'Loading...'}</h3>
            <h3>Feels Like: {feelsLike}°C</h3>
            <h3>Humidity: {humidity}%</h3>
          </pre>
          </div>
          <div className='photos'>
          <img src={home} alt="" />
        </div>
        </div>

        <div className="footer">
          <div className="header">
            <div className="top">Today</div>
            <div className="date">{new Date().toDateString()}</div>
          </div>

          <div className="forcast">
            <div className="div">
              <h3>Min temp</h3>
              <p>{mintemp}°C</p>
            </div>
            <div className="div">
              <h3>Max temp</h3>
              <p>{maxtemp}°C</p>
            </div>
            <div className="div">
              <h3>Wind direction</h3>
              <p>{windspeed}°</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
