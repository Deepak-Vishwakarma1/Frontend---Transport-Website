// on Scroll 

var menu = document.getElementById("menu");
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetHeight){
        menu.classList.add("sticky");
    }
    else{
        menu.classList.remove("sticky");
    }
}

// On click Menu bar 
function showmenu(){
    var logo = document.getElementById("logo");
    var navigator = document.getElementById("navigator");
    var menu = document.getElementById("icon1");
    var close = document.getElementById("icon2");

    menu.style.display = "none";
    close.style.display = "block";
    navigator.style.display ="inline-block";
    logo.style.display = "none";
}
// On click Close bar 
function closemenu(){
    var logo = document.getElementById("logo");
    var close = document.getElementById("icon2");
    var navigator = document.getElementById("navigator");
    var menu = document.getElementById("icon1");

    menu.style.display = "block";
    navigator.style.display ="none";
    close.style.display = "none";
    logo.style.display = "block";
}

