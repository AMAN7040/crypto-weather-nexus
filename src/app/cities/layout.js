export const metadata = {
  title: "Weather Forecast | Real-time City Data",
  description: "Get real-time City Details.",
  keywords: "City, weather, Forecast, real-time data",
};

export default function Layout({ children }) {
  return (
    <main className="crypto-page">
      <h1 className="text-center py-2 text-white font-bold">
        THIS IS CITY PAGE
      </h1>
      {children}
    </main>
  );
}
