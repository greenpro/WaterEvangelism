//import {LangList} from "./languages"
//import {Events} from "./events"
//import { LangList } from "./languages"
//import { LanguageSelection } from "./languageSelection"
//import { Utilities } from "./utilities"

export class Utilities
{
    public static sleep = (milliseconds:number) => new Promise(resolve => setTimeout(resolve, milliseconds));

    public static async DocumentReady()
    {
        // check that the document is ready
        while (!document.getElementById("menu-div")) 
        {
            await Utilities.sleep(10)
        }
    }
}

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
    faq: {"enabled":true}
};