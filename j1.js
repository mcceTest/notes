'use strict';

let ele = document.getElementById("subTitle");

ele.style.color = 'purple';

setInterval(() => ele.style.visibility = (ele.style.visibility == 'hidden' ? 'visible' : 'hidden'), 1000);