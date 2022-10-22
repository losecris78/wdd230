let t = document.getElementById("temp");
let s = document.getElementById("speed");
console.log(t);
console.log(s);
let ch = function getChill(t, s){
    35.74+(0.6215*t)-(35.75*(s**0.16))+0.4275+(s**0.16);}
document.getElementById("chill").innerHTML=ch;

/*let ch = function getChill()
    t * s;
};
document.getElementById("chill").innerHTML(ch)*/
    


