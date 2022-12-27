const getWeatherData = (city) => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c417ba03cdmsh5a3b10de33b70f6p1d02b8jsn2f653c228adf',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };   
    
      return fetch (`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`  , options)
            .then(response => response.json())
          .then(data => data)
          .catch(err => console.error(err));
  
      }
  
  
  
  const searchCity = async () => {
      const city = document.getElementById('city-input').value;
      const data = await getWeatherData(city)
      showWeatherData(data)
      }
  
  
  
  const showWeatherData = (weatherData) => {
  
   console.log(weatherData)
    
        document.getElementById("city-name").innerText = weatherData.location.name
        document.getElementById("weather-type").innerText = weatherData.current.condition.text
        document.getElementById("temp-c").innerText = weatherData.current.temp_c
        document.getElementById("temp-f").innerText = weatherData.current.temp_f
        document.getElementById("local-time").innerText = weatherData.location.localtime
        document.getElementById("region").innerText = weatherData.location.region
        document.getElementById("country").innerText = weatherData.location.tz_id
  
      }
  