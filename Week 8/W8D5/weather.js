const apiKey = 'YOUR_API_KEY'; // Replace with your API key

const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const weatherCardContainer = document.getElementById('weatherCardContainer');
const toggleUnitButton = document.getElementById('toggleUnitButton');
let unit = 'kelvin';

cityForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city !== '') {
    getCityWeather(city, unit);
    cityInput.value = '';
  }
});

toggleUnitButton.addEventListener('click', function() {
  if (unit === 'kelvin') {
    unit = 'imperial';
  } else {
    unit = 'kelvin';
  }
  const weatherCards = document.querySelectorAll('.weatherCard');
  weatherCards.forEach(weatherCard => {
    const temperature = weatherCard.querySelector('.temperature');
    const currentUnit = temperature.dataset.unit;
    const currentTemperature = temperature.dataset.temperature;
    if (currentUnit === 'kelvin') {
      temperature.textContent = `${convertTemperature(currentTemperature, currentUnit, unit)} ${getUnitSymbol(unit)}`;
      temperature.dataset.unit = unit;
    } else {
      temperature.textContent = `${convertTemperature(currentTemperature, currentUnit, unit)} ${getUnitSymbol(unit)}`;
      temperature.dataset.unit = unit;
    }
  });
});

function getCityWeather(city, unit) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherInfo = {
          name: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        };
        displayWeatherCard(weatherInfo, unit);
      } else {
        alert('Invalid city. Please try again.');
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function displayWeatherCard(weatherInfo, unit) {
  const weatherCard = document.createElement('div');
  weatherCard.className = 'weatherCard';

  const cityName = document.createElement('p');
  cityName.textContent = `${weatherInfo.name}, ${weatherInfo.country}`;

  const weather = document.createElement('p');
  weather.textContent = weatherInfo.weather;

  const weatherIcon = document.createElement('img');
  weatherIcon
