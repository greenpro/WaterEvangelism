//import {LangList} from "./languages"
//import { LangList } from "./languages"
import {Contenent, Language} from "./typeDefs"

export class LanguageSelection 
{
    constructor()
    {
        this.langList = new LangList()
    }


    private langList: LangList


    private redirect(language: Language): string
    {
        if (this.langList.availability[language.check])
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

    private async languagePopulate()
    {
        var container = document.getElementById("contenents")
        if (!container)
        {
            console.log("cannot find container")
            return
        }

        for (let contenentKey in this.langList.langList)
        {
            var contenent = this.langList.langList[contenentKey]

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
                                           "<button class='button-stand-alone language-selection' onclick=\"location.href='" + this.redirect(language) + "'\">" +
                                           "<img src='" + language.icon + "' class='flag-icon' />" +
                                           "<br />" +
                                           language.text +
                                           "</button>" +
                                           "</div>"
            }
        }
    }

    private browserLanguagePopulate()
    {
        var browserLanguage = navigator.language.split('-')[0]

        var language: Language|null = null
        var contenentKey: string|null = null
        var languageKey: string|null = null
        for (contenentKey in this.langList.langList)
        {
            var contenent: Contenent = this.langList.langList[contenentKey]

            for (languageKey in contenent.languages)
            {
                if (languageKey == browserLanguage)
                {
                    language = this.langList.langList[contenentKey].languages[languageKey]
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
                                  "<button class='button-stand-alone language-selection' onclick='location.href='" + this.redirect(language) + "'>" +
                                  "<img src='" + language.icon + "' class='flag-icon' />" +
                                  "<br />" +
                                  language.text +
                                  "</button>" +
                                  "</div>"
    }


    public static toggleContenent(key: string)
    {
        var langs = document.getElementById(key)
        var caret = document.getElementById(key + "-caret")
        if (langs == null || caret == null)
        {
            return
        }

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

    public async runPopulate()
    {
        // check that the document is ready
        while (!document.getElementById("menu")) 
        {
            await Utilities.sleep(10);
        }

        this.languagePopulate()
        this.browserLanguagePopulate()
    }
}

var langSelect: LanguageSelection = new LanguageSelection()
langSelect.runPopulate()