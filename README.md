# Weather Dashboard

A weather dashboard that displays current weather information and a 5-day forecast for a specified location. The dashboard uses the OpenWeatherMap API to fetch weather data and supports fetching weather details of the user's current location by default using the Geolocation API.

## Features

- Fetch and display current weather data including temperature, description, humidity, and wind speed.
- Fetch and display a 5-day weather forecast.
- Automatically fetch and display weather data for the user's current location on page load.
- Search for weather data by entering a location name.
- Animated cloud background to enhance visual appeal.

## Demo

![image](https://github.com/sufyan14/Weather_Dashboard/assets/108999846/95fbad1c-a6bf-497c-afe0-be373ab5c9e9)

## Getting Started

### Prerequisites

- A modern web browser with JavaScript enabled.
- An OpenWeatherMap API key. You can get one by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```     
2. In your script.js file add your OpenWeatherMap API key:

API_KEY=your_openweathermap_api_key

Open index.html in your web browser.

## Usage

Open index.html in your web browser. The dashboard will automatically fetch and display the weather data for your current location.
To search for weather data for a specific location, enter the location name in the search box and click the "Search" button.

## Code Overview
HTML

The HTML file (index.html) contains the structure of the weather dashboard, including input fields for searching locations and placeholders for displaying weather data.
CSS

The CSS file (styles.css) contains styles for the weather dashboard, including the animated cloud background.
JavaScript

The JavaScript file (script.js) contains the logic for fetching and displaying weather data. Key functions include:

1. fetchWeatherData(location): Fetches weather data for the specified location.
2. updateCurrentWeather(data): Updates the current weather section with fetched data.
3. updateForecast(data): Updates the forecast section with fetched data.
4. getLocation(): Uses the Geolocation API to get the user's current location and fetch weather data for it.

## Example

Below is a basic example of how to use the weather dashboard:

Open the index.html file in your browser.
By default, it will display weather information for your current location.
To search for another location, enter the city name and click "Search".

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.
License

This project is licensed under the MIT License - see the LICENSE file for details.
## Acknowledgements

OpenWeatherMap for providing the weather data API.
