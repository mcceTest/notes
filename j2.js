'use strict';


$(document).ready(function(){
  $("aside img").fadeIn("slow");

  $("nav div.all span").hover(function() {
    $("#links a").show();
  })

  $("nav div.movie span").hover(function() {
    $("#links a").hide();
    $("#links a.movie").show();
  });


  $("nav div.deal span").hover(function() {
    $("#links a").hide();
    $("#links a.deal").show();
  });
});

