const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});

document.getElementById("year").textContent = 
    new Date().getFullYear();
