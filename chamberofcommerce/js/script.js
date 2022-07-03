let today = new Date();
let year= document.querySelector("#year").innerHTML = today.getFullYear();

const fullDate = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(today);
let date= document.querySelector('#date').innerHTML = fullDate;
let lastdate= document.getElementById("lastModified").innerHTML= today;
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
document.getElementById("#hamburgerBtn").addEventListener("click",toggleMenu);



/*let today = new Date();
document.getElementById('today').textContent = today;
let year = today.getFullYear();
document.getElementById('year').innerHTML= year;*/

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=fairbanks&units=imperial&appid=87951c9b1071233f4e525b5a6cf8d68b';
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function apiFetch(url) {
    try {
      const response = await  fetch(url);
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
  
  apiFetch(url);
  function displayResults(weatherData) {
    currentTemp.innerHTML=weatherData.main.temp.toFixed(1)};

  const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  captionDesc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', captionDesc);
  captionDesc.innerHTML=captionDesc;
  imageUrl.innerHTML=`${icon}`;
  
