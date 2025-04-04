export default function greeting() {
  const time = new Date().getHours();
  let greet = "Good Night 🌙";

  if (time >= 5 && time < 12) greet = "Good Morning ☀️";
  else if (time >= 12 && time < 18) greet = "Good Afternoon 🌤️";
  else if (time >= 18 && time < 21) greet = "Good Evening 🌆";

  return greet;
}
