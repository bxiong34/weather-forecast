var apiKey = "8442b51bde1d703e3c6b958d0e487f4d";
var city = "";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
var searchArea = document.querySelector(".search input");
var searchBtn = document.querySelector(".search btn");
var today = dayjs();
$('.day').text(today.format("[Day:] dddd, MMMM D, YYYY"));

var formSubmitHandler = function (event) {
  event.preventDefault();
};

// function to get current day
function updateDay() {
  const dateElement = $('.day');
  const currentDate = dayjs().format("ddd MMMM D, YYYY");
  dateElement.text(currentDate);
  }

//fetch weather data for city
async function fetchWeather(city) {
  const Response = await fetch(apiUrl + city +"&appid=" + apiKey);
  var data = await Response.json(); 
  

  console.log(data);
  //gets data from api to append to ids on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature").innerHTML = "Temperature: " + Math.round(data.list[0].main.temp) + "°F";
  document.querySelector(".description").innerHTML = "Description: " + data.list[0].weather[0].description;
  document.querySelector(".wind").innerHTML = "Wind: " + Math.round(data.list[0].wind.speed) + "Mph";
  document.querySelector(".humidity").innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
}

$("#search-btn").on("click", function () {
//if no city is entered, an alert pops up
if (searchArea.value == "") {
  alert("Please enter city name.");
  } else {
  // fetches weather for whatever city that was entered in
  fetchWeather(searchArea.value);
  }
  })

updateDay();


// clear, rain, clouds

  

