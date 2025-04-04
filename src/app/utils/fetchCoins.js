const DEFAULT_IDS = ["bitcoin", "ethereum", "binancecoin"];

export const fetchCoins = async (ids = DEFAULT_IDS) => {
  const BASE_URL = process.env.NEXT_PUBLIC_COIN_API;

  if (!BASE_URL || ids.length === 0) {
    return [];
  }

  try {
    const url = `${BASE_URL}?vs_currency=usd&ids=${ids.join(",")}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `Error fetching crypto data: ${response.status} - ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();

    return data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      change: coin.price_change_percentage_24h,
      marketCap: coin.market_cap,
    }));
  } catch (error) {
    console.error("API error while fetching coins:", error);
    return [];
  }
};
