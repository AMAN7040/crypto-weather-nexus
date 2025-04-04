const cities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Berlin",
  "Sydney",
  "Toronto",
  "Moscow",
  "Dubai",
  "Los Angeles",
];

export const getCities = () => {
  const shuffled = [...cities].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};
