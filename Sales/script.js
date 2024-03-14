
function fade(elementId) {

  let fadeElement;
  let element = document.getElementById(elementId);
  
  // finding current displayed element
  var tables = document.querySelectorAll(".table-session");
  for (var i = 0; i < tables.length; i++) {



        
    var display = window
      .getComputedStyle(tables[i])
      .getPropertyValue("display");
    if (display === "block") {
      fadeElement = tables[i];
      break;
    }
  }
  fadeOut(fadeElement);
  fadeIn(element);
}

// fade in and fade out funtions
function fadeIn(element) {
  var opacity = 0;
  var interval = setInterval(function () {
    opacity += 0.1;
    element.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval); // Stop the interval when opacity reaches 1
    }
  },50); // Run every 50 milliseconds 
  element.style.display = "block";
}



function fadeOut(element){
  element.style.display = "none";
  element.style.opacity = 0;
}