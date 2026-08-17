//import {LangList} from "./languages"
//import {Events} from "./events"
//import { LangList } from "./languages"
//import { LanguageSelection } from "./languageSelection"
//import { Utilities } from "./utilities"
import {Dictionary, Statistics, Language, Contenent} from "./typeDefs"

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