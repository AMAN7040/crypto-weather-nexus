export async function getCityWeatherDetails(cityName) {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API;

  // Check if required environment variables are missing
  if (!API_KEY || !BASE_URL) {
    throw new Error("API Key or Base URL is missing.");
  }

  const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch current weather data. Status: ${response.status}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching weather details:", error);
    throw new Error("Failed to fetch current weather data.");
  }
}
