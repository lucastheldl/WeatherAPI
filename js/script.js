//variaveis e seleção de elementos
const apiKey = "b823c76f86fc4ffccc279bf5f23db6bc";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const templement = document.querySelector("#temperature span");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const descriptionElement = document.querySelector("#description");
const weatherIcoElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");

//funcoes
const getWeatherData = async (city) => {
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherUrl);
  const data = await res.json();

  //console.log(data);
  return data;
};
const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  templement.innerText = parseInt(data.main.temp);
  umidityElement.innerText = `${data.main.humidity} %`;
  windElement.innerText = `${data.wind.speed} km/h`;
  descriptionElement.innerText = data.weather[0].description;
  countryElement.src = `https://countryflagsapi.com/png/${data.sys.country}`;
  weatherIcoElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
};

//eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;
  showWeatherData(city);
});
