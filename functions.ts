function toggleMenu()
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
    if (availability[language.check])
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

var sleep = (milliseconds:number) => new Promise(resolve => setTimeout(resolve, milliseconds))

async function updateItemNumber(elementId:string, total:number)
{
    var element = document.getElementById(elementId)

    if (!element)
    {
        return
    }

    var i=0;
    for (; i<=total-10; i+=5)
    {
        element.innerText = i.toString()
        await sleep(1)
    }

    for (; i<=total; i++)
    {
        element.innerText = i.toString()
        await sleep(100)
    }
}

function distributionPopulate()
{
    var container = document.getElementById("events")

    if (container == null)
    {
        return
    }

    for (let distributionKey in distributions)
    {
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
                                </div>"
    }
}

async function updateNumbers()
{
    for (let distributionKey in distributions)
    {
        updateItemNumber(distributionKey + "-bottles",   distributions[distributionKey].bottles)
        updateItemNumber(distributionKey + "-total",     distributions[distributionKey].total)
        updateItemNumber(distributionKey + "-unique",    distributions[distributionKey].unique)
        updateItemNumber(distributionKey + "-languages", distributions[distributionKey].languages)
    }
}

function toggleContenent(key: string)
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

    for (let contenentKey in languages)
    {
        var contenent = languages[contenentKey]

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
    for (contenentKey in languages)
    {
        for (languageKey in languages[contenentKey].languages)
        {
            if (languageKey == browserLanguage)
            {
                language = languages[contenentKey].languages[languageKey]
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
        await sleep(10);
    }

    if (document.title === "Language Selection")
    {
        languagePopulate()
        browserLanguagePopulate()
    }

    if (document.title === "Water Evangelism")
    {
        distributionPopulate()
        updateNumbers()
    }
}
runPopulate()

type Statistics = {
    name: string,
    icon: string,
    bottles: number,
    total: number,
    unique: number,
    languages: number
}

type Language = {
    check: string,
    primary: string,
    alternate: string | null,
    icon: string,
    text: string
}

type Contenent = {
    name: string,
    languages: Dictionary<Language>
}

interface Dictionary<T> {
    [key:string]: T
}

var distributions: Dictionary<Statistics> = {
    "fair": {
        name:      "Johnson County Fair 2026",
        icon:      "events/fair.jpg",
        bottles:   1921, 
        total:     70, 
        unique:    52, 
        languages: 2,
    },
    "soccer": {
        name:      "Soccer Tournament 2026",
        icon:      "events/soccer.bmp",
        bottles:   10000, 
        total:     407, 
        unique:    304, 
        languages: 5
    },
}


var languages: Dictionary<Contenent> = 
{
    "common": {
        name: "Suggested",
        languages: {
            "EN": {
                check:     "glow", 
                primary:   "https://www.glowonline.org/digital/english",
                alternate: "https://hopetv.org",
                icon:      "countries/us.png",
                text:      "English / English"
            },
            "SP": {
                check:     "glow", 
                primary:   "https://www.glowonline.org/digital/espanol",
                alternate: "https://www.amazingfacts.org/es/inicio/",
                icon:      "countries/spain.png",
                text:      "Spanish / Español"
            },
        }
    },
    "na": {
        name: "North America",
        languages: {
            "en": {
                text:      "English / English",
                check:     "glow", 
                primary:   "https://www.glowonline.org/digital/english",
                alternate: "https://hopetv.org",
                icon:      "countries/us.png",
            },
            "es": {
                text:      "Spanish / Español",
                check:     "glow", 
                primary:   "https://www.glowonline.org/digital/espanol",
                alternate: "https://www.amazingfacts.org/es/inicio/",
                icon:      "countries/spain.png",
            },
        }
    },
    "sa": {
        name: "South America",
        languages: {
            "pt": {
                text:      "Portuguese / Português",
                check:     "amazing",
                primary:   "https://www.amazingfacts.org/pt/inicio",
                alternate: "https://www.novotempo.com/",
                icon:      "countries/brazil.png",
            },
        }
    },
    "eu": {
        name: "Europe",
        languages: {
            "fr": {
                text:      "French / Français",
                check:     "amazing",
                primary:   "https://www.amazingfacts.org/fr/accueil",
                alternate: "https://hcf.tv",
                icon:      "countries/france.png",
            },
            "de": {
                text:      "German / Deutsch",
                check:     "hope",
                primary:   "https://hopetv.de",
                alternate: "https://www.amazingfacts.org/de/startseite",
                icon:      "countries/germany.png",
            },
            "ru": {
                text:      "Russian / Русский",
                check:     "amazing",
                primary:   "https://www.amazingfacts.org/ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f",
                alternate: "https://hopetv.ru/",
                icon:      "countries/russia.png",
            },
            "ro": {
                text:      "Romanian / Română",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-roman",
                alternate: "https://www.sperantatv.ro/",
                icon:      "countries/romania.png",
            },
            "uk": {
                text:      "Ukrainian / Українська",
                check:     "hope",
                primary:   "https://tv.hope.ua",
                alternate: "https://www.glowonline.org/gyd/ukrainian",
                icon:      "countries/ukraine.png",
            },
            "nl": {
                text:      "Dutch / Nederlands",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-dutch",
                alternate: "https://hopechannel.dk",
                icon:      "countries/netherlands.png",
            },
            "cs": {
                text:      "Czech / Čeština",
                check:     "glow",
                primary:   "https://www.glowonline.org/czech",
                alternate: "http://www.hopetv.cz",
                icon:      "countries/czech.png",
            },
            "hu": {
                text:      "Hungarian / Magyar",
                check:     "glow",
                primary:   "https://www.glowonline.org/hungary",
                alternate: "https://remenytv.hu",
                icon:      "countries/hungary.png",
            },
            "sl": {
                text:      "Slovenian / Slovenščina",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-slovensk",
                alternate: null,
                icon:      "countries/slovenia.png",
            },
            "hy": {
                text:      "Armenian / Հայերեն",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-armenian",
                alternate: "https://egwwritings.org/read?panels=p11414.89&index=0",
                icon:      "countries/armenia.png",
            },
            "no": {
                text:      "Norwegian / Norsk",
                check:     "glow",
                primary:   "https://www.glowonline.org/norwegian/",
                alternate: "https://hopechannel.no",
                icon:      "countries/norway.png",
            },
            "pl": {
                text:      "Polish / Polski",
                check:     "glow",
                primary:   "https://www.glowonline.org/pl",
                alternate: "https://hopechannel.pl",
                icon:      "countries/poland.png",
            },
            "it": {
                text:      "Italian / Italiano",
                check:     "hope",
                primary:   "https://hopemedia.it",
                alternate: "https://www.amazingfacts.org/it/casa",
                icon:      "countries/italy.png",
            },
            "sk": {
                text:      "Slovak / Slovenčina",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-slovak",
                alternate: null,
                icon:      "countries/slovakia.png",
            },
            "sv": {
                text:      "Swedish / Svenska",
                check:     "amazing",
                primary:   "https://www.amazingfacts.org/sv/hem",
                alternate: null,
                icon:      "countries/sweden.webp",
            },
            "is": {
                text:      "Icelandic / Íslenska",
                check:     "hope",
                primary:   "https://hopechannel.is",
                alternate: null,
                icon:      "countries/iceland.webp",
            },
            "fi": {
                text:      "Finnish / Suomi",
                check:     "hope",
                primary:   "https://hopechannel.fi",
                alternate: null,
                icon:      "countries/finland.webp",
            },
            "bg": {
                text:      "Bulgarian / Български",
                check:     "hope",
                primary:   "https://hopetv.bg",
                alternate: null,
                icon:      "countries/bulgaria.webp",
            },
            "et": {
                text:      "Estonian / Eesti",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLZEr7IMVNuJ-E-RH-shSlCrp2snoBpsHH",
                alternate: null,
                icon:      "countries/estonia.webp",
            },
            "ab": {
                text:      "Abkhazian / Аҧсшәа",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p13987.2&index=0",
                alternate: null,
                icon:      "countries/abkhazia.webp",
            },
            "sq": {
                text:      "Albanian / Shqip",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p14649.2&index=0",
                alternate: null,
                icon:      "countries/albania.webp",
            },
            "alT": {
                text:      "Altay / Алтай",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p12111.2&index=0",
                alternate: null,
                icon:      "countries/russia.png",
            },
            "az": {
                text:      "Azerbaijani / Azərbaycan dili",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p13958.2&index=0",
                alternate: null,
                icon:      "countries/azerbaijan.webp",
            },
            "av": {
                text:      "Avar / Авар",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p13992.2&index=0",
                alternate: null,
                icon:      "countries/russia.png",
            },
        }
    },
    "as": {
        name: "asia",
        languages: {
            "tl": {
                text:      "Tagalog / Tagalog",
                check:     "glow",
                primary:   "https://www.glowonline.org/gyd/tagalog",
                alternate: "https://hopetv.ph/",
                icon:      "countries/philippines.png",
            },
            "ceb": {
                text:      "Cebuano / Cebuano",
                check:     "hope",
                primary:   "https://hopetv.ph/",
                alternate: "https://www.youtube.com/playlist?list=PL3G8y_le8ywcmP5itbBKMjfnONkaffZag",
                icon:      "countries/philippines.png",
            },
            "visayan": {
                text:      "Visayan / Bisaya",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-visayan",
                alternate: "https://hopetv.ph",
                icon:      "countries/philippines.png",
            },
            "hi": {
                text:      "Hindi / हिन्दी",
                check:     "hope",
                primary:   "https://hopechannelhindi.in",
                alternate: "https://www.youtube.com/playlist?list=PLOky4rbGNIg5dHBNuJvvqgMa2Ii6KpnIe",
                icon:      "countries/india.png",
            },
            "ja": {
                text:      "Japanese / 日本語",
                check:     "hope",
                primary:   "https://www.hopechannel.jp",
                alternate: "https://www.amazingfacts.org/ja/%e3%83%9b%e3%83%bc%e3%83%a0",
                icon:      "countries/japan.png",
            },
            "zh": {
                text:      "Chinese / 中文",
                check:     "glow",
                primary:   "https://www.glowonline.org/glow-chinese",
                alternate: "https://www.chinesehope.tv",
                icon:      "countries/china.png",
            },
            "ko": {
                text:      "Korean / 한국어",
                check:     "hope",
                primary:   "https://hopechannel.kr",
                alternate: "https://www.amazingfacts.org/ko/%ed%99%88",
                icon:      "countries/southKorea.png",
            },
            "bn": {
                text:      "Bengali / বাংলা",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLvVAlSkq3MXT2bEO9AhxMC2zLl-YWVKc2",
                alternate: null,
                icon:      "countries/bangladesh.webp",
            },
            "bho": {
                text:      "Bhojpuri / भोजपुरी",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PL089YS6WSH25sDH7ER5BgnwS7v7Bg4pCz",
                alternate: null,
                icon:      "countries/india.png",
            },
            "kn": {
                text:      "Kannada / ಕನ್ನಡ",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLgNnLiuGItn9dhgqGspjuaBe8xOgbT6EA",
                alternate: null,
                icon:      "countries/india.png",
            },
            "ml": {
                text:      "Malayalam / മലയാളം",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLvsmbgvwm_ED2XeWPzCTI-kV4NyaPCTIh",
                alternate: null,
                icon:      "countries/india.png",
            },
            "mr": {
                text:      "Marathi / मराठी",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLL4YnkccIwPTGCeaN1rDoowg1t-V7yv3n",
                alternate: null,
                icon:      "countries/india.png",
            },
            "lus": {
                text:      "Mizo / Duhlián ṭawng",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLvaZsdR4oRfNV8NzEFVMgksOdrfjHR6Wu",
                alternate: null,
                icon:      "countries/india.png",
            },
            "mn": {
                text:      "Mongolian / Монгол",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLpa-sOKy3XOg5HlQE78epu5TySblHRr0A",
                alternate: null,
                icon:      "countries/mongolia.webp",
            },
            "ne": {
                text:      "Nepali / नेपाली",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLlwfrqmdZg6duWW3JNHAh7JzEKXvkSX-7",
                alternate: null,
                icon:      "countries/nepal.webp",
            },
            "pa": {
                text:      "Punjabi / ਪੰਜਾਬੀ",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PL0msRlgSUO5kNPD-1ldKOzrmBJjs313pR",
                alternate: null,
                icon:      "countries/india.png",
            },
            "sat": {
                text:      "Santali /ᱥᱟᱱᱛᱟ",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLancRlPt_m7dU7XssCvv6N6FtYWnCMgAY",
                alternate: null,
                icon:      "countries/india.png",
            },
            "ta": {
                text:      "Tamil / தமிழ்",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLT_TN2KLM48FtF3rsMUM17sLu4Q-eVu7F",
                alternate: null,
                icon:      "countries/india.png",
            },
            "te": {
                text:      "Telugu / తెలుగు",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PL4yGTeBkSwpQFKxOYsw0Vx7PzS53Yv6FH",
                alternate: null,
                icon:      "countries/india.png",
            },
            "as": {
                text:      "Assamese / অসমীয়া",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p14104.3&index=0",
                alternate: null,
                icon:      "countries/india.png",
            },
        }
    },
    "me": {
        name: "middle-east",
        languages: {
            "ar": {
                text:      "Arabic / العربية",
                check:     "amazing",
                primary:   "https://www.amazingfacts.org/ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84",
                alternate: "https://www.youtube.com/playlist?list=PLWT5oIAjLwXM4WJsRmeK98F4x7P5MupWk",
                icon:      "countries/saudiArabia.png",
            },
        }
    },
    "oc": {
        name: "oceania",
        languages: {
            "in": {
                text:      "Indonesian / Bahasa Indonesia",
                check:     "hope",
                primary:   "https://hopechannel.id",
                alternate: "https://www.glowonline.org/glow-indonesian",
                icon:      "countries/indonesia.png",
            },
            "day": {
                text:      "Dayak / Dayak",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLyKtCIFEspXopT_8PB3Z94nLEb8K2i-Y_&index=3",
                alternate: null,
                icon:      "countries/indonesia.png",
            },
            "jv": {
                text:      "Javanese / Basa Jawa",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PL8sdRUaIOJDif3RKihBrX8AyGVwLGB4Lo",
                alternate: null,
                icon:      "countries/indonesia.png",
            },
        }
    },
    "af": {
        name: "africa",
        languages: {
            "am": {
                text:      "Amharic / አማርኛ",
                check:     "glow",
                primary:   "https://www.glowonline.org/digital/amharic",
                alternate: "https://egwwritings.org/read?panels=p14077.2&index=0",
                icon:      "countries/ethiopia.png",
            },
            "mg": {
                text:      "Malagasy / Malagasy",
                check:     "youtube",
                primary:   "https://www.youtube.com/playlist?list=PLg8tlFOeVN58vwyt7-up5LZDRpdwHcbIa",
                alternate: null,
                icon:      "countries/madagascar.webp",
            },
            "af": {
                text:      "Afrikaans / Afrikaans",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p11589.2&index=0",
                alternate: null,
                icon:      "countries/southAfrica.webp",
            },
            "ake": {
                text:      "Akawaio / Akawaio",
                check:     "egw",
                primary:   "https://egwwritings.org/read?panels=p12275.2&index=0",
                alternate: null,
                icon:      "countries/southAfrica.webp",
            },
        }
    },
}

var availability: {[id: string]: boolean} = {
    "glow":    false,
    "hope":    false,
    "amazing": false,
    "egw":     false,
    "youtube": true,
}