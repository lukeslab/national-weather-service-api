fetch("https://api.weather.gov/stations?state=NY")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    displayWeatherStations(data)
  })

function displayWeatherStations(data){
  const stationsList = document.querySelector('.stations-list');
  stationsList.innerHTML = "";
  data.features.forEach(station => {
    stationsList.innerHTML += `<li>${station.properties.name}</li>`
  })
}
