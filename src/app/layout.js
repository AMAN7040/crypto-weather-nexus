import Navbar from "./components/Navbar";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "CryptoWeather Nexus | Real-time Crypto & Weather Data",
  description:
    "Get real-time cryptocurrency prices and weather updates in one place. Stay informed with the latest trends and forecasts.",
  keywords:
    "cryptocurrency, weather, Bitcoin, Ethereum, real-time data, forecast",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
} 
