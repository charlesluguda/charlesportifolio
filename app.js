// TOGGLE MENU
humburger = document.querySelector(".nav-togle");
humburger.onclick = function(){
    navBar = document.querySelector(".navlinks");
    navBar.classList.toggle("showlinks")
};

window.onclick = function(event) {
    if (!humburger.contains(event.target) && !navBar.contains(event.target)) {
        navBar.classList.remove("showlinks");
    }
};

const navLinks = document.querySelectorAll(".navlinks a");
navLinks.forEach(link => {
    link.onclick = function() {
        navBar.classList.remove("showlinks");
    };
});
