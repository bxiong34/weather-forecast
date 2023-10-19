var apiKey = "8442b51bde1d703e3c6b958d0e487f4d";
var city = "";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
var searchInput = document.querySelector(".search-body input");
var searchBtn = document.querySelector(".search btn");

//days of weather
var today = dayjs();
  $(".date").text(today.format("ddd MMMM D, YYYY"));
var day1 = today.add(1, 'day');
  $(".date1").text(day1.format("ddd MMMM D, YYYY"));
var day2 = today.add(2, 'day');
  $(".date2").text(day2.format("ddd MMMM D, YYYY"));
var day3 = today.add(3, 'day');
  $(".date3").text(day3.format("ddd MMMM D, YYYY"));
var day4 = today.add(4, 'day');
  $(".date4").text(day4.format("ddd MMMM D, YYYY"));
var day5 = today.add(5, 'day');
  $(".date5").text(day5.format("ddd MMMM D, YYYY"));

var formSubmitHandler = function (event) {
  event.preventDefault();
};

// function to get current day
function updateDay() {
  var dateElement = $('.date');
  var currentDate = dayjs().format("ddd MMMM D, YYYY");
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

  //gets data from api to append to 1st day on browser
  document.querySelector(".city1").innerHTML = data.city.name; 
  document.querySelector(".temperature1").innerHTML = "Temperature: " + Math.round(data.list[8].main.temp) + "°F";
  document.querySelector(".description1").innerHTML = "Description: " + data.list[8].weather[0].description;
  document.querySelector(".wind1").innerHTML = "Wind: " + Math.round(data.list[1].wind.speed) + "Mph";
  document.querySelector(".humidity1").innerHTML = "Humidity: " + data.list[8].main.humidity + "%";

  //gets data from api to append to 2nd day on browser
  document.querySelector(".city2").innerHTML = data.city.name; 
  document.querySelector(".temperature2").innerHTML = "Temperature: " + Math.round(data.list[16].main.temp) + "°F";
  document.querySelector(".description2").innerHTML = "Description: " + data.list[16].weather[0].description;
  document.querySelector(".wind2").innerHTML = "Wind: " + Math.round(data.list[16].wind.speed) + "Mph";
  document.querySelector(".humidity2").innerHTML = "Humidity: " + data.list[16].main.humidity + "%";

  //gets data from api to append to 3rd day on browser
  document.querySelector(".city3").innerHTML = data.city.name; 
  document.querySelector(".temperature3").innerHTML = "Temperature: " + Math.round(data.list[24].main.temp) + "°F";
  document.querySelector(".description3").innerHTML = "Description: " + data.list[24].weather[0].description;
  document.querySelector(".wind3").innerHTML = "Wind: " + Math.round(data.list[24].wind.speed) + "Mph";
  document.querySelector(".humidity3").innerHTML = "Humidity: " + data.list[24].main.humidity + "%";

  //gets data from api to append to 4th day on browser
  document.querySelector(".city4").innerHTML = data.city.name; 
  document.querySelector(".temperature4").innerHTML = "Temperature: " + Math.round(data.list[32].main.temp) + "°F";
  document.querySelector(".description4").innerHTML = "Description: " + data.list[32].weather[0].description;
  document.querySelector(".wind4").innerHTML = "Wind: " + Math.round(data.list[32].wind.speed) + "Mph";
  document.querySelector(".humidity4").innerHTML = "Humidity: " + data.list[32].main.humidity + "%";

  //gets data from api to append to 5th day on browser
  document.querySelector(".city5").innerHTML = data.city.name; 
  document.querySelector(".temperature5").innerHTML = "Temperature: " + Math.round(data.list[39].main.temp) + "°F";
  document.querySelector(".description5").innerHTML = "Description: " + data.list[39].weather[0].description;
  document.querySelector(".wind5").innerHTML = "Wind: " + Math.round(data.list[39].wind.speed) + "Mph";
  document.querySelector(".humidity5").innerHTML = "Humidity: " + data.list[39].main.humidity + "%";


//change weather icon depending on 
var weatherIcon = document.querySelector(".weathericon");
var weatherIcon1 = document.querySelector(".weathericon1");
var weatherIcon2 = document.querySelector(".weathericon2");
var weatherIcon3 = document.querySelector(".weathericon3");
var weatherIcon4 = document.querySelector(".weathericon4");
var weatherIcon5 = document.querySelector(".weathericon5");
var clear = "./assets/images/clear.png";
var clouds = "./assets/images/clouds.png";
var rain = "./assets/images/rain.png";
var thunderstorm = "./assets/images/thunderstorm.png";
var drizzle = "./assets/images/drizzle.png";
var haze = "./assets/images/drizzle.png";
var snow = "./assets/images/snow.png";

//change weather icon for current day
if (data.list[0].weather[0].main == "Clear"){
    weatherIcon.setAttribute("src",clear);
  } 
  else if (data.list[0].weather[0].main == "Clouds"){
    weatherIcon.setAttribute("src",clouds);
  }
  else if (data.list[0].weather[0].main == "Rain"){
    weatherIcon.setAttribute("src",rain);
  }
  else if (data.list[0].weather[0].main == "Thunderstorm"){
    weatherIcon.setAttribute("src",thunderstorm);
  }
  else if (data.list[0].weather[0].main == "Drizzle"){
    weatherIcon.setAttribute("src",drizzle);
  }
  else if (data.list[0].weather[0].main == "Mist" || "Haze" || "Fog"){
    weatherIcon.setAttribute("src",haze);
  }
  else if (data.list[0].weather[0].main == "Snow"){
    weatherIcon.setAttribute("src",snow);
  }

//change weather icon for day 1
if (data.list[8].weather[0].main == "Clear"){
  weatherIcon1.setAttribute("src",clear);
} 
else if (data.list[8].weather[0].main == "Clouds"){
  weatherIcon1.setAttribute("src",clouds);
}
else if (data.list[8].weather[0].main == "Rain"){
  weatherIcon1.setAttribute("src",rain);
}
else if (data.list[8].weather[0].main == "Thunderstorm"){
  weatherIcon1.setAttribute("src",thunderstorm);
}
else if (data.list[8].weather[0].main == "Drizzle"){
  weatherIcon1.setAttribute("src",drizzle);
}
else if (data.list[8].weather[0].main == "Mist" || "Haze" || "Fog"){
  weatherIcon1.setAttribute("src",haze);
}
else if (data.list[8].weather[0].main == "Snow"){
  weatherIcon1.setAttribute("src",snow);
}

//change weather icon for day 2
if (data.list[16].weather[0].main == "Clear"){
  weatherIcon2.setAttribute("src",clear);
} 
else if (data.list[16].weather[0].main == "Clouds"){
  weatherIcon2.setAttribute("src",clouds);
}
else if (data.list[16].weather[0].main == "Rain"){
  weatherIcon2.setAttribute("src",rain);
}
else if (data.list[16].weather[0].main == "Thunderstorm"){
  weatherIcon2.setAttribute("src",thunderstorm);
}
else if (data.list[16].weather[0].main == "Drizzle"){
  weatherIcon2.setAttribute("src",drizzle);
}
else if (data.list[16].weather[0].main == "Mist" || "Haze" || "Fog"){
  weatherIcon2.setAttribute("src",haze);
}
else if (data.list[16].weather[0].main == "Snow"){
  weatherIcon2.setAttribute("src",snow);
}

//change weather icon for day 3
if (data.list[24].weather[0].main == "Clear"){
  weatherIcon3.setAttribute("src",clear);
} 
else if (data.list[24].weather[0].main == "Clouds"){
  weatherIcon3.setAttribute("src",clouds);
}
else if (data.list[24].weather[0].main == "Rain"){
  weatherIcon3.setAttribute("src",rain);
}
else if (data.list[24].weather[0].main == "Thunderstorm"){
  weatherIcon3.setAttribute("src",thunderstorm);
}
else if (data.list[24].weather[0].main == "Drizzle"){
  weatherIcon3.setAttribute("src",drizzle);
}
else if (data.list[24].weather[0].main == "Mist" || "Haze" || "Fog"){
  weatherIcon3.setAttribute("src",haze);
}
else if (data.list[24].weather[0].main == "Snow"){
  weatherIcon3.setAttribute("src",snow);
}

//change weather icon for day 4
if (data.list[32].weather[0].main == "Clear"){
  weatherIcon4.setAttribute("src",clear);
} 
else if (data.list[32].weather[0].main == "Clouds"){
  weatherIcon4.setAttribute("src",clouds);
}
else if (data.list[32].weather[0].main == "Rain"){
  weatherIcon4.setAttribute("src",rain);
}
else if (data.list[32].weather[0].main == "Thunderstorm"){
  weatherIcon4.setAttribute("src",thunderstorm);
}
else if (data.list[32].weather[0].main == "Drizzle"){
  weatherIcon4.setAttribute("src",drizzle);
}
else if (data.list[32].weather[0].main == "Mist" || "Haze" || "Fog"){
  weatherIcon4.setAttribute("src",haze);
}
else if (data.list[32].weather[0].main == "Snow"){
  weatherIcon4.setAttribute("src",snow);
}

//change weather icon for day 5
if (data.list[39].weather[0].main == "Clear"){
  weatherIcon5.setAttribute("src",clear);
} 
else if (data.list[39].weather[0].main == "Clouds"){
  weatherIcon5.setAttribute("src",clouds);
}
else if (data.list[39].weather[0].main == "Rain"){
  weatherIcon5.setAttribute("src",rain);
}
else if (data.list[39].weather[0].main == "Thunderstorm"){
  weatherIcon5.setAttribute("src",thunderstorm);
}
else if (data.list[39].weather[0].main == "Drizzle"){
  weatherIcon5.setAttribute("src",drizzle);
}
else if (data.list[39].weather[0].main == "Mist" || "Haze" || "Fog"){
  weatherIcon5.setAttribute("src",haze);
}
else if (data.list[39].weather[0].main == "Snow"){
  weatherIcon5.setAttribute("src",snow);
}

}

$("#search-btn").on("click", function () {
//if no city is entered, an alert pops up
if (searchInput.value == "") {
  alert("Please enter city name.");
  } else {
  // fetches weather for whatever city that was entered in
  fetchWeather(searchInput.value);
  }
  
  var name = $("#cityname").val();
  localStorage.setItem("cityname", name);

  localStorage.getItem("cityname", name);
    $("#history").append(name.text);
  // })
  })

// function saveCityName () {
//   var cityName = document.querySelector("#form-input").value;
//   localStorage.setItem("cityname", cityName);
//   localStorage.getItem("cityname");
// }




updateDay();
  

