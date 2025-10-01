const API_KEY = '5c0ae61bfff06cf694d4bc094c55bab0';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

const weatherIcons = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Smoke': '🌫️',
    'Haze': '🌫️',
    'Dust': '🌫️',
    'Fog': '🌫️',
    'Sand': '🌫️',
    'Ash': '🌫️',
    'Squall': '💨',
    'Tornado': '🌪️'
};

function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
    weatherInfo.style.display = 'none';
    setTimeout(() => {
        error.style.display = 'none';
    }, 5000);
}

function showLoading() {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';
    error.style.display = 'none';
}

function hideLoading() {
    loading.style.display = 'none';
}

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

async function getWeather(city) {
    if (!city.trim()) {
        showError('Please enter a city name');
        return;
    }

    showLoading();

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        console.log(response);

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Invalid API key. Please check your API key in the code.');
            } else if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else {
                throw new Error(`Error ${response.status}: Unable to fetch weather data.`);
            }
        }

        const data = await response.json();
        displayWeather(data);
    } catch (err) {
        hideLoading();
        console.error('Weather fetch error:', err);
        showError(err.message);
    }
}

function displayWeather(data) {
    hideLoading();

    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

    const weatherMain = data.weather[0].main;
    document.getElementById('weatherIcon').textContent = weatherIcons[weatherMain] || '🌤️';

    updateDate();
    weatherInfo.style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    getWeather(cityInput.value);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(cityInput.value);
    }
});


