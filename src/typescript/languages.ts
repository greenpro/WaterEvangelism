import {Language, Dictionary, Contenent} from "../src/types"

var https: string = "httpsjs"
var w3:    string = https + "www."

var glow:    string = w3 + "glowonline.org/digital/"
var amazing: string = w3 + "amazingfacts.org/"
var hope:    string = https + "hopetv."
var egw:     string = https + "egwwritings.org/read?panels=p"
var yt:      string = w3 + "youtube.com/playlist?list=PL"

var ico: string = "countries/"


// north america
var us_en: Language = { text:    "English / English", icon:      ico + "us.png",
                        primary: glow + "english",    alternate: hope + "org",
                        check:   "glow" }
var gb_en: Language = us_en; gb_en.icon = ico + "gb.webp"; gb_en.alternate = hope + "org.uk"
      
var sp_es: Language = { text:    "Spanish / Español", icon:      ico + "spain.png", 
                        primary: glow +"espanol",     alternate: amazing + "es/inicio/",
                        check:   "glow" }
var mx_es = sp_es

// south america
var br_pt: Language = { text:    "Portuguese / Português", icon:      ico + "brazil.png",
                        primary: amazing + "pt/inicio",    alternate: w3 + "novotempo.com/",
                        check:   "amazing" }
var po_pt: Language = br_pt; po_pt.icon = ico + "portugal.webp"; po_pt.alternate = w3 + "novotempo.pt"

// europe
var fr_fr: Language = { text:    "French / Français",    icon:      ico + "france.png",
                        primary: amazing + "fr/accueil", alternate: https + "hcf.tv",
                        check:   "amazing" }
      
var gr_de: Language = { text:    "German / Deutsch", icon:      ico + "germany.png",
                        primary: hope + "de",        alternate: amazing + "de/startseite",
                        check:   "hope" }
      
var ru_ru:  Language = { text:    "Russian / Русский",                                       icon:      ico + "russia.png",
                         primary: amazing + "ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f", alternate: hope + "ru",
                         check:   "amazing" }
var ru_alt: Language = ru_ru; ru_alt.text = "Altay / Алтай"; ru_alt.primary = egw + "12111.2&index=0"; ru_alt.check = "egw" // replace
var ru_av:  Language = ru_alt; ru_av.text = "Avar / Авар";   ru_av.primary  = egw + "13992.2&index=0"; // replace
      
var ro_ro: Language = { text:    "Romanian / Română",              icon:      ico + "romania.png",
                        primary: w3 + "glowonline.org/glow-roman", alternate: w3 + "sperantatv.ro/",
                        check:   "glow" }
      
var uk_uk: Language = { text:    "Ukrainian / Українська", icon:      ico + "ukraine.png",
                        primary: https + "tv.hope.ua",     alternate: w3 + "glowonline.org/gyd/ukrainian",
                        check:   "hope" }
      
var ne_nl: Language = { text:    "Dutch / Nederlands",             icon:      ico + "netherlands.png",
                        primary: w3 + "glowonline.org/glow-dutch", alternate: https + "hopechannel.dk",
                        check:   "glow" }
      
var cz_cs: Language = { text:    "Czech / Čeština",           icon:      ico + "czech.png",
                        primary: w3 + "glowonline.org/czech", alternate: hope + "cz",
                        check:   "glow" }
      
var hu_hu: Language = { text:    "Hungarian / Magyar",          icon:      ico + "hungary.png",
                        primary: w3 + "glowonline.org/hungary", alternate: https + "remenytv.hu",
                        check:   "glow" }
      
var sl_sl: Language = { text:    "Slovenian / Slovenščina",           icon:      ico + "slovenia.png",
                        primary: w3 + "glowonline.org/glow-slovensk", alternate: null,
                        check:   "glow" }
      
var ar_hy: Language = { text:    "Armenian / Հայերեն",                icon:      ico + "armenia.png",
                        primary: w3 + "glowonline.org/glow-armenian", alternate: egw + "11414.89&index=0",
                        check:   "glow" }
      
var no_no: Language = { text:    "Norwegian / Norsk",              icon:      ico + "norway.png",
                        primary: w3 + "glowonline.org/norwegian/", alternate: https + "hopechannel.no",
                        check:   "glow" }
      
var po_pl: Language = { text:    "Polish / Polski",        icon:      ico + "poland.png",
                        primary: w3 + "glowonline.org/pl", alternate: https + "hopechannel.pl",
                        check:   "glow" }
      
var it_it: Language = { text:    "Italian / Italiano",   icon:      ico + "italy.png",
                        primary: https + "hopemedia.it", alternate: amazing + "it/casa",
                        check:   "hope" }
      
var sl_sk: Language = { text:    "Slovak / Slovenčina",             icon:      ico + "slovakia.png",
                        primary: w3 + "glowonline.org/glow-slovak", alternate: null,
                        check:   "glow" }
      
var sw_sv: Language = { text:    "Swedish / Svenska", icon:      ico + "sweden.webp",
                        primary: amazing + "sv/hem",  alternate: null,
                        check:   "amazing" }
      
var ic_is: Language = { text:    "Icelandic / Íslenska",   icon:      ico + "iceland.webp",
                        primary: https + "hopechannel.is", alternate: null,
                        check:   "hope" }
      
var fi_fi: Language = { text:    "Finnish / Suomi",        icon:      ico + "finland.webp",
                        primary: https + "hopechannel.fi", alternate: null,
                        check:   "hope" }
      
var bu_bg: Language = { text:    "Bulgarian / Български", icon:      ico + "bulgaria.webp",
                        primary: hope + "bg",             alternate: null,
                        check:   "hope" }
      
var es_et: Language = { text:      "Estonian / Eesti",                      icon:      ico + "estonia.webp",
                        primary:   yt + "ZEr7IMVNuJ-E-RH-shSlCrp2snoBpsHH", alternate: null,
                        check:     "youtube" }
      
var ab_ab: Language = { text:    "Abkhazian / Аҧсшәа",    icon:      ico + "abkhazia.webp",
                        primary: egw + "13987.2&index=0", alternate: null,
                        check:   "egw" }
      
var al_sq: Language = { text:    "Albanian / Shqip",      icon:      ico + "albania.webp",
                        primary: egw + "14649.2&index=0", alternate: null,
                        check:   "egw" }
      
var az_az: Language = { text:    "Azerbaijani / Azərbaycan dili", icon:      ico + "azerbaijan.webp",
                        primary: egw + "13958.2&index=0",         alternate: null,
                        check:   "egw" }

// asia
var ph_tl: Language = { text:    "Tagalog / Tagalog",               icon:      ico + "philippines.png",
                        primary: w3 + "glowonline.org/gyd/tagalog", alternate: hope + "ph",
                        check:   "glow" }
var ph_ceb: Language = { text:    "Cebuano / Cebuano", icon:      ph_tl.icon,
                         primary: hope + "ph",         alternate: yt + "3G8y_le8ywcmP5itbBKMjfnONkaffZag",
                         check:   "hope" }

var in_hi:  Language = { text:    "Hindi / हिन्दी",                           icon:      ico + "india.png",
                         primary: https + "hopechannelhindi.in",           alternate: yt + "Oky4rbGNIg5dHBNuJvvqgMa2Ii6KpnIe",
                         check:   "hope" }
var in_bho: Language = { text:      "Bhojpuri / भोजपुरी",                    icon:      in_hi.icon,
                         primary: yt + "089YS6WSH25sDH7ER5BgnwS7v7Bg4pCz", alternate: null,
                         check:   "youtube" }
var in_kn:  Language = { text:    "Kannada / ಕನ್ನಡ",                        icon:      in_hi.icon,
                         primary: yt + "gNnLiuGItn9dhgqGspjuaBe8xOgbT6EA", alternate: null,
                         check:   "youtube" }
var in_ml:  Language = { text:    "Malayalam / മലയാളം",                   icon:      in_hi.icon,
                         primary: yt + "vsmbgvwm_ED2XeWPzCTI-kV4NyaPCTIh", alternate: null,
                         check:   "youtube" }
var in_mr:  Language = { text:    "Marathi / मराठी",                        icon:      in_hi.icon,
                         primary: yt + "L4YnkccIwPTGCeaN1rDoowg1t-V7yv3n", alternate: null,
                         check:   "youtube" }
var in_lus: Language = { text:    "Mizo / Duhlián ṭawng",                  icon:      in_hi.icon,
                         primary: yt + "vaZsdR4oRfNV8NzEFVMgksOdrfjHR6Wu", alternate: null,
                         check:   "youtube" }
var in_pa:  Language = { text:    "Punjabi / ਪੰਜਾਬੀ",                        icon:      in_hi.icon,
                         primary: yt + "0msRlgSUO5kNPD-1ldKOzrmBJjs313pR", alternate: null,
                         check:   "youtube" }
var in_sat: Language = { text:    "Santali /ᱥᱟᱱᱛᱟ",                       icon:      in_hi.icon,
                         primary: yt + "ancRlPt_m7dU7XssCvv6N6FtYWnCMgAY", alternate: null,
                         check:   "youtube" }
var in_ta: Language = {  text:    "Tamil / தமிழ்",                         icon:      in_hi.icon,
                         primary: yt + "T_TN2KLM48FtF3rsMUM17sLu4Q-eVu7F", alternate: null,
                         check:   "youtube" }
var in_te: Language = {  text:    "Telugu / తెలుగు",                        icon:      in_hi.icon,
                         primary: yt + "4yGTeBkSwpQFKxOYsw0Vx7PzS53Yv6FH", alternate: null,
                         check:   "youtube" }
var in_as: Language = {  text:      "Assamese / অসমীয়া",                   icon:      in_hi.icon,
                         primary:   egw + "14104.3&index=0",               alternate: null,
                         check:     "egw" }

var ja_ja: Language = { text:    "Japanese / 日本語",    icon:      ico + "japan.png",
                        primary: w3 + "hopechannel.jp", alternate: amazing + "ja/%e3%83%9b%e3%83%bc%e3%83%a0",
                        check:   "hope" }

var ch_zh: Language = { text:    "Chinese / 中文",                    icon:      ico + "china.png",
                        primary: w3 + "glowonline.org/glow-chinese", alternate: w3 + "chinesehope.tv",
                        check:   "glow" }

var ko_ko: Language = { text:    "Korean / 한국어",         icon:      ico + "southKorea.png",
                        primary: https + "hopechannel.kr", alternate: amazing + "ko/%ed%99%88",
                        check:   "hope" }

var ba_bn: Language = { text:    "Bengali / বাংলা",                        icon:      ico + "bangladesh.webp",
                        primary: yt + "vVAlSkq3MXT2bEO9AhxMC2zLl-YWVKc2", alternate: null,
                        check:   "youtube" }

var mo_mn: Language = { text:      "Mongolian / Монгол",                    icon:      ico + "mongolia.webp",
                        primary:   yt + "pa-sOKy3XOg5HlQE78epu5TySblHRr0A", alternate: null,
                        check:     "youtube" }

var np_ne: Language = { text:      "Nepali / नेपाली",                         icon:      ico + "nepal.webp",
                        primary:   yt + "lwfrqmdZg6duWW3JNHAh7JzEKXvkSX-7", alternate: null,
                        check:     "youtube" }

var aa_ar: Language = { text:    "Arabic / العربية",                                                     icon:      ico + "saudiArabia.png",
                        primary: amazing + "ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84", alternate: yt + "WT5oIAjLwXM4WJsRmeK98F4x7P5MupWk",
                        check:   "amazing" }

// oceana
var id_in: Language = { text:     "Indonesian / Bahasa Indonesia", icon:      ico + "indonesia.png",
                        primary:  https + "hopechannel.id",        alternate: w3 + "glowonline.org/glow-indonesian",
                        check:    "hope" }
var id_day: Language = { text:    "Dayak / Dayak",                                 icon:      ico + "indonesia.png",
                         primary: yt + "yKtCIFEspXopT_8PB3Z94nLEb8K2i-Y_&index=3", alternate: id_in.alternate, // replace
                         check:   "youtube" }
var id_jv:  Language = { text:    "Javanese / Basa Jawa",                  icon:      ico + "indonesia.png",
                         primary: yt + "8sdRUaIOJDif3RKihBrX8AyGVwLGB4Lo", alternate: id_in.alternate, // replace
                         check:   "youtube", }

// africa
var et_am: Language = { text:    "Amharic / አማርኛ", icon:      ico + "ethiopia.png",
                        primary: glow + "amharic", alternate: egw + "14077.2&index=0",
                        check:   "glow" }

var ma_mg: Language = { text:      "Malagasy / Malagasy",                   icon:      ico + "madagascar.webp",
                        primary:   yt + "g8tlFOeVN58vwyt7-up5LZDRpdwHcbIa", alternate: null,
                        check:     "youtube" }

var sa_af: Language = { text:      "Afrikaans / Afrikaans", icon:      ico + "southAfrica.webp",
                        primary:   egw + "11589.2&index=0", alternate: null,
                        check:     "egw" }
var sa_ake: Language = { text:      "Akawaio / Akawaio",     icon:      ico + "southAfrica.webp",
                         primary:   egw + "12275.2&index=0", alternate: null,
                         check:     "egw" }

export var languages: Dictionary<Contenent> = {
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
            "pl": po_pl, "uk": uk_uk, "nl": ne_nl, "az": az_az, "ro":  ro_ro,  "cs": cz_cs, "sv": sw_sv, "hu": hu_hu, 
            "sq": al_sq, "bg": bu_bg, "hy": ar_hy, "sk": sl_sk, "fi":  fi_fi,  "et": es_et, "is": ic_is, "no": no_no, 
            "sl": sl_sl, "ab": ab_ab,
        }
    },
    "as": {
        name: "asia",
        languages: {
            "zh": ch_zh, "hi": in_hi, "pa":  in_pa,  "mr":  in_mr,  "te":  in_te,  "ta": in_ta, "bho": in_bho,
            "kn": in_kn, "ml": in_ml, "as":  in_as,  "sat": in_sat, "lus": in_lus, "bn": ba_bn, "ja":  ja_ja, 
            "ko": ko_ko, "tl": ph_tl, "ceb": ph_ceb, "ne":  np_ne,  "mn":  mo_mn,   
            
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
}