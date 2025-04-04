// utils/fetchNews.js
export const fetchNews = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const URL = "https://newsdata.io/api/1/news";

  if (!API_KEY) {
    console.error("API key missing.");
    return [];
  }

  try {
    const response = await fetch(`${URL}?apikey=${API_KEY}`);

    if (!response.ok) {
      throw new Error("Failed to fetch news data.");
    }

    const data = await response.json();

    return data.results.slice(0, 2).map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
    }));
  } catch (error) {
    return [];
  }
};
