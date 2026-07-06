"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu && menu.style.display === "block") {
        menu.style.display = "none";
    }
    else if (menu) {
        menu.style.display = "block";
    }
}
function redirect(primary, backup) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(primary);
        if (response.ok) {
            location.href = primary;
        }
        else if (backup.length > 0) {
            location.href = backup;
        }
        else {
            if (backup === "https://hopetv.org") {
                location.href = "https://www.glowonline.org/digital/english";
            }
            else {
                redirect("https://www.glowonline.org/digital/english", "https://hopetv.org");
            }
        }
    });
}
var decision = {};
var primary = {
    "english": "https://www.glowonline.org/digital/english",
    "spanish": "https://www.glowonline.org/digital/espanol",
    "portuguese": "https://www.amazingfacts.org/pt/inicio",
    "french": "https://www.amazingfacts.org/fr/accueil",
    "german": "https://hopetv.de",
    "russian": "https://www.amazingfacts.org/ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f",
    "romanian": "https://www.glowonline.org/glow-roman",
    "ukrainian": "https://tv.hope.ua",
    "tagalog": "https://www.glowonline.org/gyd/tagalog",
    "cebuano": "https://hopetv.ph/",
    "hindi": "https://hopechannelhindi.in",
    "arabic": "https://www.amazingfacts.org/ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84",
    "nederlands": "https://www.glowonline.org/glow-dutch",
    "czech": "https://www.glowonline.org/czech",
    "hungarian": "https://www.glowonline.org/hungary",
    "indonesian": "https://hopechannel.id",
    "amharic": "https://www.glowonline.org/digital/amharic",
    "slovenia": "https://www.glowonline.org/glow-slovensk",
    "armenian": "https://www.glowonline.org/glow-armenian",
    "norwegian": "https://www.glowonline.org/norwegian/",
    "polski": "https://www.glowonline.org/pl",
    "italian": "https://hopemedia.it",
    "slovak": "https://www.glowonline.org/glow-slovak",
    "visayan": "https://www.glowonline.org/glow-visayan",
    "japanese": "https://www.hopechannel.jp",
    "chinese": "https://www.glowonline.org/glow-chinese",
    "korean": "https://hopechannel.kr"
};
var alternate = {
    "english": "https://hopetv.org",
    "spanish": "https://www.amazingfacts.org/es/inicio/",
    "portuguese": "https://www.novotempo.com/",
    "french": "https://hcf.tv",
    "german": "https://www.amazingfacts.org/de/startseite",
    "russian": "https://hopetv.ru/",
    "romanian": "https://www.sperantatv.ro/",
    "ukrainian": "https://www.glowonline.org/gyd/ukrainian",
    "tagalog": "https://hopetv.ph/",
    //"cebuano":      "https://hopetv.ph/",
    //"hindi":        "https://hopechannelhindi.in/",
    //"arabic":       "https://www.amazingfacts.org/ar/%d8%a7%d9%84%d8%b5%d9%81%d8%ad%d8%a9-%d8%a7%d9%84%d8%b1%d8%a6%d9%8a%d8%b3%d9%8a%d8%a9",
    "nederlands": "https://hopechannel.dk",
    "czech": "http://www.hopetv.cz",
    "hungarian": "https://remenytv.hu",
    "indonesian": "https://www.glowonline.org/glow-indonesian",
    //"amharic":      "https://www.glowonline.org/digital/amharic/",
    //"slovenia":     "https://www.glowonline.org/glow-slovenski",
    //"armenian":     "https://www.glowonline.org/glow-armenian/",
    "norwegian": "https://hopechannel.no",
    "polski": "https://hopechannel.pl",
    "italian": "https://www.amazingfacts.org/it/casa",
    //"slovak":       "https://www.glowonline.org/glow-slovak",
    "visayan": "https://hopetv.ph",
    "japanese": "https://www.amazingfacts.org/ja/%e3%83%9b%e3%83%bc%e3%83%a0",
    "chinese": "https://www.chinesehope.tv",
    "korean": "https://www.amazingfacts.org/ko/%ed%99%88"
};
function countryClick(countryName) {
    switch (countryName) {
        case "english":
            redirect("https://www.glowonline.org/digital/english", "https://hopetv.org");
            break;
        case "spanish":
            redirect("https://www.glowonline.org/digital/espanol", "https://www.amazingfacts.org/es/inicio/");
            break;
        case "portuguese":
            redirect("https://www.amazingfacts.org/pt/inicio", "https://www.novotempo.com/");
            break;
        case "french":
            redirect("https://www.amazingfacts.org/fr/accueil/", "https://hcf.tv");
            break;
        case "german":
            redirect("https://hopetv.de", "https://www.amazingfacts.org/de/startseite");
            break;
        case "russian":
            redirect("https://www.amazingfacts.org/ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f/", "https://hopetv.ru/");
            break;
        case "romanian":
            redirect("https://www.glowonline.org/glow-roman/", "https://www.sperantatv.ro/");
            break;
        case "ukrainian":
            redirect("https://tv.hope.ua", "https://www.glowonline.org/gyd/ukrainian");
            break;
        case "tagalog":
            redirect("https://www.glowonline.org/gyd/tagalog/", "https://hopetv.ph/");
            break;
        case "cebuano":
            redirect("https://hopetv.ph/", "");
            break;
        case "hindi":
            redirect("https://hopechannelhindi.in/", "");
            break;
        case "arabic":
            redirect("https://www.amazingfacts.org/ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84", "https://www.amazingfacts.org/ar/%d8%a7%d9%84%d8%b5%d9%81%d8%ad%d8%a9-%d8%a7%d9%84%d8%b1%d8%a6%d9%8a%d8%b3%d9%8a%d8%a9");
            break;
        case "nederlands":
            redirect("https://www.glowonline.org/glow-dutch", "https://hopechannel.dk");
            break;
        case "czech":
            redirect("https://www.glowonline.org/czech", "http://www.hopetv.cz");
            break;
        case "hungarian":
            redirect("https://www.glowonline.org/hungary", "https://remenytv.hu");
            break;
        case "indonesian":
            redirect("https://hopechannel.id", "https://www.glowonline.org/glow-indonesian");
            break;
        case "amharic":
            redirect("https://www.glowonline.org/digital/amharic/", "");
            break;
        case "slovenia":
            redirect("https://www.glowonline.org/glow-slovenski", "");
            break;
        case "armenian":
            redirect("https://www.glowonline.org/glow-armenian/", "");
            break;
        case "norwegian":
            redirect("https://www.glowonline.org/glow-norwegian/", "https://hopechannel.no");
            break;
        case "polski":
            redirect("https://www.glowonline.org/pl", "https://hopechannel.pl");
            break;
        case "italian":
            redirect("https://hopemedia.it", "https://www.amazingfacts.org/it/casa");
            break;
        case "slovak":
            redirect("https://www.glowonline.org/glow-slovak", "");
            break;
        case "visayan":
            redirect("https://www.glowonline.org/glow-visayan", "https://hopetv.ph");
            break;
        case "japanese":
            redirect("https://www.hopechannel.jp", "https://www.amazingfacts.org/ja/%e3%83%9b%e3%83%bc%e3%83%a0");
            break;
        case "chinese":
            redirect("https://www.glowonline.org/glow-chinese/", "https://www.chinesehope.tv");
            break;
        case "korean":
            redirect("https://hopechannel.kr", "https://www.amazingfacts.org/ko/%ed%99%88");
            break;
        default:
            break;
    }
}
//# sourceMappingURL=functions.js.map