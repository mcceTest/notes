'use strict';


function updateClock() {
    let dt = new Date();
    document.getElementById("hh").innerText = dt.getHours() < 10 ? '0' + dt.getHours(): dt.getHours();
    document.getElementById("mm").innerText = dt.getMinutes() < 10 ? '0' + dt.getMinutes(): dt.getMinutes();
    document.getElementById("ss").innerText = dt.getSeconds() < 10 ? '0' + dt.getSeconds(): dt.getSeconds();
}

updateClock();
setInterval(updateClock, 1000);


let images = ["12-fd.jpg", "12-fm.jpg"]
let $sideImg = $("aside img"), idx = 0, speed = 800;

setInterval(() => {
    $($sideImg).fadeOut(speed, () => {
      idx = ++idx % images.length;
      $sideImg.attr("src", images[idx]);
      $sideImg.fadeIn(speed);
    })
  }, 5000);