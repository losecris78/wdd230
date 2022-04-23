/*let daynames =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday", 
    "Thursday",
    "Friday",
    "Saturday"
];
let months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];*/
let d = newDate();
//let dayName =daynames[d.getDay()];
//let monthName = months[d.getMonths()];
let year = d.getFullYear();
//let fulldate = `dayName, monthName $d.getDate(), $d.getFullYear() `;
document.getElementById("currentYear").textContent=year;

//document.getElementById("currentTime").textContent=fulldate;
let oLastModif = new Date(document.lastModified);
document.getElementById("currentTime").textContent=oLastModif;





/*
try{
    let options ={
        weekday: "short",
        day: "numeric",
        month:"short",
        year:"numeric"
    };
    document.getElementById("currentTime").textContent=newDate("en-US".options);
    catch (e){
        alert("Error with code on your browser does not support locale");
    }
}  */