let today = new Date();
document.querySelector("#year").innerHTML = today.getFullYear();
document.querySelector('#date').innerHTML = today;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
const x =document.getElementById("hamburgerBtn")
x.onclick = toggleMenu