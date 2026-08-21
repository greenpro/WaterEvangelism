"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangList = void 0;
class LangList {
    constructor() {
        this.https = "https://";
        this.w3 = this.https + "www.";
        this.glow = this.w3 + "glowonline.org/digital/";
        this.amazing = this.w3 + "amazingfacts.org/";
        this.hope = this.https + "hopetv.";
        this.egw = this.https + "egwwritings.org/read?panels=p";
        this.yt = this.w3 + "youtube.com/playlist?list=PL";
        // {country code}_{language code}
        // north america
        this.us_en = { text: "English / English", icon: "us.png",
            primary: this.glow + "english", alternate: this.hope + "org",
            check: "glow" };
        this.mx_es = { text: "Spanish / Español", icon: "spain.png",
            primary: this.glow + "espanol", alternate: this.amazing + "es/inicio/",
            check: "glow" };
        // south america
        this.br_pt = { text: "Portuguese / Português", icon: "brazil.png",
            primary: this.amazing + "pt/inicio", alternate: this.w3 + "novotempo.com/",
            check: "amazing" };
        // europe
        // us_en
        this.gb_en = { text: this.us_en.text, icon: "gb.webp",
            primary: this.us_en.primary, alternate: this.hope + "org.uk",
            check: this.us_en.check };
        // mx_es
        this.sp_es = this.mx_es;
        // br_pt
        this.po_pt = { text: this.br_pt.text, icon: "portugal.webp",
            primary: this.br_pt.primary, alternate: this.w3 + "novotempo.pt",
            check: this.br_pt.check };
        this.fr_fr = { text: "French / Français", icon: "france.png",
            primary: this.amazing + "fr/accueil", alternate: this.https + "hcf.tv",
            check: "amazing" };
        this.gr_de = { text: "German / Deutsch", icon: "germany.png",
            primary: this.hope + "de", alternate: this.amazing + "de/startseite",
            check: "hope" };
        this.ru_ru = { text: "Russian / Русский", icon: "russia.png",
            primary: this.amazing + "ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f", alternate: this.hope + "ru",
            check: "amazing" };
        this.ru_alt = { text: "Altay / Алтай", icon: this.ru_ru.icon,
            primary: this.egw + "12111.2&index=0", alternate: this.ru_ru.alternate,
            check: "egw" }; // replace
        this.ru_av = { text: "Avar / Авар", icon: this.ru_ru.icon,
            primary: this.egw + "13992.2&index=0", alternate: this.ru_ru.alternate,
            check: this.ru_ru.check }; // replace
        this.ro_ro = { text: "Romanian / Română", icon: "romania.png",
            primary: this.w3 + "glowonline.org/glow-roman", alternate: this.w3 + "sperantatv.ro/",
            check: "glow" };
        this.uk_uk = { text: "Ukrainian / Українська", icon: "ukraine.png",
            primary: this.https + "tv.hope.ua", alternate: this.w3 + "glowonline.org/gyd/ukrainian",
            check: "hope" };
        this.ne_nl = { text: "Dutch / Nederlands", icon: "netherlands.png",
            primary: this.w3 + "glowonline.org/glow-dutch", alternate: this.https + "hopechannel.dk",
            check: "glow" };
        this.cz_cs = { text: "Czech / Čeština", icon: "czech.png",
            primary: this.w3 + "glowonline.org/czech", alternate: this.hope + "cz",
            check: "glow" };
        this.hu_hu = { text: "Hungarian / Magyar", icon: "hungary.png",
            primary: this.w3 + "glowonline.org/hungary", alternate: this.https + "remenytv.hu",
            check: "glow" };
        this.sl_sl = { text: "Slovenian / Slovenščina", icon: "slovenia.png",
            primary: this.w3 + "glowonline.org/glow-slovensk", alternate: null,
            check: "glow" };
        this.ar_hy = { text: "Armenian / Հայերեն", icon: "armenia.png",
            primary: this.w3 + "glowonline.org/glow-armenian", alternate: this.egw + "11414.89&index=0",
            check: "glow" };
        this.no_no = { text: "Norwegian / Norsk", icon: "norway.png",
            primary: this.w3 + "glowonline.org/norwegian/", alternate: this.https + "hopechannel.no",
            check: "glow" };
        this.po_pl = { text: "Polish / Polski", icon: "poland.png",
            primary: this.w3 + "glowonline.org/pl", alternate: this.https + "hopechannel.pl",
            check: "glow" };
        this.it_it = { text: "Italian / Italiano", icon: "italy.png",
            primary: this.https + "hopemedia.it", alternate: this.amazing + "it/casa",
            check: "hope" };
        this.sl_sk = { text: "Slovak / Slovenčina", icon: "slovakia.png",
            primary: this.w3 + "glowonline.org/glow-slovak", alternate: null,
            check: "glow" };
        this.sw_sv = { text: "Swedish / Svenska", icon: "sweden.webp",
            primary: this.amazing + "sv/hem", alternate: null,
            check: "amazing" };
        this.ic_is = { text: "Icelandic / Íslenska", icon: "iceland.webp",
            primary: this.https + "hopechannel.is", alternate: null,
            check: "hope" };
        this.fi_fi = { text: "Finnish / Suomi", icon: "finland.webp",
            primary: this.https + "hopechannel.fi", alternate: null,
            check: "hope" };
        this.bu_bg = { text: "Bulgarian / Български", icon: "bulgaria.webp",
            primary: this.hope + "bg", alternate: null,
            check: "hope" };
        this.es_et = { text: "Estonian / Eesti", icon: "estonia.webp",
            primary: this.yt + "ZEr7IMVNuJ-E-RH-shSlCrp2snoBpsHH", alternate: null,
            check: "youtube" };
        this.ab_ab = { text: "Abkhazian / Аҧсшәа", icon: "abkhazia.webp",
            primary: this.egw + "13987.2&index=0", alternate: null,
            check: "egw" };
        this.al_sq = { text: "Albanian / Shqip", icon: "albania.webp",
            primary: this.egw + "14649.2&index=0", alternate: null,
            check: "egw" };
        this.az_az = { text: "Azerbaijani / Azərbaycan dili", icon: "azerbaijan.webp",
            primary: this.egw + "13958.2&index=0", alternate: null,
            check: "egw" };
        this.de_da = { text: "Danish / Dansk", icon: "denmark.webp",
            primary: this.egw + "11362.3&index=0", alternate: null,
            check: "egw" };
        // asia
        this.ph_tl = { text: "Tagalog / Tagalog", icon: "philippines.png",
            primary: this.w3 + "glowonline.org/gyd/tagalog", alternate: this.hope + "ph",
            check: "glow" };
        this.ph_ceb = { text: "Cebuano / Cebuano", icon: this.ph_tl.icon,
            primary: this.hope + "ph", alternate: this.yt + "3G8y_le8ywcmP5itbBKMjfnONkaffZag",
            check: "hope" };
        this.in_hi = { text: "Hindi / हिन्दी", icon: "india.png",
            primary: this.https + "hopechannelhindi.in", alternate: this.yt + "Oky4rbGNIg5dHBNuJvvqgMa2Ii6KpnIe",
            check: "hope" };
        this.in_ur = { text: "Urdu / اُردُو", icon: this.in_hi.icon,
            primary: this.egw + "11848.2&index=0", alternate: null,
            check: "egw" };
        this.in_bho = { text: "Bhojpuri / भोजपुरी", icon: this.in_hi.icon,
            primary: this.yt + "089YS6WSH25sDH7ER5BgnwS7v7Bg4pCz", alternate: null,
            check: "youtube" };
        this.in_kn = { text: "Kannada / ಕನ್ನಡ", icon: this.in_hi.icon,
            primary: this.yt + "gNnLiuGItn9dhgqGspjuaBe8xOgbT6EA", alternate: null,
            check: "youtube" };
        this.in_ml = { text: "Malayalam / മലയാളം", icon: this.in_hi.icon,
            primary: this.yt + "vsmbgvwm_ED2XeWPzCTI-kV4NyaPCTIh", alternate: null,
            check: "youtube" };
        this.in_mr = { text: "Marathi / मराठी", icon: this.in_hi.icon,
            primary: this.yt + "L4YnkccIwPTGCeaN1rDoowg1t-V7yv3n", alternate: null,
            check: "youtube" };
        this.in_lus = { text: "Mizo / Duhlián ṭawng", icon: this.in_hi.icon,
            primary: this.yt + "vaZsdR4oRfNV8NzEFVMgksOdrfjHR6Wu", alternate: null,
            check: "youtube" };
        this.in_pa = { text: "Punjabi / ਪੰਜਾਬੀ", icon: this.in_hi.icon,
            primary: this.yt + "0msRlgSUO5kNPD-1ldKOzrmBJjs313pR", alternate: null,
            check: "youtube" };
        this.in_sat = { text: "Santali /ᱥᱟᱱᱛᱟ", icon: this.in_hi.icon,
            primary: this.yt + "ancRlPt_m7dU7XssCvv6N6FtYWnCMgAY", alternate: null,
            check: "youtube" };
        this.in_ta = { text: "Tamil / தமிழ்", icon: this.in_hi.icon,
            primary: this.yt + "T_TN2KLM48FtF3rsMUM17sLu4Q-eVu7F", alternate: null,
            check: "youtube" };
        this.in_te = { text: "Telugu / తెలుగు", icon: this.in_hi.icon,
            primary: this.yt + "4yGTeBkSwpQFKxOYsw0Vx7PzS53Yv6FH", alternate: null,
            check: "youtube" };
        this.in_as = { text: "Assamese / অসমীয়া", icon: this.in_hi.icon,
            primary: this.egw + "14104.3&index=0", alternate: null,
            check: "egw" };
        this.ja_ja = { text: "Japanese / 日本語", icon: "japan.png",
            primary: this.w3 + "hopechannel.jp", alternate: this.amazing + "ja/%e3%83%9b%e3%83%bc%e3%83%a0",
            check: "hope" };
        this.ch_zh = { text: "Chinese / 中文", icon: "china.png",
            primary: this.w3 + "glowonline.org/glow-chinese", alternate: this.w3 + "chinesehope.tv",
            check: "glow" };
        this.ko_ko = { text: "Korean / 한국어", icon: "southKorea.png",
            primary: this.https + "hopechannel.kr", alternate: this.amazing + "ko/%ed%99%88",
            check: "hope" };
        this.ba_bn = { text: "Bengali / বাংলা", icon: "bangladesh.webp",
            primary: this.yt + "vVAlSkq3MXT2bEO9AhxMC2zLl-YWVKc2", alternate: null,
            check: "youtube" };
        this.mo_mn = { text: "Mongolian / Монгол", icon: "mongolia.webp",
            primary: this.yt + "pa-sOKy3XOg5HlQE78epu5TySblHRr0A", alternate: null,
            check: "youtube" };
        this.np_ne = { text: "Nepali / नेपाली", icon: "nepal.webp",
            primary: this.yt + "lwfrqmdZg6duWW3JNHAh7JzEKXvkSX-7", alternate: null,
            check: "youtube" };
        this.aa_ar = { text: "Arabic / العربية", icon: "saudiArabia.png",
            primary: this.amazing + "ar/%d8%b9%d9%85%d9%84-%d8%a7%d9%84%d8%b1%d8%a7%d8%a6%d9%84", alternate: this.yt + "WT5oIAjLwXM4WJsRmeK98F4x7P5MupWk",
            check: "amazing" };
        // oceana
        this.id_in = { text: "Indonesian / Bahasa Indonesia", icon: "indonesia.png",
            primary: this.https + "hopechannel.id", alternate: this.w3 + "glowonline.org/glow-indonesian",
            check: "hope" };
        this.id_day = { text: "Dayak / Dayak", icon: "indonesia.png",
            primary: this.yt + "yKtCIFEspXopT_8PB3Z94nLEb8K2i-Y_&index=3", alternate: this.id_in.alternate, // replace
            check: "youtube" };
        this.id_jv = { text: "Javanese / Basa Jawa", icon: "indonesia.png",
            primary: this.yt + "8sdRUaIOJDif3RKihBrX8AyGVwLGB4Lo", alternate: this.id_in.alternate, // replace
            check: "youtube", };
        // africa
        this.et_am = { text: "Amharic / አማርኛ", icon: "ethiopia.png",
            primary: this.glow + "amharic", alternate: this.egw + "14077.2&index=0",
            check: "glow" };
        this.ma_mg = { text: "Malagasy / Malagasy", icon: "madagascar.webp",
            primary: this.yt + "g8tlFOeVN58vwyt7-up5LZDRpdwHcbIa", alternate: null,
            check: "youtube" };
        this.sa_af = { text: "Afrikaans / Afrikaans", icon: "southAfrica.webp",
            primary: this.egw + "11589.2&index=0", alternate: null,
            check: "egw" };
        this.sa_ake = { text: "Akawaio / Akawaio", icon: "southAfrica.webp",
            primary: this.egw + "12275.2&index=0", alternate: null,
            check: "egw" };
        this.langList = {
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
                    "pl": this.po_pl, "uk": this.uk_uk, "nl": this.ne_nl, "az": this.az_az, "ro": this.ro_ro, "cs": this.cz_cs, "sv": this.sw_sv, "hu": this.hu_hu,
                    "sq": this.al_sq, "bg": this.bu_bg, "hy": this.ar_hy, "sk": this.sl_sk, "fi": this.fi_fi, "et": this.es_et, "is": this.ic_is, "no": this.no_no,
                    "sl": this.sl_sl, "ab": this.ab_ab, "da": this.de_da
                }
            },
            "as": {
                name: "asia",
                languages: {
                    "zh": this.ch_zh, "hi": this.in_hi, "ur": this.in_ur, "pa": this.in_pa, "mr": this.in_mr, "te": this.in_te, "ta": this.in_ta,
                    "bho": this.in_bho, "kn": this.in_kn, "ml": this.in_ml, "as": this.in_as, "sat": this.in_sat, "lus": this.in_lus, "bn": this.ba_bn,
                    "ja": this.ja_ja, "ko": this.ko_ko, "tl": this.ph_tl, "ceb": this.ph_ceb, "ne": this.np_ne, "mn": this.mo_mn
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
        };
    }
}
exports.LangList = LangList;
LangList.availability = {
    "glow": false,
    "hope": false,
    "amazing": false,
    "egw": false,
    "youtube": true,
};
