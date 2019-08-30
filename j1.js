'use strict';


function updateClock() {
    let dt = new Date();
    document.getElementById("hh").innerText = dt.getHours() < 10 ? '0' + dt.getHours(): dt.getHours();
    document.getElementById("mm").innerText = dt.getMinutes() < 10 ? '0' + dt.getMinutes(): dt.getMinutes();
    document.getElementById("ss").innerText = dt.getSeconds() < 10 ? '0' + dt.getSeconds(): dt.getSeconds();
}

updateClock();
setInterval(updateClock, 1000);


let blob = new Blob(["Hi, how are you"], {type:'text/plain'});
document.getElementById("df").href = URL.createObjectURL(blob);