'use strict';

// let ele = document.getElementById("subTitle");

// setInterval(() => ele.style.visibility = (ele.style.visibility == 'hidden' ? 'visible' : 'hidden'), 1000);

let tbl = document.getElementById("links");
tbl.addEventListener("mouseover", function(event) {
    event.target.style.background = 'pink';
});

tbl.addEventListener("mouseout", (event) => event.target.style.background='');




function updateClock() {
    let dt = new Date();
    document.getElementById("hh").innerText = dt.getHours();
    document.getElementById("mm").innerText = dt.getMinutes();
    document.getElementById("ss").innerText = dt.getSeconds();
}

updateClock();
setInterval(updateClock, 1000);


let blob = new Blob(["Hi, how are you"], {type:'text/plain'});
document.getElementById("df").href = URL.createObjectURL(blob);