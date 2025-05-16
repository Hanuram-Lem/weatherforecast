async function fetchWeatherData() {
    let cityName = document.getElementsByClassName('inputCity')[0].value;
    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=357119c97742c0695b2dea95af94c803&units=metric`);
    let formattedWeatherData = await weatherData.json();
    document.querySelector('.cityName').innerHTML = formattedWeatherData.name;
    document.querySelector('.temp').innerHTML = Math.round(formattedWeatherData.main.temp) + '°C';
    document.querySelector('.skyDesc').innerHTML = formattedWeatherData.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.querySelector('.humidity').innerHTML = formattedWeatherData.main.humidity + '%';
    document.querySelector('.pressure').innerHTML = formattedWeatherData.main.pressure + ' Pa';
    document.querySelector('.feelsLike').innerHTML = Math.round(formattedWeatherData.main.feels_like) + '°C';
    document.querySelector('.visibility').innerHTML = formattedWeatherData.visibility / 100000 + ' km';
    document.querySelector('.mainDate').innerHTML = new Date(formattedWeatherData.dt * 1000).toLocaleDateString('en-US', { day: '2-digit' , month: 'short' , year: 'numeric' });
    document.querySelector('.mainTime').innerHTML = new Date(formattedWeatherData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

async function nextFiveDaysInfo() {
    let cityName = document.getElementsByClassName('inputCity')[0].value;
    let nextFiveDaysInfo = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=357119c97742c0695b2dea95af94c803&units=metric`);
    let formattedNextFiveDaysInfo = await nextFiveDaysInfo.json();
    document.querySelector('.dayOneTemp').innerHTML = Math.round(formattedNextFiveDaysInfo.list[0].main.temp) + '°C';
    document.querySelector('.dayTwoTemp').innerHTML = Math.round(formattedNextFiveDaysInfo.list[8].main.temp) + '°C';
    document.querySelector('.dayThreeTemp').innerHTML = Math.round(formattedNextFiveDaysInfo.list[16].main.temp) + '°C';
    document.querySelector('.dayFourTemp').innerHTML = Math.round(formattedNextFiveDaysInfo.list[24].main.temp) + '°C';
    document.querySelector('.dayFiveTemp').innerHTML = Math.round(formattedNextFiveDaysInfo.list[32].main.temp) + '°C';
    document.querySelector('.dayOneDay').innerHTML = new Date(formattedNextFiveDaysInfo.list[0].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector('.dayTwoDay').innerHTML = new Date(formattedNextFiveDaysInfo.list[8].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector('.dayThreeDay').innerHTML = new Date(formattedNextFiveDaysInfo.list[16].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector('.dayFourDay').innerHTML = new Date(formattedNextFiveDaysInfo.list[24].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector('.dayFiveDay').innerHTML = new Date(formattedNextFiveDaysInfo.list[32].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector('.dayOneDate').innerHTML = new Date(formattedNextFiveDaysInfo.list[0].dt * 1000).toLocaleDateString('en-US', { day: '2-digit' , month: 'short' });
    document.querySelector('.dayTwoDate').innerHTML = new Date(formattedNextFiveDaysInfo.list[8].dt * 1000).toLocaleDateString('en-US', { day: '2-digit' , month: 'short' });
    document.querySelector('.dayThreeDate').innerHTML = new Date(formattedNextFiveDaysInfo.list[16].dt * 1000).toLocaleDateString('en-US', { day: '2-digit' , month: 'short' });
    document.querySelector('.dayFourDate').innerHTML = new Date(formattedNextFiveDaysInfo.list[24].dt * 1000).toLocaleDateString('en-US', { day: '2-digit' , month: 'short' });
    document.querySelector('.dayFiveDate').innerHTML = new Date(formattedNextFiveDaysInfo.list[32].dt * 1000).toLocaleDateString('en-US', { day: '2-digit' , month: 'short' });
}

async function airPollution() {
    let cityName = document.getElementsByClassName('inputCity')[0].value;
    let dataLatLon = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=357119c97742c0695b2dea95af94c803&units=metric`);
    let formattedDataLatLon = await dataLatLon.json();
    let lat = formattedDataLatLon.coord.lat;
    let lon = formattedDataLatLon.coord.lon;
    let pollutionInfo = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=357119c97742c0695b2dea95af94c803`);
    let formattedPollutionInfo = await pollutionInfo.json();
    document.querySelector('.co').innerHTML = formattedPollutionInfo.list[0].components.co + ' ppm';
    document.querySelector('.so2').innerHTML = formattedPollutionInfo.list[0].components.so2 + ' ppm';
    document.querySelector('.o3').innerHTML = formattedPollutionInfo.list[0].components.o3 + ' ppm';
    document.querySelector('.no2').innerHTML = formattedPollutionInfo.list[0].components.no2 + ' ppm';
}

async function sunInfo() {
    let cityName = document.getElementsByClassName('inputCity')[0].value;
    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=357119c97742c0695b2dea95af94c803&units=metric`);
    let formattedWeatherData = await weatherData.json();
    document.querySelector('.sunrise').innerHTML = new Date(formattedWeatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.querySelector('.sunset').innerHTML = new Date(formattedWeatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

async function threeHourInfo() {
    let cityName = document.getElementsByClassName('inputCity')[0].value;
    let dataLatLon = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=357119c97742c0695b2dea95af94c803&units=metric`);
    let formattedDataLatLon = await dataLatLon.json();
    let lat = formattedDataLatLon.coord.lat;
    let lon = formattedDataLatLon.coord.lon;
    let threeHourInfo = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=357119c97742c0695b2dea95af94c803&units=metric`);
    let formattedThreeHourInfo = await threeHourInfo.json();
    document.querySelector('.rightBottom1Info').innerHTML = Math.round(formattedThreeHourInfo.list[0].main.temp) + '°C';
    document.querySelector('.rightBottom2Info').innerHTML = Math.round(formattedThreeHourInfo.list[8].main.temp) + '°C';
    document.querySelector('.rightBottom3Info').innerHTML = Math.round(formattedThreeHourInfo.list[16].main.temp) + '°C';
    document.querySelector('.rightBottom4Info').innerHTML = Math.round(formattedThreeHourInfo.list[24].main.temp) + '°C';
    document.querySelector('.rightBottom5Info').innerHTML = Math.round(formattedThreeHourInfo.list[32].main.temp) + '°C';
    document.querySelector('.rightBottom6Info').innerHTML = Math.round(formattedThreeHourInfo.list[32].main.temp) + '°C';
}

addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            fetchWeatherData();
            nextFiveDaysInfo();
            airPollution();
            sunInfo();
            threeHourInfo();
        }
    });