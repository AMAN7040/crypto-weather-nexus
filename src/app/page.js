import Head from "next/head";
import Weather from "./components/Weather";
import Crypto from "./components/Crypto";
import News from "./components/News";
import { getCities } from "./utils/getCities";
import { fetchWeather } from "./utils/fetchWeather";
import { fetchCoins } from "./utils/fetchCoins";
import { fetchNews } from "./utils/fetchNews";

export default async function Home() {
  const coins = await fetchCoins();
  const cities = getCities();
  const weatherData = await fetchWeather(cities);
  const newsData = await fetchNews();
  return (
    <>
      <Head>
        <title>CryptoWeather Nexus Dashboard</title>
        <meta
          name="description"
          content="Monitor live weather and cryptocurrency data in one place."
        />
        <meta
          name="keywords"
          content="crypto, weather, dashboard, cryptocurrency, news"
        />
      </Head>
      <main className="grid grid-cols-1 grid-rows-[2fr_350px_2fr] sm:grid-cols-[2fr_2fr_1.5fr] sm:grid-rows-[2fr_2fr_1.5fr] gap-3 h-[max(calc(100vh-66px))] py-5 px-2 md:px-6">
        <Crypto coins={coins} />
        <Weather initialData={weatherData} />
        <News newsData={newsData} />
      </main>
    </>
  );
}
