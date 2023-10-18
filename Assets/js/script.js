var apiKey = "8442b51bde1d703e3c6b958d0e487f4d";
var city = "";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
var searchInput = document.querySelector(".search input");
var searchBtn = document.querySelector(".search btn");
var weatherImg = document.getElementById(".weather-img")

var today = dayjs();
$('.date').text(today.format("ddd, MMMM D, YYYY"));

var formSubmitHandler = function (event) {
  event.preventDefault();
};

// function to get current day
function updateDay() {
  const dateElement = $('.date');
  const currentDate = dayjs().format("ddd MMMM D, YYYY");
  dateElement.text(currentDate);
  }

//fetch weather data for city
async function fetchWeather(city) {
  const Response = await fetch(apiUrl + city +"&appid=" + apiKey);
  var data = await Response.json(); 
  

  console.log(data);
  //gets data from api to append to current day on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature").innerHTML = "Temperature: " + Math.round(data.list[0].main.temp) + "°F";
  document.querySelector(".description").innerHTML = "Description: " + data.list[0].weather[0].description;
  document.querySelector(".wind").innerHTML = "Wind: " + Math.round(data.list[0].wind.speed) + "Mph";
  document.querySelector(".humidity").innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
  
  // if (data.list[0].weather[0].main == "Clear"){
  //   weatherImg.scr = "htps://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
  // } 
  //   else if (data.weather[0].main == "Clouds"){
  //     weatherImg = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
  //     }


  //gets data from api to append to 1st day on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature1").innerHTML = "Temperature: " + Math.round(data.list[2].main.temp) + "°F";
  document.querySelector(".description1").innerHTML = "Description: " + data.list[1].weather[0].description;
  document.querySelector(".wind1").innerHTML = "Wind: " + Math.round(data.list[1].wind.speed) + "Mph";
  document.querySelector(".humidity1").innerHTML = "Humidity: " + data.list[1].main.humidity + "%";

  //gets data from api to append to 2nd day on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature2").innerHTML = "Temperature: " + Math.round(data.list[2].main.temp) + "°F";
  document.querySelector(".description2").innerHTML = "Description: " + data.list[2].weather[0].description;
  document.querySelector(".wind2").innerHTML = "Wind: " + Math.round(data.list[2].wind.speed) + "Mph";
  document.querySelector(".humidity2").innerHTML = "Humidity: " + data.list[2].main.humidity + "%";

  //gets data from api to append to 3rd day on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature3").innerHTML = "Temperature: " + Math.round(data.list[1].main.temp) + "°F";
  document.querySelector(".description3").innerHTML = "Description: " + data.list[3].weather[0].description;
  document.querySelector(".wind3").innerHTML = "Wind: " + Math.round(data.list[3].wind.speed) + "Mph";
  document.querySelector(".humidity3").innerHTML = "Humidity: " + data.list[3].main.humidity + "%";

  //gets data from api to append to 4th day on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature4").innerHTML = "Temperature: " + Math.round(data.list[1].main.temp) + "°F";
  document.querySelector(".description4").innerHTML = "Description: " + data.list[4].weather[0].description;
  document.querySelector(".wind4").innerHTML = "Wind: " + Math.round(data.list[4].wind.speed) + "Mph";
  document.querySelector(".humidity4").innerHTML = "Humidity: " + data.list[4].main.humidity + "%";

  //gets data from api to append to 5th day on browser
  document.querySelector(".city").innerHTML = data.city.name; 
  document.querySelector(".temperature5").innerHTML = "Temperature: " + Math.round(data.list[1].main.temp) + "°F";
  document.querySelector(".description5").innerHTML = "Description: " + data.list[5].weather[0].description;
  document.querySelector(".wind5").innerHTML = "Wind: " + Math.round(data.list[5].wind.speed) + "Mph";
  document.querySelector(".humidity5").innerHTML = "Humidity: " + data.list[5].main.humidity + "%";
}

$("#search-btn").on("click", function () {
//if no city is entered, an alert pops up
if (searchInput.value == "") {
  alert("Please enter city name.");
  } else {
  // fetches weather for whatever city that was entered in
  fetchWeather(searchInput.value);
  }
  })

updateDay();


// clear, rain, clouds

  

