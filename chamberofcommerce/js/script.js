let today = new Date();
let year= document.querySelector("#year").innerHTML = today.getFullYear();

const fullDate = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(today);
let date= document.querySelector('#date').innerHTML = fullDate;
let lastdate= document.getElementById("lastModified").innerHTML= today;
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
document.getElementById("#hamburgerBtn").addEventListener("click",toggleMenu);
