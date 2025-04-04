export const fetchCoins = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_COIN_API;

  if (!BASE_URL) {
    return [];
  }

  try {
    const url = `${BASE_URL}?vs_currency=usd&ids=bitcoin,ethereum,binancecoin`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `Error fetching crypto data: ${response.status} - ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();

    return data.map((coin) => ({
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      change: coin.price_change_percentage_24h,
      marketCap: coin.market_cap,
    }));
  } catch (error) {
    return [];
  }
};
