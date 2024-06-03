document.getElementById('search-button').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeatherData(location);
    }
});

async function fetchWeatherData(location) {
    const apiKey = '6333819c45267b1c6f3f66dca87cc3b9';
    let weatherUrl;
    let forecastUrl;

    if (typeof location === 'string') {
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
    } else {
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`;
        forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`;
    }

    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        updateCurrentWeather(weatherData);
        updateForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateCurrentWeather(data) {
    document.getElementById('location-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function updateForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

    // Get the forecast for the next 5 days
    const forecasts = data.list.filter(forecast => {
        return new Date(forecast.dt_txt).getHours() === 12; // Filter for forecasts at 12:00 PM
    }).slice(0, 5); // Get the first 5 days

    forecasts.forEach(forecast => {
        const forecastElement = document.createElement('div');
        forecastElement.className = 'forecast-item';
        forecastElement.innerHTML = `
            <p>${new Date(forecast.dt_txt).toLocaleDateString()}</p>
            <p>${forecast.main.temp}°C</p>
            <p>${forecast.weather[0].description}</p>
        `;
        forecastContainer.appendChild(forecastElement);
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coords = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            fetchWeatherData(coords);
        }, error => {
            console.error('Error getting location:', error);
            // Fallback to a default location if geolocation fails
            fetchWeatherData('Karachi');
        });
    } else {
        fetchWeatherData('Karachi');
    }
}

// Fetch weather data for the current location on page load
getLocation();
