"use strict";
//import { LangList } from "./languages"
//import { Utilities } from "./globalFunctions"
//import {Contenent, Language} from "./typeDefs"
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSelection = void 0;
class LanguageSelection {
    constructor() {
        this.langList = new LangList();
    }
    redirect(language) {
        if (LangList.availability[language.check]) {
            return language.primary;
        }
        else if (language.alternate) {
            return language.alternate;
        }
        else {
            return language.primary;
        }
    }
    async languagePopulate() {
        var container = document.getElementById("contenents");
        if (!container) {
            return;
        }
        for (let contenentKey in this.langList.langList) {
            var contenent = this.langList.langList[contenentKey];
            var panelState = "";
            var direction = "dropdown-rotate-down";
            if (contenentKey == "common") {
                panelState = " is-open";
                direction = "dropdown-rotate-up";
            }
            container.innerHTML += "<div class='section'>" +
                "<div class='section-title' onclick=\"LanguageSelection.toggleContenent('" + contenentKey + "')\">" +
                contenent.name + "<i id='" + contenentKey + "-caret' class='fa fa-caret-up " + direction + "' aria-hidden='true'></i>" +
                "</div>" +
                "<div class='language-panel" + panelState + "'" + (contenentKey == "common" ? "" : " inert") + ">" +
                "<div id='" + contenentKey + "' class='flex-container'>" +
                "</div>" +
                "</div>" +
                "</div>";
            var contenentDiv = document.getElementById(contenentKey);
            if (!contenentDiv) {
                continue;
            }
            for (let languageKey in contenent.languages) {
                var language = contenent.languages[languageKey];
                contenentDiv.innerHTML += "<div id='" + languageKey + "' class='flex-item'>" +
                    "<button class='button-stand-alone language-selection' onclick=\"location.href='" + this.redirect(language) + "'\">" +
                    "<img src='countries/" + language.icon + "' class='flag-icon' />" +
                    "<br />" +
                    language.text +
                    "</button>" +
                    "</div>";
            }
        }
    }
    browserLanguagePopulate() {
        var browserLanguage = navigator.language.split('-')[0];
        var language = null;
        var contenentKey = null;
        var languageKey = null;
        for (contenentKey in this.langList.langList) {
            var contenent = this.langList.langList[contenentKey];
            for (languageKey in contenent.languages) {
                if (languageKey == browserLanguage) {
                    language = this.langList.langList[contenentKey].languages[languageKey];
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
        contenentDiv.innerHTML += "<div id='" + languageKey + "' class='flex-item'>" +
            "<button class='button-stand-alone language-selection' onclick='location.href='" + this.redirect(language) + "'>" +
            "<img src='countries/" + language.icon + "' class='flag-icon' />" +
            "<br />" +
            language.text +
            "</button>" +
            "</div>";
    }
    static toggleContenent(key) {
        var langs = document.getElementById(key);
        var caret = document.getElementById(key + "-caret");
        var panel = langs?.parentElement;
        if (panel == null || caret == null) {
            return;
        }
        if (panel.classList.contains("is-open")) {
            panel.classList.remove("is-open");
            panel.setAttribute("inert", "");
            caret.classList.remove("dropdown-rotate-up");
            caret.classList.add("dropdown-rotate-down");
        }
        else {
            panel.classList.add("is-open");
            panel.removeAttribute("inert");
            caret.classList.remove("dropdown-rotate-down");
            caret.classList.add("dropdown-rotate-up");
        }
    }
    async runPopulate() {
        await Utilities.DocumentReady();
        this.languagePopulate();
        this.browserLanguagePopulate();
    }
}
exports.LanguageSelection = LanguageSelection;
var langSelect = new LanguageSelection();
langSelect.runPopulate();
