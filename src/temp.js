const apiKey = "e6f728c1ca0ad382a19f1e0adbeeb812";

async function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export async function fetchWeather() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const weatherData = await getWeather(lat, lon);
          resolve(weatherData);
        } catch (err) {
          reject(err);
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
}
