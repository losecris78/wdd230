let date = new Date;
let year = date.getFullYear();
let dateFormat = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(date);
let day = date.getDay()
console.log(day);
document.querySelector("#updated").textContent = `Updated: ${document.lastModified}`;

document.querySelector("#year1").innerText = year;
//document.querySelector("#update").innerHTML= date;
document.querySelector("#todayis").innerHTML=dateFormat;
function toggleMenu(){
	document.getElementById("pNav").classList.toggle("open");
	document.getElementById("hamb_button").classList.toggle("open");
}
let bread= document.getElementById("hamb_button");
bread.onclick= toggleMenu;


if (day === 1) {document.getElementById("event").innerHTML ="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."};
if (day === 2) {document.getElementById("event").innerHTML ="🤝🏼 Come join us for the chamber meet and greet tomorrow,Wednesday at 7:00 p.m"};
/*if (day === 6) {document.getElementById("event").innerHTML ="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."};*/
/*const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;*/