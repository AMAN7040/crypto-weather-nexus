export default function WeatherTable({ weather }) {
  if (!weather) return null;

  const rows = [
    { label: "Feels Like", value: `${weather.main?.feels_like}°C` },
    { label: "Pressure", value: `${weather.main?.pressure} hPa` },
    { label: "Cloudiness", value: `${weather.clouds?.all}%` },
    { label: "Wind Direction", value: `${weather.wind?.deg}°` },
    { label: "Wind Gust", value: `${weather.wind?.gust ?? "N/A"} m/s` },
    {
      label: "Sunrise",
      value: new Date(weather.sys?.sunrise * 1000).toLocaleTimeString(),
    },
    {
      label: "Sunset",
      value: new Date(weather.sys?.sunset * 1000).toLocaleTimeString(),
    },
  ];

  return (
    <table className="w-full table-auto border-collapse text-sm sm:text-base">
      <thead>
        <tr className="bg-[#262626] text-gray-300 border-b border-gray-600">
          <th className="px-4 py-3 text-left font-medium">Metric</th>
          <th className="px-4 py-3 text-left font-medium">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr
            key={row.label}
            className={
              idx % 2 === 0
                ? "bg-[#201f1e] border-b border-gray-700"
                : "bg-[#1b1b1bac] border-b border-gray-700"
            }
          >
            <td className="px-4 py-3 text-gray-400">{row.label}</td>
            <td className="px-4 py-3 text-gray-200 font-medium">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
