//import {LangList} from "./languages"
//import {Events} from "./events"
//import { LangList } from "./languages"
import {Dictionary, Statistics, Language} from "./typeDefs"
//import { Utilities } from "./utilities"

var langList: LangList = new LangList()

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

function redirect(language: Language): string
{
    if (langList.availability[language.check])
    {
        return language.primary
    }
    else if (language.alternate)
    {
        return language.alternate
    }
    else
    {
        return language.primary
    }
}

export function toggleContenent(key: string)
{
    var langs = document.getElementById(key)
    var caret = document.getElementById(key + "-caret")
    console.log(key)
    console.log(langs)
    console.log(caret)
    if (langs != null && caret != null)
    {
        if (langs.style.display == "flex")
        {
            langs.style.display = "none"
            caret.classList = "fa fa-caret-up"
        }
        else
        {
            langs.style.display = "flex"
            caret.classList = "fa fa-caret-down"
        }
    }
}

async function languagePopulate()
{
    var container = document.getElementById("contenents")
    if (!container)
    {
        console.log("cannot find container")
        return
    }

    for (let contenentKey in langList.langList)
    {
        var contenent = langList.langList[contenentKey]

        var display = "none"
        var direction = "up"
        if (contenentKey == "common")
        {
            display = "flex"
            direction = "down"
        }
        container.innerHTML += "<div class='section'>" +
                              "<div class='section-title' onclick='toggleContenent(\"" + contenentKey + "\")'>" +
                              contenent.name + "<i id='" + contenentKey + "-caret' class='fa fa-caret-" + direction + "' aria-hidden='true'></i>" +
                              "</div>" +
                              "<div id='" + contenentKey + "' class='flex-container' style='display:" + display + "'>" +
                              "</div>" +
                              "</div>"
        
        var contenentDiv = document.getElementById(contenentKey)
        if (!contenentDiv)
        {
            console.log("cannot find contenent div")
            continue
        }

        for (let languageKey in contenent.languages)
        {
            var language = contenent.languages[languageKey]
            contenentDiv.innerHTML += "<div id='" + languageKey + "' class='flex-item'>" +
                                       "<button class='button-stand-alone language-selection' onclick='location.href='" + redirect(language) + "'>" +
                                       "<img src='" + language.icon + "' class='flag-icon' />" +
                                       "<br />" +
                                       language.text +
                                       "</button>" +
                                       "</div>"
        }
    }
}

function browserLanguagePopulate()
{
    var browserLanguage = navigator.language.split('-')[0]

    var language: Language|null = null
    var contenentKey: string|null = null
    var languageKey: string|null = null
    for (contenentKey in langList)
    {
        for (languageKey in langList.langList[contenentKey].languages)
        {
            if (languageKey == browserLanguage)
            {
                language = langList.langList[contenentKey].languages[languageKey]
                break;
            }
        }

        if (language != null)
        {
            break;
        }
    }

    if (contenentKey == null || languageKey == null || language == null ||
        languageKey == "en" || languageKey == "es")
    {
        return
    }

    var contenentDiv = document.getElementById("common")
    if (contenentDiv == null)
    {
        return
    }

    console.log(contenentDiv)
    contenentDiv.innerHTML += "<div id='" + languageKey + "' class='flex-item'>" +
                              "<button class='button-stand-alone language-selection' onclick='location.href='" + redirect(language) + "'>" +
                              "<img src='" + language.icon + "' class='flag-icon' />" +
                              "<br />" +
                              language.text +
                              "</button>" +
                              "</div>"
}

async function runPopulate()
{
    // check that the document is ready
    while (!document.getElementById("menu")) 
    {
        await Utilities.sleep(10);
    }

    if (document.title === "Language Selection")
    {
        languagePopulate()
        browserLanguagePopulate()
    }

    if (document.title === "Water Evangelism")
    {
        var events = new Events()
        events.distributionPopulate()
        events.updateNumbers()
    }
}
runPopulate()