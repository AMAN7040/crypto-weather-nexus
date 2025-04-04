export async function getCryptoDetails(id) {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data = await res.json();

    return {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      current_price: data.market_data.current_price.usd,
      description: data.description.en,
    };
  } catch (error) {
    console.error("Error fetching crypto details:", error);
    return null;
  }
}
