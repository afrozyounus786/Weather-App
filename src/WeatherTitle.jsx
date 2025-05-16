import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherTitle = () => {
  const navigate = useNavigate();

  function handleEvent() {
    navigate('/detail'); 
  }

  return (
    <div>
      <h1>Weather</h1>
      <h2>Forecasts</h2>
      <div className="btn">
        <button onClick={handleEvent}>Get start</button>
      </div>
    </div>
  );
};

export default WeatherTitle;
