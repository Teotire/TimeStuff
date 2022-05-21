
var acc = document.getElementsByClassName("accordion");
var hea = document.getElementsByClassName("heading");
var arw = document.getElementsByClassName("arrow");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  /* ARROWS from heading */

  hea[i].addEventListener("click", function () {
    /* Toggle between turning the arrow */
    var heading = this.nextElementSibling;
    if (heading.style.transform === "rotate(180deg)") {
      heading.style.transform = "rotate(0deg)";
    } else {
      heading.style.transform = "rotate(180deg)";
    }
  });

  /* ARROWS from arrow */

  arw[i].addEventListener("click", function () {
    /* Toggle between turning the arrow */
    if (this.style.transform === "rotate(180deg)") {
      this.style.transform = "rotate(0deg)";
    } else {
      this.style.transform = "rotate(180deg)";
    }
  });
}


function Hide(HideID) {
  HideID.style.display = "none";
}


function openURL() {
  console.log("Redirecting");
  window.location.href = "https://timestuff.timescoop.repl.co/";
  window.open('https://replit.com/@timescoop/Timestuff#index.html', '_blank');
}

function easterEgg() {
  alert('Easter Egg!')
}


