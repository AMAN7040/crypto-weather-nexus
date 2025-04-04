export async function getCryptos() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();

    const simplifiedData = data.slice(0, 20).map((crypto) => ({
      id: crypto.id,
      symbol: crypto.symbol,
      name: crypto.name,
    }));

    return simplifiedData;
  } catch (error) {
    console.error("Error fetching cryptos:", error);
    return [];
  }
}
