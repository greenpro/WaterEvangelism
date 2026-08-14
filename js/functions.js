"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = void 0;
exports.toggleMenu = toggleMenu;
exports.toggleContenent = toggleContenent;
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
    for (let contenentKey in exports.languages) {
        var contenent = exports.languages[contenentKey];
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
    for (contenentKey in exports.languages) {
        for (languageKey in exports.languages[contenentKey].languages) {
            if (languageKey == browserLanguage) {
                language = exports.languages[contenentKey].languages[languageKey];
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
//remove
var https = "httpsjs";
var w3 = https + "www.";
var glow = w3 + "glowonline.org/digital/";
var amazing = w3 + "amazingfacts.org/";
var hope = https + "hopetv.";
var egw = https + "egwwritings.org/read?panels=p";
var yt = w3 + "youtube.com/playlist?list=PL";
var ico = "countries/";
// north america
var us_en = { text: "English / English", icon: ico + "us.png",
    primary: glow + "english", alternate: hope + "org",
    check: "glow" };
var gb_en = us_en;
gb_en.icon = ico + "gb.webp";
gb_en.alternate = hope + "org.uk";
var sp_es = { text: "Spanish / Español", icon: ico + "spain.png",
    primary: glow + "espanol", alternate: amazing + "es/inicio/",
    check: "glow" };
var mx_es = sp_es;
// south america
var br_pt = { text: "Portuguese / Português", icon: ico + "brazil.png",
    primary: amazing + "pt/inicio", alternate: w3 + "novotempo.com/",
    check: "amazing" };
var po_pt = br_pt;
po_pt.icon = ico + "portugal.webp";
po_pt.alternate = w3 + "novotempo.pt";
// europe
var fr_fr = { text: "French / Français", icon: ico + "france.png",
    primary: amazing + "fr/accueil", alternate: https + "hcf.tv",
    check: "amazing" };
var gr_de = { text: "German / Deutsch", icon: ico + "germany.png",
    primary: hope + "de", alternate: amazing + "de/startseite",
    check: "hope" };
var ru_ru = { text: "Russian / Русский", icon: ico + "russia.png",
    primary: amazing + "ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f", alternate: hope + "ru",
    check: "amazing" };
var ru_alt = ru_ru;
ru_alt.text = "Altay / Алтай";
ru_alt.primary = egw + "12111.2&index=0";
ru_alt.check = "egw"; // replace
var ru_av = ru_alt;
ru_av.text = "Avar / Авар";
ru_av.primary = egw + "13992.2&index=0"; // replace
var ro_ro = { text: "Romanian / Română", icon: ico + "romania.png",
    primary: w3 + "glowonline.org/glow-roman", alternate: w3 + "sperantatv.ro/",
    check: "glow" };
var uk_uk = { text: "Ukrainian / Українська", icon: ico + "ukraine.png",
    primary: https + "tv.hope.ua", alternate: w3 + "glowonline.org/gyd/ukrainian",
    check: "hope" };
var ne_nl = { text: "Dutch / Nederlands", icon: ico + "netherlands.png",
    primary: w3 + "glowonline.org/glow-dutch", alternate: https + "hopechannel.dk",
    check: "glow" };
var cz_cs = { text: "Czech / Čeština", icon: ico + "czech.png",
    primary: w3 + "glowonline.org/czech", alternate: hope + "cz",
    check: "glow" };
var hu_hu = { text: "Hungarian / Magyar", icon: ico + "hungary.png",
    primary: w3 + "glowonline.org/hungary", alternate: https + "remenytv.hu",
    check: "glow" };
var sl_sl = { text: "Slovenian / Slovenščina", icon: ico + "slovenia.png",
    primary: w3 + "glowonline.org/glow-slovensk", alternate: null,
    check: "glow" };
var ar_hy = { text: "Armenian / Հայերեն", icon: ico + "armenia.png",
    primary: w3 + "glowonline.org/glow-armenian", alternate: egw + "11414.89&index=0",
    check: "glow" };
var no_no = { text: "Norwegian / Norsk", icon: ico + "norway.png",
    primary: w3 + "glowonline.org/norwegian/", alternate: https + "hopechannel.no",
    check: "glow" };
var po_pl = { text: "Polish / Polski", icon: ico + "poland.png",
    primary: w3 + "glowonline.org/pl", alternate: https + "hopechannel.pl",
    check: "glow" };
var it_it = { text: "Italian / Italiano", icon: ico + "italy.png",
    primary: https + "hopemedia.it", alternate: amazing + "it/casa",
    check: "hope" };
var sl_sk = { text: "Slovak / Slovenčina", icon: ico + "slovakia.png",
    primary: w3 + "glowonline.org/glow-slovak", alternate: null,
    check: "glow" };
var sw_sv = { text: "Swedish / Svenska", icon: ico + "sweden.webp",
    primary: amazing + "sv/hem", alternate: null,
    check: "amazing" };
var ic_is = { text: "Icelandic / Íslenska", icon: ico + "iceland.webp",
    primary: https + "hopechannel.is", alternate: null,
    check: "hope" };
var fi_fi = { text: "Finnish / Suomi", icon: ico + "finland.webp",
    primary: https + "hopechannel.fi", alternate: null,
    check: "hope" };
var bu_bg = { text: "Bulgarian / Български", icon: ico + "bulgaria.webp",
    primary: hope + "bg", alternate: null,
    check: "hope" };
var es_et = { text: "Estonian / Eesti", icon: ico + "estonia.webp",
    primary: yt + "ZEr7IMVNuJ-E-RH-shSlCrp2snoBpsHH", alternate: null,
    check: "youtube" };
var ab_ab = { text: "Abkhazian / Аҧсшәа", icon: ico + "abkhazia.webp",
    primary: egw + "13987.2&index=0", alternate: null,
    check: "egw" };
var al_sq = { text: "Albanian / Shqip", icon: ico + "albania.webp",
    primary: egw + "14649.2&index=0", alternate: null,
    check: "egw" };
var az_az = { text: "Azerbaijani / Azərbaycan dili", icon: ico + "azerbaijan.webp",
    primary: egw + "13958.2&index=0", alternate: null,
    check: "egw" };
// asia
var ph_tl = { text: "Tagalog / Tagalog", icon: ico + "philippines.png",
    primary: w3 + "glowonline.org/gyd/tagalog", alternate: hope + "ph",
    check: "glow" };
var ph_ceb = { text: "Cebuano / Cebuano", icon: ph_tl.icon,
    primary: hope + "ph", alternate: yt + "3G8y_le8ywcmP5itbBKMjfnONkaffZag",
    check: "hope" };
var in_hi = { text: "Hindi / हिन्दी", icon: ico + "india.png",
    primary: https + "hopechannelhindi.in", alternate: yt + "Oky4rbGNIg5dHBNuJvvqgMa2Ii6KpnIe",
    check: "hope" };
var in_bho = { text: "Bhojpuri / भोजपुरी", icon: in_hi.icon,
    primary: yt + "089YS6WSH25sDH7ER5BgnwS7v7Bg4pCz", alternate: null,
    check: "youtube" };
var in_kn = { text: "Kannada / ಕನ್ನಡ", icon: in_hi.icon,
    primary: yt + "gNnLiuGItn9dhgqGspjuaBe8xOgbT6EA", alternate: null,
    check: "youtube" };
var in_ml = { text: "Malayalam / മലയാളം", icon: in_hi.icon,
    primary: yt + "vsmbgvwm_ED2XeWPzCTI-kV4NyaPCTIh", alternate: null,
    check: "youtube" };
var in_mr = { text: "Marathi / मराठी", icon: in_hi.icon,
    primary: yt + "L4YnkccIwPTGCeaN1rDoowg1t-V7yv3n", alternate: null,
    check: "youtube" };
var in_lus = { text: "Mizo / Duhlián ṭawng", icon: in_hi.icon,
    primary: yt + "vaZsdR4oRfNV8NzEFVMgksOdrfjHR6Wu", alternate: null,
    check: "youtube" };
var in_pa = { text: "Punjabi / ਪੰਜਾਬੀ", icon: in_hi.icon,
    primary: yt + "0msRlgSUO5kNPD-1ldKOzrmBJjs313pR", alternate: null,
    check: "youtube" };
var in_sat = { text: "Santali /ᱥᱟᱱᱛᱟ", icon: in_hi.icon,
    primary: yt + "ancRlPt_m7dU7XssCvv6N6FtYWnCMgAY", alternate: null,
    check: "youtube" };
var in_ta = { text: "Tamil / தமிழ்", icon: in_hi.icon,
    primary: yt + "T_TN2KLM48FtF3rsMUM17sLu4Q-eVu7F", alternate: null,
    check: "youtube" };
var in_te = { text: "Telugu / తెలుగు", icon: in_hi.icon,
    primary: yt + "4yGTeBkSwpQFKxOYsw0Vx7PzS53Yv6FH", alternate: null,
    check: "youtube" };
var in_as = { text: "Assamese / অসমীয়া", icon: in_hi.icon,
    primary: egw + "14104.3&index=0", alternate: null,
    check: "egw" };
var ja_ja = { text: "Japanese / 日本語", icon: ico + "japan.png",
    primary: w3 + "hopechannel.jp", alternate: amazing + "ja/%e3%83%9b%e3%83%bc%e3%83%a0",
    check: "hope" };
var ch_zh = { text: "Chinese / 中文", icon: ico + "china.png",
    primary: w3 + "glowonline.org/glow-chinese", alternate: w3 + "chinesehope.tv",
    check: "glow" };
var ko_ko = { text: "Korean / 한국어", icon: ico + "southKorea.png",
    primary: https + "hopechannel.kr", alternate: amazing + "ko/%ed%99%88",
    check: "hope" };
var ba_bn = { text: "Bengali / বাংলা", icon: ico + "bangladesh.webp",
    primary: yt + "vVAlSkq3MXT2bEO9AhxMC2zLl-YWVKc2", alternate: null,
    check: "youtube" };
var mo_mn = { text: "Mongolian / Монгол", icon: ico + "mongolia.webp",
    primary: yt + "pa-sOKy3XOg5HlQE78epu5TySblHRr0A", alternate: null,
    check: "youtube" };
var np_ne = { text: "Nepali / नेपाली", icon: ico + "nepal.webp",
    primary: yt + "lwfrqmdZg6duWW3JNHAh7JzEKXvkSX-7", alternate: null,
    check: "youtube" };
var aa_ar = { text: "Arabic / العربية", icon: ico + "saudiArabia.png",
    primary: amazing + "ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84", alternate: yt + "WT5oIAjLwXM4WJsRmeK98F4x7P5MupWk",
    check: "amazing" };
// oceana
var id_in = { text: "Indonesian / Bahasa Indonesia", icon: ico + "indonesia.png",
    primary: https + "hopechannel.id", alternate: w3 + "glowonline.org/glow-indonesian",
    check: "hope" };
var id_day = { text: "Dayak / Dayak", icon: ico + "indonesia.png",
    primary: yt + "yKtCIFEspXopT_8PB3Z94nLEb8K2i-Y_&index=3", alternate: id_in.alternate, // replace
    check: "youtube" };
var id_jv = { text: "Javanese / Basa Jawa", icon: ico + "indonesia.png",
    primary: yt + "8sdRUaIOJDif3RKihBrX8AyGVwLGB4Lo", alternate: id_in.alternate, // replace
    check: "youtube", };
// africa
var et_am = { text: "Amharic / አማርኛ", icon: ico + "ethiopia.png",
    primary: glow + "amharic", alternate: egw + "14077.2&index=0",
    check: "glow" };
var ma_mg = { text: "Malagasy / Malagasy", icon: ico + "madagascar.webp",
    primary: yt + "g8tlFOeVN58vwyt7-up5LZDRpdwHcbIa", alternate: null,
    check: "youtube" };
var sa_af = { text: "Afrikaans / Afrikaans", icon: ico + "southAfrica.webp",
    primary: egw + "11589.2&index=0", alternate: null,
    check: "egw" };
var sa_ake = { text: "Akawaio / Akawaio", icon: ico + "southAfrica.webp",
    primary: egw + "12275.2&index=0", alternate: null,
    check: "egw" };
exports.languages = {
    "common": {
        name: "Suggested",
        languages: {
            "en": us_en, "sp": sp_es,
        }
    },
    "na": {
        name: "North America",
        languages: {
            "en": us_en, "es": mx_es,
        }
    },
    "sa": {
        name: "South America",
        languages: {
            "pt": br_pt,
        }
    },
    "eu": {
        name: "Europe",
        languages: {
            "en": gb_en, "fr": fr_fr, "pt": po_pt, "ru": ru_ru, "alt": ru_alt, "av": ru_av, "de": gr_de, "it": it_it,
            "pl": po_pl, "uk": uk_uk, "nl": ne_nl, "az": az_az, "ro": ro_ro, "cs": cz_cs, "sv": sw_sv, "hu": hu_hu,
            "sq": al_sq, "bg": bu_bg, "hy": ar_hy, "sk": sl_sk, "fi": fi_fi, "et": es_et, "is": ic_is, "no": no_no,
            "sl": sl_sl, "ab": ab_ab,
        }
    },
    "as": {
        name: "asia",
        languages: {
            "zh": ch_zh, "hi": in_hi, "pa": in_pa, "mr": in_mr, "te": in_te, "ta": in_ta, "bho": in_bho,
            "kn": in_kn, "ml": in_ml, "as": in_as, "sat": in_sat, "lus": in_lus, "bn": ba_bn, "ja": ja_ja,
            "ko": ko_ko, "tl": ph_tl, "ceb": ph_ceb, "ne": np_ne, "mn": mo_mn,
        }
    },
    "me": {
        name: "middle-east",
        languages: {
            "ar": aa_ar,
        }
    },
    "oc": {
        name: "oceania",
        languages: {
            "in": id_in, "day": id_day, "jv": id_jv,
        }
    },
    "af": {
        name: "africa",
        languages: {
            "am": et_am, "mg": ma_mg, "af": sa_af, "ake": sa_ake,
        }
    },
};
