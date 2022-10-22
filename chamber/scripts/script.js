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
/*const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.*/
/*let t =document.getElementById("temp");
let s = document.getElementById("speed");
let ch = function getChill(){(t*s)};
document.getElementById("chill").innerHTML=ch;*/
