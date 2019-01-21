//toggle menu
$(".hamburger-container").click(function() {
  $("#menu").slideToggle();
});

//to fix issue that toggle adds style(hides) to nav
$(window).resize(function() {
  if (window.innerWidth > 1024) {
      $("#menu").removeAttr("style");
    }
  });

//icon animation
var topBar = $(".hamburger li:nth-child(1)"),
middleBar = $(".hamburger li:nth-child(2)"),
bottomBar = $(".hamburger li:nth-child(3)");



$(".hamburger-container").on("click", function() {
   if (middleBar.hasClass("rot-45deg")) {
     topBar.removeClass("rot45deg");
     middleBar.removeClass("rot-45deg");
     bottomBar.removeClass("hidden");
   } else {
     bottomBar.addClass("hidden");
     topBar.addClass("rot45deg");
     middleBar.addClass("rot-45deg");
   }
});

// source:
// https://codepen.io/RedJokingInn/pen/eGQzYZ
// https://codepen.io/RedJokingInn/


$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})});
// source:
// https://codepen.io/kruxor/pen/CwpFq
// https://codepen.io/kruxor/

function verzend_formulier(form){

    // verberg het formulier na het verzenden
    form.classList.add("verborgen")

    // laat het 'succesvol verzonden' berichtje zien
    document.getElementsByClassName("verzonden")[0].classList.remove("verborgen");

    // scrollt de browser helemaal omhoog zodat de gebruiker het bericht kan zien
    window.scrollTo(0, 0);
}

var projectEle = document.getElementById('project');
var stareEle = document.getElementById('stage');
var rPrject = document.getElementById('radioProject');
var rStage = document.getElementById('radioStage');

window.onload = function() {
		projectEle.style.display = 'none';
    stareEle.style.display = 'none';
}

function test(){
  console.log(rPrject);
  console.log(rStage);
}

function ifChecked() {
    if (rPrject.checked) {
      projectEle.style.display = 'block';
      stareEle.style.display = 'none';
	  } else {
      projectEle.style.display = 'none';
      stareEle.style.display = 'block';
		}
}
document.getElementById("labelProject").addEventListener("click", ifChecked);
document.getElementById("labelStage").addEventListener("click", ifChecked);
