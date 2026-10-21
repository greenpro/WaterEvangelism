"use strict";
//import {LangList} from "./languages"
//import {Events} from "./events"
//import { LangList } from "./languages"
//import { LanguageSelection } from "./languageSelection"
//import { Utilities } from "./utilities"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
exports.toggleMenu = toggleMenu;
exports.renderMenu = renderMenu;
class Utilities {
    static async DocumentReady() {
        // check that the document is ready
        while (!document.getElementById("menu-div")) {
            await Utilities.sleep(10);
        }
    }
}
exports.Utilities = Utilities;
Utilities.sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
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
async function renderMenu() {
    await Utilities.DocumentReady();
    var title = document.title;
    var home = "";
    var volunteer = "";
    var kc = "";
    var other = "";
    var days = "";
    var language = "";
    var contact = "";
    var hrefPrefix = "";
    if (title.includes("Volunteer")) {
        volunteer = "button-inactive";
    }
    else if (title.includes("Kansas")) {
        kc = "button-inactive";
        hrefPrefix = "../";
    }
    else if (title.includes("Other")) {
        other = "button-inactive";
        hrefPrefix = "../";
    }
    else if (title.includes("40")) {
        days = "button-inactive";
    }
    else if (title.includes("Language")) {
        language = "button-inactive";
    }
    else if (title.includes("Contact")) {
        contact = "button-inactive";
    }
    else {
        home = "button-inactive";
    }
    var menudiv = document.getElementById("menu-div");
    if (menudiv != null) {
        menudiv.innerHTML = "<div id=\"menu-icon\" href=\"javascript:void(0);\" onclick=\"toggleMenu()\">\
                                 <i class=\"fa fa-bars\"></i>\
                                 <div id=\"menu-off\"></div>\
                             </div>\
                             <div id=\"menu\">\
                                 <button class=\"button-top " + home + "\" onclick=\"location.href='" + hrefPrefix + "index.html'\">\
                                     Home\
                                 </button>\
                                 <button class=\"" + volunteer + "\" onclick=\"location.href='" + hrefPrefix + "volunteerInfo.html'\">\
                                     Volunteer Info\
                                 </button>\
                                 <button class=\"button-tabbed " + kc + "\" onclick=\"location.href='" + hrefPrefix + "cities/kc.html'\">\
                                     Kansas City\
                                 </button>\
                                 <button class=\"button-tabbed " + other + "\" onclick=\"location.href='" + hrefPrefix + "cities/other.html'\">\
                                     Other\
                                 </button>\
                                 <button class=\"" + days + "\" onclick=\"location.href='" + hrefPrefix + "40days.html'\">\
                                     40 Days of Prayer\
                                 </button>\
                                 <button class=\"" + language + "\" onclick=\"location.href='" + hrefPrefix + "glow.html'\">\
                                     Evangelism Languages\
                                 </button>\
                                 <button class=\"button-bottom " + contact + "\" onclick=\"location.href='" + hrefPrefix + "contact.html'\">\
                                     Contact\
                                 </button>\
                             </div>";
    }
}
async function init() {
    // Request the needed libraries.
    const [{ AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);
    // Get the gmp-map element.
    const mapElement = document.querySelector('gmp-map');
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    // Set map options.
    innerMap.setOptions({
        mapTypeControl: false,
    });
    const locations = [
        { title: 'Country Club Plaza, Kansas City, MO', position: { lat: 39.0413, lng: -94.5918 } },
        { title: 'New Haven SDA Church, Overland Park, KS', position: { lat: 38.9825, lng: -94.6700 } },
        { title: 'Johnson County Fair, Gardner, KS', position: { lat: 38.8125, lng: -94.9183 } },
        { title: 'Salvation Army, Lawrence, KS', position: { lat: 38.9717, lng: -95.2353 } },
        { title: 'Loose Park, Kansas City, MO', position: { lat: 39.0487, lng: -94.5968 } },
        { title: 'Shawnee Mission Park, Shawnee, KS', position: { lat: 39.0083, lng: -94.7417 } },
        { title: 'River Market, Kansas City, MO', position: { lat: 39.1053, lng: -94.5862 } },
        { title: 'Mid-America Sports Complex, Olathe, KS', position: { lat: 38.8817, lng: -94.8194 } },
        { title: 'Washington Square Park, Kansas City, MO', position: { lat: 39.0997, lng: -94.5786 } },
        { title: 'SDA Multicultural Community Church, Kansas City, MO', position: { lat: 39.0917, lng: -94.5783 } },
        { title: 'Oak Park Mall, Overland Park, KS', position: { lat: 38.9667, lng: -94.6889 } },
        { title: 'Artist Alley, Chanute, KS', position: { lat: 37.6792, lng: -95.4572 } },
        { title: 'Biblesta, Humbolt, KS', position: { lat: 37.8028, lng: -95.4353 } },
        { title: 'Los Angeles, CA', position: { lat: 34.0522, lng: -118.2437 } },
    ];
    const north = Math.max(...locations.map(location => location.position.lat));
    const south = Math.min(...locations.map(location => location.position.lat));
    const east = Math.max(...locations.map(location => location.position.lng));
    const west = Math.min(...locations.map(location => location.position.lng));
    const centerLat = (north + south) / 2;
    const centerLng = (east + west) / 2;
    innerMap.setCenter({ lat: centerLat, lng: centerLng });
    innerMap.setZoom(6);
    for (const location of locations) {
        new AdvancedMarkerElement({
            map: innerMap,
            position: location.position,
            title: location.title,
        });
    }
}
init();
renderMenu();
// support chat
var _support = _support || { 'ui': {}, 'user': {} };
_support['account'] = '37857738-2260-11f1-86ed-7cd30aca5428';
_support['ui']['contactMode'] = 'mixed';
_support['ui']['enableKb'] = 'true';
_support['ui']['mailbox'] = '79257991';
_support['ui']['styles'] = {
    widgetColor: 'rgba(16, 162, 197, 1)',
    gradient: true,
};
_support['ui']['shoutboxFacesMode'] = '';
_support['ui']['widget'] = {
    allowBotProcessing: 'false',
    slug: 'water-evangelism-webchat',
    label: {
        text: 'Let us know if you have any questions! 😊',
        mode: "notification",
        delay: 3,
        duration: 30,
        primary: '',
        sound: true,
    },
    position: 'bottom-right'
};
_support['apps'] = {
    recentConversations: {},
    faq: { "enabled": true }
};
