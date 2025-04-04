import { getCityWeatherDetails } from "@/app/lib/api/getCityWeatherDetails";
import WeatherTable from "../components/WeatherTable";

export default async function Page({ params }) {
  const { id } = await params;

  try {
    const weather = await getCityWeatherDetails(id);

    if (!weather) {
      return <div className="text-red-500">Failed to fetch weather data.</div>;
    }

    return (
      <div className="max-h-screen min-w-screen bg-transparent text-gray-100 px-6 py-10 ">
        <div className="flex flex-col gap-3 items-center">
          <div className="bg-[#272a30] rounded-2xl shadow-lg p-6 border border-gray-700 min-w-[350px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1200px]">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">
              {weather.name}, {weather.sys?.country}
            </h1>
            <p className="text-lg text-gray-300 capitalize">
              {weather.weather?.[0]?.main} – {weather.weather?.[0]?.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 text-sm sm:text-base">
              <div>
                <p className="text-gray-400">Temperature</p>
                <p className="text-lg font-semibold">{weather.main?.temp}°C</p>
              </div>
              <div>
                <p className="text-gray-400">Humidity</p>
                <p className="text-lg font-semibold">
                  {weather.main?.humidity}%
                </p>
              </div>
              <div>
                <p className="text-gray-400">Wind</p>
                <p className="text-lg font-semibold">
                  {weather.wind?.speed} m/s
                </p>
              </div>
              <div>
                <p className="text-gray-400">Visibility</p>
                <p className="text-lg font-semibold">{weather.visibility} m</p>
              </div>
            </div>
          </div>

          <div className="bg-[#272a30] rounded-2xl shadow-lg p-6 border border-gray-700 min-w-[350px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1200px]">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">
              Detailed Weather Metrics
            </h2>
            <WeatherTable weather={weather} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return (
      <div className="min-h-screen bg-[#0f172a] text-red-500 p-6">
        Sorry, something went wrong while fetching the weather data.
      </div>
    );
  }
}
