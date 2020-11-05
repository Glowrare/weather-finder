let searchLog = document.querySelector(".search-log");
let locationInput = document.querySelector(".location-input");
let locationName = document.querySelector(".location-name");
let locationCountry = document.querySelector(".location-country");
let weatherTranslation = document.querySelector(".weather-translation");
let statusReport = document.querySelector(".status-report");
let date = document.querySelector(".date");
let highTemp = document.querySelector(".high-temp");
let lowTemp = document.querySelector(".low-temp");
let weatherIcon = document.querySelector(".weather-icon");

searchLog.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      locationInput.value +
      "&units=metric&appid=40ba1ba94414906e9977d55fcd87adbf"
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];
      let highValue = data["main"]["temp_max"];
      let lowValue = data["main"]["temp_min"];
      let countryValue = data["sys"]["country"];
      let icon = data["weather"][0]["icon"];

      locationName.innerHTML = nameValue;
      statusReport.innerHTML = tempValue;
      weatherTranslation.innerHTML = descValue;
      highTemp.innerHTML = highValue;
      lowTemp.innerHTML = lowValue;
      locationCountry.innerHTML = ` , ${countryValue}`;
      weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`
      let now = new Date();
      let date = document.querySelector(".date");
      date.innerText = dateBuilder(now);
    })

    .catch((err) => alert("Oops! Wrong city name 😩😵"));
});

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
