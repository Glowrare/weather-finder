var searchLog = document.querySelector(".search-log");
var locationInput = document.querySelector(".location-input");
var locationName = document.querySelector(".location-name");
var locationCountry = document.querySelector(".location-country");
var weatherTranslation = document.querySelector(".weather-translation");
var statusReport = document.querySelector(".status-report");
var date = document.querySelector(".date");
var highTemp = document.querySelector(".high-temp");
var lowTemp = document.querySelector(".low-temp");

searchLog.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      locationInput.value +
      "&units=metric&appid=40ba1ba94414906e9977d55fcd87adbf"
  )
    .then((response) => response.json())
    .then((data) => {
        var nameValue = data['name'];
        var tempValue = data ['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var highValue = data['main']['temp_max'];
        var lowValue = data['main']['temp_min'];
        var countryValue = data['sys']['country'];

        locationName.innerHTML = nameValue;
        statusReport.innerHTML = tempValue;
        weatherTranslation.innerHTML = descValue;
        highTemp.innerHTML = highValue;
        lowTemp.innerHTML = lowValue;
        locationCountry.innerHTML = countryValue;

    })

    .catch((err) => alert("Wrong city name!"));
});
