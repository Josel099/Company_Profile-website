window.onscroll=()=>{
    topScroll();
}

function topScroll(){
    if(document.documentElement.scrollTop > 20) 
    document.getElementById("top-button").style.display = "block";
    else
    document.getElementById("top-button").style.display = "none";
}

function scrollup(){
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth"
    })

}