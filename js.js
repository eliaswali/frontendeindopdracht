var projectEle = document.getElementById('project');
var stareEle = document.getElementById('stage');
var rPrject = document.getElementById('radioProject');
var rStage = document.getElementById('radioStage');
var topBar = document.getElementById('top-bar');
var middleBar = document.getElementById('mid-bar');
var bottomBar = document.getElementById('bot-bar');
var hamburgerContainer =  document.getElementById('hamburger-container');
var menu =document.getElementById('menu');



hamburgerContainer.addEventListener("click", function() {
  if (middleBar.classList.contains("rot-45deg")) {
    topBar.classList.remove("rot45deg");
    middleBar.classList.remove("rot-45deg");
    bottomBar.classList.remove("hidden");
    menu.classList.remove("menuShow");
    menu.classList.add("menuHide");
  } else {
    bottomBar.classList.add("hidden");
    topBar.classList.add("rot45deg");
    middleBar.classList.add("rot-45deg");
    menu.classList.add("menuShow");
    menu.classList.remove("menuHide");
  }
});
//toggle menu

// source:
// https://codepen.io/RedJokingInn/pen/eGQzYZ
// https://codepen.io/RedJokingInn/


function ScrollToTop() {
  if(window.scrollY!=0)
  {
      setTimeout(function() {
         window.scrollTo(0,window.scrollY-30);
          ScrollToTop();
      }, 2);
   }
}
document.getElementById("knop").addEventListener("click", ScrollToTop);
// source:
// https://codepen.io/kanishkkunal/pen/xgoxMw

function verzend_formulier(form){
    // verberg het formulier na het verzenden
    form.classList.add("verborgen")

    // laat het 'succesvol verzonden' berichtje zien
    document.getElementsByClassName("verzonden")[0].classList.remove("verborgen");

    // scrollt de browser helemaal omhoog zodat de gebruiker het bericht kan zien
    window.scrollTo(0, 0);
}

function ifChecked() {
    if (rPrject.checked) {
      projectEle.classList.add("show");
      stareEle.classList.remove("show");
	  } else {
      projectEle.classList.remove("show");
      stareEle.classList.add("show");
		}
}
// zet de function op de radio buttons. Zodat deze kan checken welke is ingevulled
document.getElementById("labelProject").addEventListener("click", ifChecked);
document.getElementById("labelStage").addEventListener("click", ifChecked);
