const apiKey = "8442b51bde1d703e3c6b958d0e487f4d";
  // var city = "";
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=madison";

  async function fetchWeather() {
    const response = await fetch(apiUrl + "appid=${apiKey}");
    var data = await response.json();
    console.log(data);
  }
