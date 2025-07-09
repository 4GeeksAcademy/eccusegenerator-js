// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let who = ["my dog","my cat","my car","my relative" ];
let action = ["ate","drove","filed", "fixed my tv"];
let what = ["my sandwhich","my car","my taxes","my tv"];
let when = ["last week","last year","yesterday","3 days ago"];

function randomfrom(array)
{
    return array[Math.floor(Math.random() * array.length)];
}


function genexcuse(){
    const excuse = `${randomfrom(who)} ${randomfrom(action)} ${randomfrom(what)} ${randomfrom(when)}`
    document.getElementById("excuse").textContent = excuse;
}

genexcuse()