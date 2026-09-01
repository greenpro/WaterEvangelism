//import {LangList} from "./languages"
//import {Events} from "./events"
//import { LangList } from "./languages"
//import { LanguageSelection } from "./languageSelection"
//import { Utilities } from "./utilities"

export function toggleMenu()
{
    var menu = document.getElementById("menu")
    var menuOff = document.getElementById("menu-off")

    if (menu && menuOff && menu.style.display === "block")
    {
        menu.style.display = "none"
        menuOff.style.display = "none"
    }
    else if (menu && menuOff)
    {
        menu.style.display = "block"
        menuOff.style.display = "block"
    }
}

export async function renderMenu()
{
    await Utilities.DocumentReady()

    var title = document.title

    var home      = ""
    var volunteer = ""
    var kc        = ""
    var other     = ""
    var days      = ""
    var language  = ""
    var contact   = ""
    
    var hrefPrefix = ""
    if (title.includes("Volunteer"))
    {
        volunteer = "button-inactive"
    }
    else if (title.includes("Kansas"))
    {
        kc = "button-inactive"
        hrefPrefix = "../"
    }
    else if (title.includes("Other"))
    {
        other = "button-inactive"
        hrefPrefix = "../"
    }
    else if (title.includes("40"))
    {
        days = "button-inactive"
    }
    else if (title.includes("Language"))
    {
        language = "button-inactive"
    }
    else if (title.includes("Contact"))
    {
        contact = "button-inactive"
    }
    else
    {
        home = "button-inactive"
    }

    var menudiv = document.getElementById("menu-div")
    if (menudiv != null)
    {
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
                             </div>"
    }
}

renderMenu()