"use strict";
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu && menu.style.display === "block") {
        menu.style.display = "none";
    }
    else if (menu) {
        menu.style.display = "block";
    }
}
