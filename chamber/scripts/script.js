//Date variables to get the las update and the actual date//
let date = new Date;
let year = date.getFullYear();
let dateFormat = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(date);
let day = date.getDay()
/*console.log(day);*/

//Last modified function//
document.querySelector("#updated").textContent = `Updated: ${document.lastModified}`;
//Year display for copyright//

document.querySelector("#year1").innerText = year;

//Date displayed on header//
document.querySelector("#todayis").innerHTML=dateFormat;

//Toggle Menu for Hamburguer button//
function toggleMenu(){
	document.getElementById("pNav").classList.toggle("open");
	document.getElementById("hamb_button").classList.toggle("open");
}
let bread= document.getElementById("hamb_button");
bread.onclick= toggleMenu;

//Announcement that will appear only on Monday and Tuesday//
if (day === 1) {document.getElementById("announcement").innerHTML ="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."};
if (day === 2) {document.getElementById("announcement").innerHTML ="🤝🏼 Come join us for the chamber meet and greet tomorrow,Wednesday at 7:00 p.m"};
/*if (day === 6) {document.getElementById("announcement").innerHTML ="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."};*/

// Local Storage coding

const todayDisplay = (document.querySelector(".visitor"));
const visitsDisplay = (document.querySelector("#numberVisits"));
let differenceInDays = (document.querySelector("#timeLapse"));
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisitDate = Number(window.localStorage.getItem("visited"))
// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
function difference(a,b){
	return a - b;
}
differenceInDays = round.difference(todayDisplay,lastVisitDate)
// increment the number of visits.
numVisits++;
lastVisitDate++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visited", Date.now());
localStorage.setItem("timelapse", lastVisitTime);

// show todays date.
todayDisplay.textContent = Date.now();