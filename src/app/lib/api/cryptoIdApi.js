export async function getCryptoDetails(id) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${id}: ${response.statusText}`);
    }

    const data = await response.json();

    const details = {
      name: data.name,
      symbol: data.symbol,
      price: data.market_data.current_price.usd,
      marketCap: data.market_data.market_cap.usd,
      priceChange24h: data.market_data.price_change_percentage_24h,
      description: data.description.en,
    };

    return details;
  } catch (error) {
    console.error(error);
    return null;
  }
}
