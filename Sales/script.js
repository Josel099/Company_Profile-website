function fadeMP(){
  document.getElementById("daily-sales-table").style.opacity = 1;
  document.getElementById("monthly-sales-table").style.opacity = 0.5;
   document.getElementById("productwise-sales-table").style.opacity = 0.3;
}

function fadeDP() {
    document.getElementById("monthly-sales-table").style.opacity = 1;
  document.getElementById("daily-sales-table").style.opacity = 0.5;
  document.getElementById("productwise-sales-table").style.opacity = 0.5;
}
function fadeDM() {
    document.getElementById("productwise-sales-table").style.opacity = 1;
  document.getElementById("daily-sales-table").style.opacity = 0.5;
  document.getElementById("monthly-sales-table").style.opacity = 0.5;
}