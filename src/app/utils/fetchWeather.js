export const fetchWeather = async (cities) => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API;

  if (!API_KEY || !BASE_URL) {
    return [];
  }

  try {
    const weatherData = await Promise.all(
      cities.map(async (city) => {
        try {
          const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
         

          const response = await fetch(url);

          if (!response.ok) {
            console.error();
            return {
              name: city,
              error: `Error ${response.status}: ${response.statusText}`,
            };
          }

          const data = await response.json();

          return {
            name: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            condition: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          };
        } catch (error) {
          console.error(error.message);
          return { name: city, error: "Data unavailable" };
        }
      })
    );

    return weatherData;
  } catch (err) {
    return [];
  }
};
