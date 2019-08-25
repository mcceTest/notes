'use strict';

let ele = document.getElementById("subTitle");

setInterval(() => ele.style.visibility = (ele.style.visibility == 'hidden' ? 'visible' : 'hidden'), 1000);

