let t = document.querySelector("#temp");
let s = document.querySelector("#speed");
function getChill(x,y){
    return 35.74 + (0.6215 * x) - (35.75 * (y ** 0.16)) + 0.4275 + (y ** 0.16);}
let ch = getChill(63,8);
  if (ch =="NaN") { 
  document.getElementById("chill").innerHTML= N/A;}
  else{
    document.getElementById("chill").innerHTML= Math.ceil(ch);

  };


// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');
const humidity = document.querySelector("#humid");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=curitiba&units=imperial&appid=87951c9b1071233f4e525b5a6cf8d68b';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `The weather today in Curitiba is:<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML=`Wind Speed <strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    humidity.innerHTML=`Humidity: ${weatherData.main.humidity.toFixed(0)}%`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  let upperDesc = desc.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = upperDesc;
    imageUrl.innerHTML=`${icon}`;
  }
  /*let ch = getChill(currentTemp,windSpeed);
  function getChill(x,y){
    return 35.74 + (0.6215 * x) - (35.75 * (y ** 0.16)) + 0.4275 + (y ** 0.16);}
  if (ch = NaN) { 
  document.getElementById("chill").innerText= N/A;}
  else{
    document.getElementById("#chill").innerText= Math.ceil(ch);

  };
  getChill();*/




