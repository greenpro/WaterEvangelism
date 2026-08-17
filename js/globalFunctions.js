"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleMenu = toggleMenu;
function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuOff = document.getElementById("menu-off");
    if (menu && menuOff && menu.style.display === "block") {
        menu.style.display = "none";
        menuOff.style.display = "none";
    }
    else if (menu && menuOff) {
        menu.style.display = "block";
        menuOff.style.display = "block";
    }
}
