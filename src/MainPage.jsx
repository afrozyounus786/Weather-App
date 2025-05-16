import React from 'react'
import WeatherTitle from './WeatherTitle'
import photo from './assets/photo.png' 
import './MainPage.css';

const MainPage = () => {
  return (
    <div className='main'>
      <div className='image'>
        <img src={photo} alt="weather" />
      </div>
      <WeatherTitle />
    </div>
  )
}

export default MainPage