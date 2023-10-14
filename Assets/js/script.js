var APIKey = "8442b51bde1d703e3c6b958d0e487f4d";
var city;
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#cityname');

var formSubmitHandler = function (event) {
  event.preventDefault();
};

function getCityName (apiUrl) {
fetch(apiUrl).then(function(response){
    console.log(response);
  })
}

getCityName(apiUrl);


$("#search").on("click", function () {
  var cityname = cityInputEl.value;

  if (cityname) {
    getCityName(cityname);

    cityInputEl.textContent = '';
  } else {
    alert('Please enter a city name.');
  }
});
  

