let t = document.querySelector("#temp");
let s = document.querySelector("#speed");
function getChill(x,y){
    return 35.74 + (0.6215 * x) - (35.75 * (y ** 0.16)) + 0.4275 + (y ** 0.16);}
let ch = getChill(40,5);
document.getElementById("chill").innerHTML= Math.ceil(ch);




