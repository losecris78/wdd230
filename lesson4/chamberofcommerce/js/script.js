let today = new Date();
let year= document.querySelector("#year").innerHTML = today.getFullYear();
let date= document.querySelector('#date').innerHTML = today;
let lastdate= document.getElementById("lastModified").innerHTML= today;
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
document.getElementById("hamburgerBtn").addEventListener("click",toggleMenu);
