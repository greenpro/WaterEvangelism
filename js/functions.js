"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleMenu = toggleMenu;
exports.toggleContenent = toggleContenent;
const languages_1 = require("./languages");
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
function redirect(language) {
    if (availability[language.check]) {
        return language.primary;
    }
    else if (language.alternate) {
        return language.alternate;
    }
    else {
        return language.primary;
    }
}
var sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
async function updateItemNumber(elementId, total) {
    var element = document.getElementById(elementId);
    if (!element) {
        return;
    }
    var i = 0;
    for (; i <= total - 10; i += 5) {
        element.innerText = i.toString();
        await sleep(1);
    }
    for (; i <= total; i++) {
        element.innerText = i.toString();
        await sleep(100);
    }
}
function distributionPopulate() {
    var container = document.getElementById("events");
    if (container == null) {
        return;
    }
    for (let distributionKey in distributions) {
        container.innerHTML += "<div class='flex-item section event'>\
                                    <div class='section-title'>\
                                        <img src='" + distributions[distributionKey].icon + "' class='event-icon'>\
                                        <br />" +
            distributions[distributionKey].name +
            "</div>\
                                    Number of bottles: <span id='" + distributionKey + "-bottles'>0</span><br />\
                                    Total scans: <span id='" + distributionKey + "-total'>0</span><br />\
                                    Unique scans: <span id='" + distributionKey + "-unique'>0</span><br />\
                                    languages: <span id='" + distributionKey + "-languages'>0</span><br />\
                                </div>";
    }
}
async function updateNumbers() {
    for (let distributionKey in distributions) {
        updateItemNumber(distributionKey + "-bottles", distributions[distributionKey].bottles);
        updateItemNumber(distributionKey + "-total", distributions[distributionKey].total);
        updateItemNumber(distributionKey + "-unique", distributions[distributionKey].unique);
        updateItemNumber(distributionKey + "-languages", distributions[distributionKey].languages);
    }
}
function toggleContenent(key) {
    var langs = document.getElementById(key);
    var caret = document.getElementById(key + "-caret");
    console.log(key);
    console.log(langs);
    console.log(caret);
    if (langs != null && caret != null) {
        if (langs.style.display == "flex") {
            langs.style.display = "none";
            caret.classList = "fa fa-caret-up";
        }
        else {
            langs.style.display = "flex";
            caret.classList = "fa fa-caret-down";
        }
    }
}
async function languagePopulate() {
    var container = document.getElementById("contenents");
    if (!container) {
        console.log("cannot find container");
        return;
    }
    for (let contenentKey in languages_1.languages) {
        var contenent = languages_1.languages[contenentKey];
        var display = "none";
        var direction = "up";
        if (contenentKey == "common") {
            display = "flex";
            direction = "down";
        }
        container.innerHTML += "<div class='section'>" +
            "<div class='section-title' onclick='toggleContenent(\"" + contenentKey + "\")'>" +
            contenent.name + "<i id='" + contenentKey + "-caret' class='fa fa-caret-" + direction + "' aria-hidden='true'></i>" +
            "</div>" +
            "<div id='" + contenentKey + "' class='flex-container' style='display:" + display + "'>" +
            "</div>" +
            "</div>";
        var contenentDiv = document.getElementById(contenentKey);
        if (!contenentDiv) {
            console.log("cannot find contenent div");
            continue;
        }
        for (let languageKey in contenent.languages) {
            var language = contenent.languages[languageKey];
            contenentDiv.innerHTML += "<div id='" + languageKey + "' class='flex-item'>" +
                "<button class='button-stand-alone language-selection' onclick='location.href='" + redirect(language) + "'>" +
                "<img src='" + language.icon + "' class='flag-icon' />" +
                "<br />" +
                language.text +
                "</button>" +
                "</div>";
        }
    }
}
function browserLanguagePopulate() {
    var browserLanguage = navigator.language.split('-')[0];
    var language = null;
    var contenentKey = null;
    var languageKey = null;
    for (contenentKey in languages_1.languages) {
        for (languageKey in languages_1.languages[contenentKey].languages) {
            if (languageKey == browserLanguage) {
                language = languages_1.languages[contenentKey].languages[languageKey];
                break;
            }
        }
        if (language != null) {
            break;
        }
    }
    if (contenentKey == null || languageKey == null || language == null ||
        languageKey == "en" || languageKey == "es") {
        return;
    }
    var contenentDiv = document.getElementById("common");
    if (contenentDiv == null) {
        return;
    }
    console.log(contenentDiv);
    contenentDiv.innerHTML += "<div id='" + languageKey + "' class='flex-item'>" +
        "<button class='button-stand-alone language-selection' onclick='location.href='" + redirect(language) + "'>" +
        "<img src='" + language.icon + "' class='flag-icon' />" +
        "<br />" +
        language.text +
        "</button>" +
        "</div>";
}
async function runPopulate() {
    // check that the document is ready
    while (!document.getElementById("menu")) {
        await sleep(10);
    }
    if (document.title === "Language Selection") {
        languagePopulate();
        browserLanguagePopulate();
    }
    if (document.title === "Water Evangelism") {
        distributionPopulate();
        updateNumbers();
    }
}
runPopulate();
var distributions = {
    "fair": {
        name: "Johnson County Fair 2026",
        icon: "events/fair.jpg",
        bottles: 1921,
        total: 70,
        unique: 52,
        languages: 2,
    },
    "soccer": {
        name: "Soccer Tournament 2026",
        icon: "events/soccer.bmp",
        bottles: 10000,
        total: 407,
        unique: 304,
        languages: 5
    },
};
var availability = {
    "glow": false,
    "hope": false,
    "amazing": false,
    "egw": false,
    "youtube": true,
};
