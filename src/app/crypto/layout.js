export const metadata = {
  title: "CryptoCurrency | Real-time Crypto Data",
  description: "Get real-time cryptocurrency Details.",
  keywords: "cryptocurrency, Crypto, Bitcoin, Ethereum, real-time data",
};

export default function Layout({ children }) {
  return (
    <main className="crypto-page">
      <h1 className="text-center py-3 text-white font-bold">
        THIS IS CRYPTO PAGE
      </h1>
      {children}
    </main>
  );
}
