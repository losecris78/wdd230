let today = new Date();
document.querySelector("#year").innerHTML = today.getFullYear();
document.querySelector('#date').innerHTML = today;
document.getElementById("lastModified").innerHTML= today;
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
document.getElementById("hamburgerBtn").addEventListener("click",toggleMenu);
