import {Language, Dictionary, Contenent} from "./typeDefs"

export class LangList
{
    private https: string = "https://"
    private w3:    string = this.https + "www."

    private glow:    string = this.w3 + "glowonline.org/digital/"
    private amazing: string = this.w3 + "amazingfacts.org/"
    private hope:    string = this.https + "hopetv."
    private egw:     string = this.https + "egwwritings.org/read?panels=p"
    private yt:      string = this.w3 + "youtube.com/playlist?list=PL"

    private ico: string = "countries/"

    // {country code}_{language code}

    // north america
    private us_en: Language = { text:    "English / English",   icon:      this.ico + "us.png",
                                primary: this.glow + "english", alternate: this.hope + "org",
                                check:   "glow" }

    private mx_es: Language = { text:    "Spanish / Español",  icon:      this.ico + "spain.png", 
                                primary: this.glow +"espanol", alternate: this.amazing + "es/inicio/",
                                check:   "glow" }

    // south america
    private br_pt: Language = { text:    "Portuguese / Português",   icon:      this.ico + "brazil.png",
                                primary: this.amazing + "pt/inicio", alternate: this.w3 + "novotempo.com/",
                                check:   "amazing" }

    // europe
    // us_en
    private gb_en: Language = { text:    this.us_en.text,    icon:      this.ico + "gb.webp", 
                                primary: this.us_en.primary, alternate: this.hope + "org.uk",
                                check:   this.us_en.check }

    // mx_es
    private sp_es: Language = this.mx_es

    // br_pt
    private po_pt: Language = { text:    this.br_pt.text,    icon:      this.ico + "portugal.webp",
                                primary: this.br_pt.primary, alternate: this.w3 + "novotempo.pt",
                                check:   this.br_pt.check }

    private fr_fr: Language = { text:    "French / Français",         icon:      this.ico + "france.png",
                                primary: this.amazing + "fr/accueil", alternate: this.https + "hcf.tv",
                                check:   "amazing" }

    private gr_de: Language = { text:    "German / Deutsch", icon:      this.ico + "germany.png",
                                primary: this.hope + "de",   alternate: this.amazing + "de/startseite",
                                check:   "hope" }

    private ru_ru:  Language = { text:    "Russian / Русский",                                            icon:      this.ico + "russia.png",
                                 primary: this.amazing + "ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f", alternate: this.hope + "ru",
                                 check:   "amazing" }
    private ru_alt: Language = { text:    "Altay / Алтай",              icon:      this.ru_ru.icon,
                                 primary: this.egw + "12111.2&index=0", alternate: this.ru_ru.alternate,
                                 check:   "egw" } // replace
    private ru_av:  Language = { text:    "Avar / Авар",                icon:      this.ru_ru.icon,
                                 primary: this.egw + "13992.2&index=0", alternate: this.ru_ru.alternate,
                                 check:   this.ru_ru.check } // replace

    private ro_ro: Language = { text:    "Romanian / Română",                   icon:      this.ico + "romania.png",
                                primary: this.w3 + "glowonline.org/glow-roman", alternate: this.w3 + "sperantatv.ro/",
                                check:   "glow" }

    private uk_uk: Language = { text:    "Ukrainian / Українська",  icon:      this.ico + "ukraine.png",
                                primary: this.https + "tv.hope.ua", alternate: this.w3 + "glowonline.org/gyd/ukrainian",
                                check:   "hope" }

    private ne_nl: Language = { text:    "Dutch / Nederlands",                  icon:      this.ico + "netherlands.png",
                                primary: this.w3 + "glowonline.org/glow-dutch", alternate: this.https + "hopechannel.dk",
                                check:   "glow" }

    private cz_cs: Language = { text:    "Czech / Čeština",                icon:      this.ico + "czech.png",
                                primary: this.w3 + "glowonline.org/czech", alternate: this.hope + "cz",
                                check:   "glow" }

    private hu_hu: Language = { text:    "Hungarian / Magyar",               icon:      this.ico + "hungary.png",
                                primary: this.w3 + "glowonline.org/hungary", alternate: this.https + "remenytv.hu",
                                check:   "glow" }

    private sl_sl: Language = { text:    "Slovenian / Slovenščina",                icon:      this.ico + "slovenia.png",
                                primary: this.w3 + "glowonline.org/glow-slovensk", alternate: null,
                                check:   "glow" }

    private ar_hy: Language = { text:    "Armenian / Հայերեն",                     icon:      this.ico + "armenia.png",
                                primary: this.w3 + "glowonline.org/glow-armenian", alternate: this.egw + "11414.89&index=0",
                                check:   "glow" }

    private no_no: Language = { text:    "Norwegian / Norsk",                   icon:      this.ico + "norway.png",
                                primary: this.w3 + "glowonline.org/norwegian/", alternate: this.https + "hopechannel.no",
                                check:   "glow" }

    private po_pl: Language = { text:    "Polish / Polski",             icon:      this.ico + "poland.png",
                                primary: this.w3 + "glowonline.org/pl", alternate: this.https + "hopechannel.pl",
                                check:   "glow" }

    private it_it: Language = { text:    "Italian / Italiano",        icon:      this.ico + "italy.png",
                            primary: this.https + "hopemedia.it", alternate: this.amazing + "it/casa",
                            check:   "hope" }

    private sl_sk: Language = { text:    "Slovak / Slovenčina",                  icon:      this.ico + "slovakia.png",
                                primary: this.w3 + "glowonline.org/glow-slovak", alternate: null,
                                check:   "glow" }

    private sw_sv: Language = { text:    "Swedish / Svenska",      icon:      this.ico + "sweden.webp",
                                primary: this.amazing + "sv/hem",  alternate: null,
                                check:   "amazing" }

    private ic_is: Language = { text:    "Icelandic / Íslenska",        icon:      this.ico + "iceland.webp",
                                primary: this.https + "hopechannel.is", alternate: null,
                                check:   "hope" }

    private fi_fi: Language = { text:    "Finnish / Suomi",             icon:      this.ico + "finland.webp",
                                primary: this.https + "hopechannel.fi", alternate: null,
                                check:   "hope" }

    private bu_bg: Language = { text:    "Bulgarian / Български",      icon:      this.ico + "bulgaria.webp",
                                primary: this.hope + "bg",             alternate: null,
                                check:   "hope" }

    private es_et: Language = { text:      "Estonian / Eesti",                           icon:      this.ico + "estonia.webp",
                                primary:   this.yt + "ZEr7IMVNuJ-E-RH-shSlCrp2snoBpsHH", alternate: null,
                                check:     "youtube" }

    private ab_ab: Language = { text:    "Abkhazian / Аҧсшәа",         icon:      this.ico + "abkhazia.webp",
                                primary: this.egw + "13987.2&index=0", alternate: null,
                                check:   "egw" }

    private al_sq: Language = { text:    "Albanian / Shqip",           icon:      this.ico + "albania.webp",
                                primary: this.egw + "14649.2&index=0", alternate: null,
                                check:   "egw" }

    private az_az: Language = { text:    "Azerbaijani / Azərbaycan dili",      icon:      this.ico + "azerbaijan.webp",
                                primary: this.egw + "13958.2&index=0",         alternate: null,
                                check:   "egw" }
    
    private de_da: Language = { text:       "Danish / Dansk",             icon: this.ico + "denmark.webp",
                                primary:    this.egw + "11362.3&index=0", alternate: null,
                                check:      "egw" }

    // asia
    private ph_tl: Language = { text:    "Tagalog / Tagalog",                    icon:      this.ico + "philippines.png",
                                primary: this.w3 + "glowonline.org/gyd/tagalog", alternate: this.hope + "ph",
                                check:   "glow" }
    private ph_ceb: Language = { text:    "Cebuano / Cebuano",      icon:      this.ph_tl.icon,
                                 primary: this.hope + "ph",         alternate: this.yt + "3G8y_le8ywcmP5itbBKMjfnONkaffZag",
                                 check:   "hope" }

    private in_hi:  Language = { text:    "Hindi / हिन्दी",                                icon:      this.ico + "india.png",
                                 primary: this.https + "hopechannelhindi.in",           alternate: this.yt + "Oky4rbGNIg5dHBNuJvvqgMa2Ii6KpnIe",
                                 check:   "hope" }
    private in_bho: Language = { text:      "Bhojpuri / भोजपुरी",                         icon:      this.in_hi.icon,
                                 primary: this.yt + "089YS6WSH25sDH7ER5BgnwS7v7Bg4pCz", alternate: null,
                                 check:   "youtube" }
    private in_kn:  Language = { text:    "Kannada / ಕನ್ನಡ",                             icon:      this.in_hi.icon,
                                 primary: this.yt + "gNnLiuGItn9dhgqGspjuaBe8xOgbT6EA", alternate: null,
                                 check:   "youtube" }
    private in_ml:  Language = { text:    "Malayalam / മലയാളം",                        icon:      this.in_hi.icon,
                                 primary: this.yt + "vsmbgvwm_ED2XeWPzCTI-kV4NyaPCTIh", alternate: null,
                                 check:   "youtube" }
    private in_mr:  Language = { text:    "Marathi / मराठी",                             icon:      this.in_hi.icon,
                                 primary: this.yt + "L4YnkccIwPTGCeaN1rDoowg1t-V7yv3n", alternate: null,
                                 check:   "youtube" }
    private in_lus: Language = { text:    "Mizo / Duhlián ṭawng",                       icon:      this.in_hi.icon,
                                 primary: this.yt + "vaZsdR4oRfNV8NzEFVMgksOdrfjHR6Wu", alternate: null,
                                 check:   "youtube" }
    private in_pa:  Language = { text:    "Punjabi / ਪੰਜਾਬੀ",                             icon:      this.in_hi.icon,
                                 primary: this.yt + "0msRlgSUO5kNPD-1ldKOzrmBJjs313pR", alternate: null,
                                 check:   "youtube" }
    private in_sat: Language = { text:    "Santali /ᱥᱟᱱᱛᱟ",                            icon:      this.in_hi.icon,
                                 primary: this.yt + "ancRlPt_m7dU7XssCvv6N6FtYWnCMgAY", alternate: null,
                                 check:   "youtube" }
    private in_ta: Language = {  text:    "Tamil / தமிழ்",                              icon:      this.in_hi.icon,
                                 primary: this.yt + "T_TN2KLM48FtF3rsMUM17sLu4Q-eVu7F", alternate: null,
                                 check:   "youtube" }
    private in_te: Language = {  text:    "Telugu / తెలుగు",                             icon:      this.in_hi.icon,
                                 primary: this.yt + "4yGTeBkSwpQFKxOYsw0Vx7PzS53Yv6FH", alternate: null,
                                 check:   "youtube" }
    private in_as: Language = {  text:      "Assamese / অসমীয়া",                        icon:      this.in_hi.icon,
                                 primary:   this.egw + "14104.3&index=0",               alternate: null,
                                 check:     "egw" }

    private ja_ja: Language = { text:    "Japanese / 日本語",         icon:      this.ico + "japan.png",
                                primary: this.w3 + "hopechannel.jp", alternate: this.amazing + "ja/%e3%83%9b%e3%83%bc%e3%83%a0",
                                check:   "hope" }

    private ch_zh: Language = { text:    "Chinese / 中文",                         icon:      this.ico + "china.png",
                                primary: this.w3 + "glowonline.org/glow-chinese", alternate: this.w3 + "chinesehope.tv",
                                check:   "glow" }

    private ko_ko: Language = { text:    "Korean / 한국어",              icon:      this.ico + "southKorea.png",
                                primary: this.https + "hopechannel.kr", alternate: this.amazing + "ko/%ed%99%88",
                                check:   "hope" }

    private ba_bn: Language = { text:    "Bengali / বাংলা",                             icon:      this.ico + "bangladesh.webp",
                                primary: this.yt + "vVAlSkq3MXT2bEO9AhxMC2zLl-YWVKc2", alternate: null,
                                check:   "youtube" }

    private mo_mn: Language = { text:      "Mongolian / Монгол",                         icon:      this.ico + "mongolia.webp",
                                primary:   this.yt + "pa-sOKy3XOg5HlQE78epu5TySblHRr0A", alternate: null,
                                check:     "youtube" }

    private np_ne: Language = { text:      "Nepali / नेपाली",                              icon:      this.ico + "nepal.webp",
                                primary:   this.yt + "lwfrqmdZg6duWW3JNHAh7JzEKXvkSX-7", alternate: null,
                                check:     "youtube" }

    private aa_ar: Language = { text:    "Arabic / العربية",                                                          icon:      this.ico + "saudiArabia.png",
                                primary: this.amazing + "ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84", alternate: this.yt + "WT5oIAjLwXM4WJsRmeK98F4x7P5MupWk",
                                check:   "amazing" }

    // oceana
    private id_in: Language = { text:     "Indonesian / Bahasa Indonesia",      icon:      this.ico + "indonesia.png",
                                primary:  this.https + "hopechannel.id",        alternate: this.w3 + "glowonline.org/glow-indonesian",
                                check:    "hope" }
    private id_day: Language = { text:    "Dayak / Dayak",                                      icon:      this.ico + "indonesia.png",
                                 primary: this.yt + "yKtCIFEspXopT_8PB3Z94nLEb8K2i-Y_&index=3", alternate: this.id_in.alternate, // replace
                                 check:   "youtube" }
    private id_jv:  Language = { text:    "Javanese / Basa Jawa",                       icon:      this.ico + "indonesia.png",
                                 primary: this.yt + "8sdRUaIOJDif3RKihBrX8AyGVwLGB4Lo", alternate: this.id_in.alternate, // replace
                                 check:   "youtube", }

    // africa
    private et_am: Language = { text:    "Amharic / አማርኛ",      icon:      this.ico + "ethiopia.png",
                                primary: this.glow + "amharic", alternate: this.egw + "14077.2&index=0",
                                check:   "glow" }

    private ma_mg: Language = { text:      "Malagasy / Malagasy",                        icon:      this.ico + "madagascar.webp",
                                primary:   this.yt + "g8tlFOeVN58vwyt7-up5LZDRpdwHcbIa", alternate: null,
                                check:     "youtube" }

    private sa_af: Language = { text:      "Afrikaans / Afrikaans",      icon:      this.ico + "southAfrica.webp",
                                primary:   this.egw + "11589.2&index=0", alternate: null,
                                check:     "egw" }
    private sa_ake: Language = { text:      "Akawaio / Akawaio",          icon:      this.ico + "southAfrica.webp",
                                 primary:   this.egw + "12275.2&index=0", alternate: null,
                                 check:     "egw" }

    public langList: Dictionary<Contenent> = {
        "common": {
            name: "Suggested",
            languages: {
                "en": this.us_en, "sp": this.sp_es,
            }
        },
        "na": {
            name: "North America",
            languages: {
                "en": this.us_en, "es": this.mx_es,
            }
        },
        "sa": {
            name: "South America",
            languages: {
                "pt": this.br_pt,
            }
        },
        "eu": {
            name: "Europe",
            languages: {
                "en": this.gb_en, "fr": this.fr_fr, "pt": this.po_pt, "ru": this.ru_ru, "alt": this.ru_alt, "av": this.ru_av, "de": this.gr_de, "it": this.it_it, 
                "pl": this.po_pl, "uk": this.uk_uk, "nl": this.ne_nl, "az": this.az_az, "ro":  this.ro_ro,  "cs": this.cz_cs, "sv": this.sw_sv, "hu": this.hu_hu, 
                "sq": this.al_sq, "bg": this.bu_bg, "hy": this.ar_hy, "sk": this.sl_sk, "fi":  this.fi_fi,  "et": this.es_et, "is": this.ic_is, "no": this.no_no, 
                "sl": this.sl_sl, "ab": this.ab_ab, "da": this.de_da
            }
        },
        "as": {
            name: "asia",
            languages: {
                "zh": this.ch_zh, "hi": this.in_hi, "pa":  this.in_pa,  "mr":  this.in_mr,  "te":  this.in_te,  "ta": this.in_ta, "bho": this.in_bho,
                "kn": this.in_kn, "ml": this.in_ml, "as":  this.in_as,  "sat": this.in_sat, "lus": this.in_lus, "bn": this.ba_bn, "ja":  this.ja_ja, 
                "ko": this.ko_ko, "tl": this.ph_tl, "ceb": this.ph_ceb, "ne":  this.np_ne,  "mn":  this.mo_mn,   

            }
        },
        "me": {
            name: "middle-east",
            languages: {
                "ar": this.aa_ar,
            }
        },
        "oc": {
            name: "oceania",
            languages: {
                "in": this.id_in, "day": this.id_day, "jv": this.id_jv,
            }
        },
        "af": {
            name: "africa",
            languages: {
                "am": this.et_am, "mg": this.ma_mg, "af": this.sa_af, "ake": this.sa_ake,
            }
        },
    }

    public availability: {[id: string]: boolean} = {
        "glow":    false,
        "hope":    false,
        "amazing": false,
        "egw":     false,
        "youtube": true,
    }
}