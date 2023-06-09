/*
 * Updated Script!
 * Thanks for taking interest in this script

 * For more information visit: https://www.technicalarp.com/
 * NOTE: Installation and usage are posted on our website, kindly visit website and search for privacy policy generator Script or
   disclaimer generator or even terms and conditions generator script.
 
 * Copyright (c) 2021 www.technicalarp.com
 * Released under the Creative Commons Attribution-ShareAlike 3.0 Unported License.
  
 * Use this script with proper credit so don't remove footer credit of our website and for more detail visit www.technicalarp.com website for more scripts.

 * Also If you want to give some suggestions or want some modification or anything related to script then visit our website and contact us anytime

 * Below code may content some encrypted lines but nothing harmful. Why? because I am providing it for free so I don't want people to remove my credit
 * even though it is Under Creative Commons License but still many people may remove my credit. That's the reason. Please support us so that we can create such useful scripts.
*/

//<![CDATA[
    (function () {
        var SCROLL_TIME = 200;
        var SCROLL_GRANULARITY = 20;
        var COUNTRY = "";
        var LANG = "en";
        var ALL_COUNTRIES = {"aw": "Aruba", "af": "Afghanistan", "ao": "Angola", "ai": "Anguilla", "ax": "\u00c5land Islands", "al": "Albania", "ad": "Andorra", "ae": "United Arab Emirates", "ar": "Argentina", "am": "Armenia", "as": "American Samoa", "aq": "Antarctica", "tf": "French Southern Territories", "ag": "Antigua & Barbuda", "au": "Australia", "at": "Austria", "az": "Azerbaijan", "bi": "Burundi", "be": "Belgium", "bj": "Benin", "bq": "Caribbean Netherlands", "bf": "Burkina Faso", "bd": "Bangladesh", "bg": "Bulgaria", "bh": "Bahrain", "bs": "Bahamas", "ba": "Bosnia & Herzegovina", "bl": "St. Barth\u00e9lemy", "by": "Belarus", "bz": "Belize", "bm": "Bermuda", "bo": "Bolivia", "br": "Brazil", "bb": "Barbados", "bn": "Brunei", "bt": "Bhutan", "bv": "Bouvet Island", "bw": "Botswana", "cf": "Central African Republic", "ca": "Canada", "cc": "Cocos (Keeling) Islands", "ch": "Switzerland", "cl": "Chile", "cn": "China", "ci": "C\u00f4te d\u2019Ivoire", "cm": "Cameroon", "cd": "Congo - Kinshasa", "cg": "Congo - Brazzaville", "ck": "Cook Islands", "co": "Colombia", "km": "Comoros", "cv": "Cape Verde", "cr": "Costa Rica", "cu": "Cuba", "cw": "Cura\u00e7ao", "cx": "Christmas Island", "ky": "Cayman Islands", "cy": "Cyprus", "cz": "Czechia", "de": "Germany", "dj": "Djibouti", "dm": "Dominica", "dk": "Denmark", "do": "Dominican Republic", "dz": "Algeria", "ec": "Ecuador", "eg": "Egypt", "er": "Eritrea", "eh": "Western Sahara", "es": "Spain", "ee": "Estonia", "et": "Ethiopia", "fi": "Finland", "fj": "Fiji", "fk": "Falkland Islands", "fr": "France", "fo": "Faroe Islands", "fm": "Micronesia", "ga": "Gabon", "gb": "United Kingdom", "ge": "Georgia", "gg": "Guernsey", "gh": "Ghana", "gi": "Gibraltar", "gn": "Guinea", "gp": "Guadeloupe", "gm": "Gambia", "gw": "Guinea-Bissau", "gq": "Equatorial Guinea", "gr": "Greece", "gd": "Grenada", "gl": "Greenland", "gt": "Guatemala", "gf": "French Guiana", "gu": "Guam", "gy": "Guyana", "hk": "Hong Kong SAR China", "hm": "Heard & McDonald Islands", "hn": "Honduras", "hr": "Croatia", "ht": "Haiti", "hu": "Hungary", "id": "Indonesia", "im": "Isle of Man", "in": "India", "io": "British Indian Ocean Territory", "ie": "Ireland", "ir": "Iran", "iq": "Iraq", "is": "Iceland", "il": "Israel", "it": "Italy", "jm": "Jamaica", "je": "Jersey", "jo": "Jordan", "jp": "Japan", "kz": "Kazakhstan", "ke": "Kenya", "kg": "Kyrgyzstan", "kh": "Cambodia", "ki": "Kiribati", "kn": "St. Kitts & Nevis", "kr": "South Korea", "kw": "Kuwait", "la": "Laos", "lb": "Lebanon", "lr": "Liberia", "ly": "Libya", "lc": "St. Lucia", "li": "Liechtenstein", "lk": "Sri Lanka", "ls": "Lesotho", "lt": "Lithuania", "lu": "Luxembourg", "lv": "Latvia", "mo": "Macao SAR China", "mf": "St. Martin", "ma": "Morocco", "mc": "Monaco", "md": "Moldova", "mg": "Madagascar", "mv": "Maldives", "mx": "Mexico", "mh": "Marshall Islands", "mk": "North Macedonia", "ml": "Mali", "mt": "Malta", "mm": "Myanmar (Burma)", "me": "Montenegro", "mn": "Mongolia", "mp": "Northern Mariana Islands", "mz": "Mozambique", "mr": "Mauritania", "ms": "Montserrat", "mq": "Martinique", "mu": "Mauritius", "mw": "Malawi", "my": "Malaysia", "yt": "Mayotte", "na": "Namibia", "nc": "New Caledonia", "ne": "Niger", "nf": "Norfolk Island", "ng": "Nigeria", "ni": "Nicaragua", "nu": "Niue", "nl": "Netherlands", "no": "Norway", "np": "Nepal", "nr": "Nauru", "nz": "New Zealand", "om": "Oman", "pk": "Pakistan", "pa": "Panama", "pn": "Pitcairn Islands", "pe": "Peru", "ph": "Philippines", "pw": "Palau", "pg": "Papua New Guinea", "pl": "Poland", "pr": "Puerto Rico", "kp": "North Korea", "pt": "Portugal", "py": "Paraguay", "ps": "Palestinian Territories", "pf": "French Polynesia", "qa": "Qatar", "re": "R\u00e9union", "ro": "Romania", "ru": "Russia", "rw": "Rwanda", "sa": "Saudi Arabia", "sd": "Sudan", "sn": "Senegal", "sg": "Singapore", "gs": "South Georgia & South Sandwich Islands", "sh": "St. Helena", "sj": "Svalbard & Jan Mayen", "sb": "Solomon Islands", "sl": "Sierra Leone", "sv": "El Salvador", "sm": "San Marino", "so": "Somalia", "pm": "St. Pierre & Miquelon", "rs": "Serbia", "ss": "South Sudan", "st": "S\u00e3o Tom\u00e9 & Pr\u00edncipe", "sr": "Suriname", "sk": "Slovakia", "si": "Slovenia", "se": "Sweden", "sz": "Eswatini", "sx": "Sint Maarten", "sc": "Seychelles", "sy": "Syria", "tc": "Turks & Caicos Islands", "td": "Chad", "tg": "Togo", "th": "Thailand", "tj": "Tajikistan", "tk": "Tokelau", "tm": "Turkmenistan", "tl": "Timor-Leste", "to": "Tonga", "tt": "Trinidad & Tobago", "tn": "Tunisia", "tr": "Turkey", "tv": "Tuvalu", "tw": "Taiwan", "tz": "Tanzania", "ug": "Uganda", "ua": "Ukraine", "um": "U.S. Outlying Islands", "uy": "Uruguay", "us": "United States", "uz": "Uzbekistan", "va": "Vatican City", "vc": "St. Vincent & Grenadines", "ve": "Venezuela", "vg": "British Virgin Islands", "vi": "U.S. Virgin Islands", "vn": "Vietnam", "vu": "Vanuatu", "wf": "Wallis & Futuna", "ws": "Samoa", "ye": "Yemen", "za": "South Africa", "zm": "Zambia", "zw": "Zimbabwe"};
        var EMPTY_COUNTRY = false;

        function show(el) {
            el.style.display = "";
        }

        function hide(el) {
            el.style.display = "none";
        }

        function getRadioValue(name, def) {
            var e = document.querySelectorAll("input[name='" + name + "']");
            if (e.length < 1) {
                return def;
            }
            var ret = [];
            for (var idx = 0; idx < e.length; ++idx) {
                var el = e[idx];
                if (el.checked) {
                    ret.push(el.value);
                }
            }
            return ret;
        }

        function toggleClass(element, toggleClass) {
            var currentClass = element.className;
            var newClass;
            if (hasClass(element, toggleClass)) {
                newClass = currentClass.replace(new RegExp('\\b' + toggleClass + '\\b', 'g'), "")
            } else {
                newClass = currentClass + " " + toggleClass;
            }
            element.className = newClass.trim();
        }

        function hasClass(el, c) {
            return el.className.split(" ").indexOf(c) > -1;
        }

        function addClass(el, c) {
            if (!hasClass(el, c)) {
                el.className = (el.className + " " + c).trim();
            }
        }

        function removeClass(el, c) {
            if (hasClass(el, c)) {
                el.className = el.className.replace(new RegExp('\\b' + c + '\\b', 'g'), "").trim();
            }
        }

        function hasClassPrefix(el, p) {
            var classes = el.className.split(" ");
            var l = p.length;
            var cmp;
            for (var e in classes) {
                cmp = classes[e];
                if (cmp.substring(0, l) === p) {
                    return parseInt(cmp.substring(l));
                }
            }
            return false;
        }

        function evalCondition(c, def) {
            var r = /(.*)(==|!=|\||!\|)(.*)/;
            c = r.exec(c);
            var eName = c[1].trim();
            var eq = c[2];
            var v = c[3];
            if (typeof v === "undefined") {
                v = "true";
            } else {
                v = v.trim();
            }
            if (typeof eq === "undefined") {
                eq = "==";
            }
            var e;
            e = document.getElementsByName(eName);
            if (e.length < 1) {
                eName += "[]";
                e = document.getElementsByName(eName);
            }
            if (e.length > 1) {
                e = getRadioValue(eName, "");
            }
            else if (e.length === 1) {
                e = e[0];
                if (e.matches("input[type='checkbox']")) {
                    v = v === "true" ? true : v;
                    v = v === "false" ? false : v;
                    if (eq === "==") {
                        return e.checked == v;
                    }
                    return e.checked != v;
                } else {
                    e = e.value;
                }
            }
            else {
                if (eName === "country[]") {
                    e = COUNTRY;
                }
                else if (eName === "lang[]") {
                    e = LANG;
                }
                else {
                    console.log("Control not found: " + eName);
                    return def;
                }
            }
            if (typeof e === "object" && Object.prototype.toString.call(e) !== '[object Array]') {
                if (eq === "==") {
                    return e.indexOf(v) >= 0;
                }
                return e.indexOf(v) < 0;
            }
            if (eq === "|" || eq === "!|") {
                v = v.split(",").map(function (x) {
                    return x.trim();
                });
                if (Object.prototype.toString.call(v) !== '[object Array]') {
                    v = [v];
                }
                if (Object.prototype.toString.call(e) !== '[object Array]') {
                    e = [e];
                }
                for (var ke in e) {
                    var ve = "" + e[ke];
                    if (eq === "|") {
                        if (v.indexOf(ve) >= 0) {
                            return true;
                        }
                    } else if (eq === "!|") {
                        if (v.indexOf(ve) < 0) {
                            return true;
                        }
                    }
                }
                return false;
            } else if (eq === "==") {
                return e == v;
            } else if (eq === "===") {
                return e === v;
            } else if (eq === "!==") {
                return e !== v;
            }
            return e != v;
        }

        function isVisible(el) {
            return (parseInt(el.offsetWidth) > 0) && (parseInt(el.offsetHeight) > 0);
        }

        function updateSections() {
            [].forEach.call(document.querySelectorAll("wlg_section"), function (el) {
                var s = el.getAttribute("showif");
                var h = el.getAttribute("hideif");
                var v;
                if (s) {
                    v = evalCondition(s, false);
                } else if (h) {
                    v = !evalCondition(h, true);
                }
                if (typeof v != "undefined") {
                    v ? show(el) : hide(el);
                }
            });
            if (typeof updateCountry != "undefined") {
                updateCountry();
            }
        }

        function updateListeners(selector) {
            var controls = document.querySelectorAll(selector);
            [].forEach.call(controls, function (el) {
                [].forEach.call(el.querySelectorAll("input[type='radio'], input[type='checkbox']"), function (control) {
                    control.addEventListener("click", updateSections);
                });
                [].forEach.call(el.querySelectorAll("select"), function (control) {
                    control.addEventListener("change", updateSections);
                });
            });
        }

        updateListeners(".wlg-form-control");

        var state_selector = document.querySelector("#wlg_form [name='state']");
        var STATES = {"af": {"af-bal": "Balkh", "af-bam": "B\u0101my\u0101n", "af-bdg": "B\u0101dgh\u012bs", "af-bds": "Badakhsh\u0101n", "af-bgl": "Baghl\u0101n", "af-day": "D\u0101ykund\u012b", "af-fra": "Far\u0101h", "af-fyb": "F\u0101ry\u0101b", "af-gha": "Ghazn\u012b", "af-gho": "Gh\u014dr", "af-hel": "Helmand", "af-her": "Her\u0101t", "af-jow": "Jowzj\u0101n", "af-kab": "K\u0101bul", "af-kan": "Kandah\u0101r", "af-kap": "K\u0101p\u012bs\u0101", "af-kdz": "Kunduz", "af-kho": "Kh\u014dst", "af-knr": "Kunar", "af-lag": "Laghm\u0101n", "af-log": "L\u014dgar", "af-nan": "Nangarh\u0101r", "af-nim": "N\u012bmr\u014dz", "af-nur": "N\u016brist\u0101n", "af-pan": "Panjshayr", "af-par": "Parw\u0101n", "af-pia": "Paktiy\u0101", "af-pka": "Pakt\u012bk\u0101", "af-sam": "Samang\u0101n", "af-sar": "Sar-e Pul", "af-tak": "Takh\u0101r", "af-uru": "Uruzg\u0101n", "af-war": "Wardak", "af-zab": "Z\u0101bul"}, "am": {"am-ag": "Aragacotn", "am-ar": "Ararat", "am-av": "Armavir", "am-er": "Erevan", "am-gr": "Gegarkunik'", "am-kt": "Kotayk'", "am-lo": "Lory", "am-sh": "Sirak", "am-su": "Syunik'", "am-tv": "Tavus", "am-vd": "Vayoc Jor"}, "ao": {"ao-bgo": "Bengo", "ao-bgu": "Benguela", "ao-bie": "Bi\u00e9", "ao-cab": "Cabinda", "ao-ccu": "Cuando-Cubango", "ao-cnn": "Cunene", "ao-cno": "Cuanza Norte", "ao-cus": "Cuanza Sul", "ao-hua": "Huambo", "ao-hui": "Hu\u00edla", "ao-lno": "Lunda Norte", "ao-lsu": "Lunda Sul", "ao-lua": "Luanda", "ao-mal": "Malange", "ao-mox": "Moxico", "ao-nam": "Namibe", "ao-uig": "U\u00edge", "ao-zai": "Zaire"}, "ar": {"ar-a": "Salta", "ar-b": "Buenos Aires", "ar-d": "San Luis", "ar-e": "Entre Rios", "ar-g": "Santiago del Estero", "ar-h": "Chaco", "ar-j": "San Juan", "ar-k": "Catamarca", "ar-l": "La Pampa", "ar-m": "Mendoza", "ar-n": "Misiones", "ar-p": "Formosa", "ar-q": "Neuquen", "ar-r": "Rio Negro", "ar-s": "Santa Fe", "ar-t": "Tucuman", "ar-u": "Chubut", "ar-v": "Tierra del Fuego", "ar-w": "Corrientes", "ar-x": "Cordoba", "ar-y": "Jujuy", "ar-z": "Santa Cruz"}, "at": {"at-1": "Burgenland", "at-2": "K\u00e4rnten", "at-3": "Nieder\u00f6sterreich", "at-4": "Ober\u00f6sterreich", "at-5": "Salzburg", "at-6": "Steiermark", "at-7": "Tirol", "at-8": "Vorarlberg", "at-9": "Wien"}, "au": {"au-act": "Australian Capital Territory", "au-nsw": "New South Wales", "au-nt": "Northern Territory", "au-qld": "Queensland", "au-sa": "South Australia", "au-tas": "Tasmania", "au-vic": "Victoria", "au-wa": "Western Australia"}, "be": {"be-van": "Antwerpen", "be-vbr": "Vlaams-Brabant", "be-vli": "Limburg", "be-vov": "Oost-Vlaanderen", "be-vwv": "West-Vlaanderen", "be-wbr": "Brabant wallon", "be-wht": "Hainaut", "be-wlg": "Li\u00e8ge", "be-wlx": "Luxembourg", "be-wna": "Namur"}, "bf": {"bf-bal": "Bal\u00e9", "bf-bam": "Bam", "bf-ban": "Banwa", "bf-baz": "Baz\u00e8ga", "bf-bgr": "Bougouriba", "bf-blg": "Boulgou", "bf-blk": "Boulkiemd\u00e9", "bf-com": "Como\u00e9", "bf-gan": "Ganzourgou", "bf-gna": "Gnagna", "bf-gou": "Gourma", "bf-hou": "Houet", "bf-iob": "Ioba", "bf-kad": "Kadiogo", "bf-ken": "K\u00e9n\u00e9dougou", "bf-kmd": "Komondjari", "bf-kmp": "Kompienga", "bf-kop": "Koulp\u00e9logo", "bf-kos": "Kossi", "bf-kot": "Kouritenga", "bf-kow": "Kourw\u00e9ogo", "bf-ler": "L\u00e9raba", "bf-lor": "Loroum", "bf-mou": "Mouhoun", "bf-nam": "Namentenga", "bf-nao": "Naouri", "bf-nay": "Nayala", "bf-nou": "Noumbiel", "bf-oub": "Oubritenga", "bf-oud": "Oudalan", "bf-pas": "Passor\u00e9", "bf-pon": "Poni", "bf-sen": "S\u00e9no", "bf-sis": "Sissili", "bf-smt": "Sanmatenga", "bf-sng": "Sangui\u00e9", "bf-som": "Soum", "bf-sor": "Sourou", "bf-tap": "Tapoa", "bf-tui": "Tui", "bf-yag": "Yagha", "bf-yat": "Yatenga", "bf-zir": "Ziro", "bf-zon": "Zondoma", "bf-zou": "Zoundw\u00e9ogo"}, "bi": {"bi-bb": "Bubanza", "bi-bl": "Bujumbura Rural", "bi-bm": "Bujumbura Mairie", "bi-br": "Bururi", "bi-ca": "Cankuzo", "bi-ci": "Cibitoke", "bi-gi": "Gitega", "bi-ki": "Kirundo", "bi-kr": "Karuzi", "bi-ky": "Kayanza", "bi-ma": "Makamba", "bi-mu": "Muramvya", "bi-mw": "Mwaro", "bi-ng": "Ngozi", "bi-rt": "Rutana", "bi-ry": "Ruyigi"}, "br": {"br-ac": "Acre", "br-al": "Alagoas", "br-am": "Amazonas", "br-ap": "Amap\u00e1", "br-ba": "Bahia", "br-ce": "Cear\u00e1", "br-es": "Esp\u00edrito Santo", "br-fn": "Fernando de Noronha", "br-go": "Goi\u00e1s", "br-ma": "Maranh\u00e3o", "br-mg": "Minas Gerais", "br-ms": "Mato Grosso do Sul", "br-mt": "Mato Grosso", "br-pa": "Par\u00e1", "br-pb": "Para\u00edba", "br-pe": "Pernambuco", "br-pi": "Piau\u00ed", "br-pr": "Paran\u00e1", "br-rj": "Rio de Janeiro", "br-rn": "Rio Grande do Norte", "br-ro": "Rond\u00f4nia", "br-rr": "Roraima", "br-rs": "Rio Grande do Sul", "br-sc": "Santa Catarina", "br-se": "Sergipe", "br-sp": "S\u00e3o Paulo", "br-to": "Tocantins"}, "ca": {"ca-ab": "Alberta", "ca-bc": "British Columbia", "ca-mb": "Manitoba", "ca-nb": "New Brunswick", "ca-nl": "Newfoundland and Labrador", "ca-ns": "Nova Scotia", "ca-nt": "Northwest Territories", "ca-nu": "Nunavut", "ca-on": "Ontario", "ca-pe": "Prince Edward Island", "ca-qc": "Quebec", "ca-sk": "Saskatchewan", "ca-yt": "Yukon Territory"}, "cd": {"cd-bc": "Bas-Congo", "cd-bn": "Bandundu", "cd-eq": "\u00c9quateur", "cd-ka": "Katanga", "cd-ke": "Kasai-Oriental", "cd-kw": "Kasai-Occidental", "cd-ma": "Maniema", "cd-nk": "Nord-Kivu", "cd-or": "Orientale", "cd-sk": "Sud-Kivu"}, "cm": {"cm-ad": "Adamaoua", "cm-ce": "Centre", "cm-en": "Far North", "cm-es": "East", "cm-lt": "Littoral", "cm-no": "North", "cm-nw": "North-West (Cameroon)", "cm-ou": "West", "cm-su": "South", "cm-sw": "South-West"}, "cn": {"cn-ah": "Anhui Sheng", "cn-fj": "Fujian Sheng", "cn-gd": "Guangdong Sheng", "cn-gs": "Gansu Sheng", "cn-gz": "Guizhou Sheng", "cn-ha": "Henan Sheng", "cn-hb": "Hubei Sheng", "cn-he": "Hebei Sheng", "cn-hi": "Hainan Sheng", "cn-hl": "Heilongjiang Sheng", "cn-hn": "Hunan Sheng", "cn-jl": "Jilin Sheng", "cn-js": "Jiangsu Sheng", "cn-jx": "Jiangxi Sheng", "cn-ln": "Liaoning Sheng", "cn-qh": "Qinghai Sheng", "cn-sc": "Sichuan Sheng", "cn-sd": "Shandong Sheng", "cn-sn": "Shaanxi Sheng", "cn-sx": "Shanxi Sheng", "cn-tw": "Taiwan Sheng (see also separate country code entry under TW)", "cn-yn": "Yunnan Sheng", "cn-zj": "Zhejiang Sheng"}, "cr": {"cr-a": "Alajuela", "cr-c": "Cartago", "cr-g": "Guanacaste", "cr-h": "Heredia", "cr-l": "Lim\u00f3n", "cr-p": "Puntarenas", "cr-sj": "San Jos\u00e9"}, "cu": {"cu-01": "Pinar del Rio", "cu-02": "La Habana", "cu-03": "Ciudad de La Habana", "cu-04": "Matanzas", "cu-05": "Villa Clara", "cu-06": "Cienfuegos", "cu-07": "Sancti Sp\u00edritus", "cu-08": "Ciego de \u00c1vila", "cu-09": "Camag\u00fcey", "cu-10": "Las Tunas", "cu-11": "Holgu\u00edn", "cu-12": "Granma", "cu-13": "Santiago de Cuba", "cu-14": "Guant\u00e1namo"}, "de": {"de-bb": "Brandenburg", "de-be": "Berlin", "de-bw": "Baden-W\u00fcrttemberg", "de-by": "Bayern", "de-hb": "Bremen", "de-he": "Hessen", "de-hh": "Hamburg", "de-mv": "Mecklenburg-Vorpommern", "de-ni": "Niedersachsen", "de-nw": "Nordrhein-Westfalen", "de-rp": "Rheinland-Pfalz", "de-sh": "Schleswig-Holstein", "de-sl": "Saarland", "de-sn": "Sachsen", "de-st": "Sachsen-Anhalt", "de-th": "Th\u00fcringen"}, "do": {"do-02": "Azua", "do-03": "Bahoruco", "do-04": "Barahona", "do-05": "Dajab\u00f3n", "do-06": "Duarte", "do-07": "La Estrelleta [El\u00edas Pi\u00f1a]", "do-08": "El Seybo [El Seibo]", "do-09": "Espaillat", "do-10": "Independencia", "do-11": "La Altagracia", "do-12": "La Romana", "do-13": "La Vega", "do-14": "Mar\u00eda Trinidad S\u00e1nchez", "do-15": "Monte Cristi", "do-16": "Pedernales", "do-17": "Peravia", "do-18": "Puerto Plata", "do-19": "Salcedo", "do-20": "Saman\u00e1", "do-21": "San Crist\u00f3bal", "do-22": "San Juan", "do-23": "San Pedro de Macor\u00eds", "do-24": "S\u00e1nchez Ram\u00edrez", "do-25": "Santiago", "do-26": "Santiago Rodr\u00edguez", "do-27": "Valverde", "do-28": "Monse\u00f1or Nouel", "do-29": "Monte Plata", "do-30": "Hato Mayor"}, "dz": {"dz-01": "Adrar", "dz-02": "Chlef", "dz-03": "Laghouat", "dz-04": "Oum el Bouaghi", "dz-05": "Batna", "dz-06": "B\u00e9ja\u00efa", "dz-07": "Biskra", "dz-08": "B\u00e9char", "dz-09": "Blida", "dz-10": "Bouira", "dz-11": "Tamanghasset", "dz-12": "T\u00e9bessa", "dz-13": "Tlemcen", "dz-14": "Tiaret", "dz-15": "Tizi Ouzou", "dz-16": "Alger", "dz-17": "Djelfa", "dz-18": "Jijel", "dz-19": "S\u00e9tif", "dz-20": "Sa\u00efda", "dz-21": "Skikda", "dz-22": "Sidi Bel Abb\u00e8s", "dz-23": "Annaba", "dz-24": "Guelma", "dz-25": "Constantine", "dz-26": "M\u00e9d\u00e9a", "dz-27": "Mostaganem", "dz-28": "Msila", "dz-29": "Mascara", "dz-30": "Ouargla", "dz-31": "Oran", "dz-32": "El Bayadh", "dz-33": "Illizi", "dz-34": "Bordj Bou Arr\u00e9ridj", "dz-35": "Boumerd\u00e8s", "dz-36": "El Tarf", "dz-37": "Tindouf", "dz-38": "Tissemsilt", "dz-39": "El Oued", "dz-40": "Khenchela", "dz-41": "Souk Ahras", "dz-42": "Tipaza", "dz-43": "Mila", "dz-44": "A\u00efn Defla", "dz-45": "Naama", "dz-46": "A\u00efn T\u00e9mouchent", "dz-47": "Gharda\u00efa", "dz-48": "Relizane"}, "ec": {"ec-a": "Azuay", "ec-b": "Bol\u00edvar", "ec-c": "Carchi", "ec-d": "Orellana", "ec-e": "Esmeraldas", "ec-f": "Ca\u00f1ar", "ec-g": "Guayas", "ec-h": "Chimborazo", "ec-i": "Imbabura", "ec-l": "Loja", "ec-m": "Manab\u00ed", "ec-n": "Napo", "ec-o": "El Oro", "ec-p": "Pichincha", "ec-r": "Los R\u00edos", "ec-s": "Morona-Santiago", "ec-sd": "Santo Domingo de los Ts\u00e1chilas", "ec-se": "Santa Elena", "ec-t": "Tungurahua", "ec-u": "Sucumb\u00edos", "ec-w": "Gal\u00e1pagos", "ec-x": "Cotopaxi", "ec-y": "Pastaza", "ec-z": "Zamora-Chinchipe"}, "er": {"er-an": "Ansab\u0101", "er-dk": "Jan\u016bb\u012b al Ba\u1e29r\u012b al A\u1e29mar", "er-du": "Al Jan\u016bb\u012b", "er-gb": "Q\u0101sh-Barkah", "er-ma": "Al Awsa\u0163", "er-sk": "Shim\u0101l\u012b al Ba\u1e29r\u012b al A\u1e29mar"}, "es": {"es-a": "Alicante", "es-ab": "Albacete", "es-al": "Almer\u00eda", "es-av": "\u00c1vila", "es-b": "Barcelona", "es-ba": "Badajoz", "es-bi": "Bizkaia", "es-bu": "Burgos", "es-c": "A Coru\u00f1a", "es-ca": "C\u00e1diz", "es-cc": "C\u00e1ceres", "es-co": "C\u00f3rdoba", "es-cr": "Ciudad Real", "es-cs": "Castell\u00f3n", "es-cu": "Cuenca", "es-gc": "Las Palmas", "es-gi": "Girona", "es-gr": "Granada", "es-gu": "Guadalajara", "es-h": "Huelva", "es-hu": "Huesca", "es-j": "Ja\u00e9n", "es-l": "Lleida", "es-le": "Le\u00f3n", "es-lo": "La Rioja", "es-lu": "Lugo", "es-m": "Madrid", "es-ma": "M\u00e1laga", "es-mu": "Murcia", "es-na": "Navarra / Nafarroa", "es-o": "Asturias", "es-or": "Ourense", "es-p": "Palencia", "es-pm": "Balears", "es-po": "Pontevedra", "es-s": "Cantabria", "es-sa": "Salamanca", "es-se": "Sevilla", "es-sg": "Segovia", "es-so": "Soria", "es-ss": "Gipuzkoa", "es-t": "Tarragona", "es-te": "Teruel", "es-tf": "Santa Cruz de Tenerife", "es-to": "Toledo", "es-v": "Valencia / Val\u00e8ncia", "es-va": "Valladolid", "es-vi": "\u00c1lava", "es-z": "Zaragoza", "es-za": "Zamora"}, "et": {"et-af": "\u0100far", "et-am": "\u0100mara", "et-be": "B\u012bnshangul Gumuz", "et-ga": "Gamb\u0113la Hizboch", "et-ha": "H\u0101rer\u012b Hizb", "et-or": "Orom\u012bya", "et-sn": "YeDebub Bih\u0113roch Bih\u0113reseboch na Hizboch", "et-so": "Sumal\u0113", "et-ti": "Tigray"}, "fm": {"fm-ksa": "Kosrae", "fm-pni": "Pohnpei", "fm-trk": "Chuuk", "fm-yap": "Yap"}, "ga": {"ga-1": "Estuaire", "ga-2": "Haut-Ogoou\u00e9", "ga-3": "Moyen-Ogoou\u00e9", "ga-4": "Ngouni\u00e9", "ga-5": "Nyanga", "ga-6": "Ogoou\u00e9-Ivindo", "ga-7": "Ogoou\u00e9-Lolo", "ga-8": "Ogoou\u00e9-Maritime", "ga-9": "Woleu-Ntem"}, "gq": {"gq-an": "Annob\u00f3n", "gq-bn": "Bioko Norte", "gq-bs": "Bioko Sur", "gq-cs": "Centro Sur", "gq-kn": "Ki\u00e9-Ntem", "gq-li": "Litoral", "gq-wn": "Wele-Nzas"}, "gw": {"gw-l": "Leste", "gw-n": "Norte", "gw-s": "Sul"}, "id": {"id-ba": "Bali", "id-bb": "Bangka Belitung", "id-be": "Bengkulu", "id-bt": "Banten", "id-go": "Gorontalo", "id-ja": "Jambi", "id-jb": "Jawa Barat", "id-ji": "Jawa Timur", "id-jt": "Jawa Tengah", "id-kb": "Kalimantan Barat", "id-ki": "Kalimantan Timur", "id-kr": "Kepulauan Riau", "id-ks": "Kalimantan Selatan", "id-kt": "Kalimantan Tengah", "id-la": "Lampung", "id-ma": "Maluku", "id-mu": "Maluku Utara", "id-nb": "Nusa Tenggara Barat", "id-nt": "Nusa Tenggara Timur", "id-pa": "Papua", "id-pb": "Papua Barat", "id-ri": "Riau", "id-sa": "Sulawesi Utara", "id-sb": "Sumatra Barat", "id-sg": "Sulawesi Tenggara", "id-sn": "Sulawesi Selatan", "id-sr": "Sulawesi Barat", "id-ss": "Sumatra Selatan", "id-st": "Sulawesi Tengah", "id-su": "Sumatera Utara"}, "ie": {"ie-c": "Connacht", "ie-l": "Leinster", "ie-m": "Munster", "ie-u": "Ulster"}, "in": {"in-ap": "Andhra Pradesh", "in-ar": "Arunachal Pradesh", "in-as": "Assam", "in-br": "Bihar", "in-ct": "Chhattisgarh", "in-ga": "Goa", "in-gj": "Gujarat", "in-hp": "Himachal Pradesh", "in-hr": "Haryana", "in-jh": "Jharkhand", "in-jk": "Jammu and Kashmir", "in-ka": "Karnataka", "in-kl": "Kerala", "in-mh": "Maharashtra", "in-ml": "Meghalaya", "in-mn": "Manipur", "in-mp": "Madhya Pradesh", "in-mz": "Mizoram", "in-nl": "Nagaland", "in-or": "Odisha", "in-pb": "Punjab", "in-rj": "Rajasthan", "in-sk": "Sikkim", "in-tg": "Telangana", "in-tn": "Tamil Nadu", "in-tr": "Tripura", "in-up": "Uttar Pradesh", "in-ut": "Uttarakhand", "in-wb": "West Bengal"}, "ir": {"ir-01": "\u0100zarb\u0101yj\u0101n-e Sharq\u012b", "ir-02": "\u0100zarb\u0101yj\u0101n-e Gharb\u012b", "ir-03": "Ardab\u012bl", "ir-04": "E\u015ffah\u0101n", "ir-05": "\u012al\u0101m", "ir-06": "B\u016bshehr", "ir-07": "Tehr\u0101n", "ir-08": "Chah\u0101r Mah\u0101ll va Bakht\u012b\u0101r\u012b", "ir-10": "Kh\u016bzest\u0101n", "ir-11": "Zanj\u0101n", "ir-12": "Semn\u0101n", "ir-13": "S\u012bst\u0101n va Bal\u016bchest\u0101n", "ir-14": "F\u0101rs", "ir-15": "Kerm\u0101n", "ir-16": "Kordest\u0101n", "ir-17": "Kerm\u0101nsh\u0101h", "ir-18": "Kohg\u012bl\u016byeh va B\u016byer Ahmad", "ir-19": "G\u012bl\u0101n", "ir-20": "Lorest\u0101n", "ir-21": "M\u0101zandar\u0101n", "ir-22": "Markaz\u012b", "ir-23": "Hormozg\u0101n", "ir-24": "Hamad\u0101n", "ir-25": "Yazd", "ir-26": "Qom", "ir-27": "Golest\u0101n", "ir-28": "Qazv\u012bn", "ir-29": "Khor\u0101s\u0101n-e Jan\u016bb\u012b", "ir-30": "Khor\u0101s\u0101n-e Razav\u012b", "ir-31": "Khor\u0101s\u0101n-e Shem\u0101l\u012b"}, "it": {"it-ag": "Agrigento", "it-al": "Alessandria", "it-an": "Ancona", "it-ao": "Aosta", "it-ap": "Ascoli Piceno", "it-aq": "L'Aquila", "it-ar": "Arezzo", "it-at": "Asti", "it-av": "Avellino", "it-ba": "Bari", "it-bg": "Bergamo", "it-bi": "Biella", "it-bl": "Belluno", "it-bn": "Benevento", "it-bo": "Bologna", "it-br": "Brindisi", "it-bs": "Brescia", "it-bt": "Barletta-Andria-Trani", "it-bz": "Bolzano", "it-ca": "Cagliari", "it-cb": "Campobasso", "it-ce": "Caserta", "it-ch": "Chieti", "it-ci": "Carbonia-Iglesias", "it-cl": "Caltanissetta", "it-cn": "Cuneo", "it-co": "Como", "it-cr": "Cremona", "it-cs": "Cosenza", "it-ct": "Catania", "it-cz": "Catanzaro", "it-en": "Enna", "it-fc": "Forl\u00ec-Cesena", "it-fe": "Ferrara", "it-fg": "Foggia", "it-fi": "Firenze", "it-fm": "Fermo", "it-fr": "Frosinone", "it-ge": "Genova", "it-go": "Gorizia", "it-gr": "Grosseto", "it-im": "Imperia", "it-is": "Isernia", "it-kr": "Crotone", "it-lc": "Lecco", "it-le": "Lecce", "it-li": "Livorno", "it-lo": "Lodi", "it-lt": "Latina", "it-lu": "Lucca", "it-mb": "Monza e Brianza", "it-mc": "Macerata", "it-me": "Messina", "it-mi": "Milano", "it-mn": "Mantova", "it-mo": "Modena", "it-ms": "Massa-Carrara", "it-mt": "Matera", "it-na": "Napoli", "it-no": "Novara", "it-nu": "Nuoro", "it-og": "Ogliastra", "it-or": "Oristano", "it-ot": "Olbia-Tempio", "it-pa": "Palermo", "it-pc": "Piacenza", "it-pd": "Padova", "it-pe": "Pescara", "it-pg": "Perugia", "it-pi": "Pisa", "it-pn": "Pordenone", "it-po": "Prato", "it-pr": "Parma", "it-pt": "Pistoia", "it-pu": "Pesaro e Urbino", "it-pv": "Pavia", "it-pz": "Potenza", "it-ra": "Ravenna", "it-rc": "Reggio Calabria", "it-re": "Reggio Emilia", "it-rg": "Ragusa", "it-ri": "Rieti", "it-rm": "Roma", "it-rn": "Rimini", "it-ro": "Rovigo", "it-sa": "Salerno", "it-si": "Siena", "it-so": "Sondrio", "it-sp": "La Spezia", "it-sr": "Siracusa", "it-ss": "Sassari", "it-sv": "Savona", "it-ta": "Taranto", "it-te": "Teramo", "it-tn": "Trento", "it-to": "Torino", "it-tp": "Trapani", "it-tr": "Terni", "it-ts": "Trieste", "it-tv": "Treviso", "it-ud": "Udine", "it-va": "Varese", "it-vb": "Verbano-Cusio-Ossola", "it-vc": "Vercelli", "it-ve": "Venezia", "it-vi": "Vicenza", "it-vr": "Verona", "it-vs": "Medio Campidano", "it-vt": "Viterbo", "it-vv": "Vibo Valentia"}, "ke": {"ke-110": "Nairobi Municipality", "ke-200": "Central", "ke-300": "Coast", "ke-400": "Eastern", "ke-500": "North-Eastern Kaskazini Mashariki", "ke-700": "Rift Valley", "ke-800": "Western Magharibi"}, "kh": {"kh-1": "Banteay Mean Chey", "kh-10": "Krachoh", "kh-11": "Mondol Kiri", "kh-13": "Preah Vihear", "kh-14": "Prey Veaeng", "kh-15": "Pousaat", "kh-16": "Rotanak Kiri", "kh-17": "Siem Reab", "kh-19": "Stueng Traeng", "kh-2": "Battambang", "kh-20": "Svaay Rieng", "kh-21": "Taakaev", "kh-22": "Otdar Mean Chey", "kh-3": "Kampong Cham", "kh-4": "Kampong Chhnang", "kh-5": "Kampong Speu", "kh-6": "Kampong Thom", "kh-7": "Kampot", "kh-8": "Kandal", "kh-9": "Kach Kong"}, "kn": {"kn-k": "Saint Kitts", "kn-n": "Nevis"}, "kp": {"kp-02": "P\u2019y\u014fngan-namdo", "kp-03": "P\u2019y\u014fngan-bukto", "kp-04": "Chagang-do", "kp-05": "Hwanghae-namdo", "kp-06": "Hwanghae-bukto", "kp-07": "Kangw\u014fn-do", "kp-08": "Hamgy\u014fng-namdo", "kp-09": "Hamgy\u014fng-bukto", "kp-10": "Yanggang-do"}, "kr": {"kr-41": "Gyeonggido", "kr-42": "Gang'weondo", "kr-43": "Chungcheongbukdo", "kr-44": "Chungcheongnamdo", "kr-45": "Jeonrabukdo", "kr-46": "Jeonranamdo", "kr-47": "Gyeongsangbukdo", "kr-48": "Gyeongsangnamdo", "kr-49": "Jejudo"}, "la": {"la-at": "Attapu", "la-bk": "Bok\u00e8o", "la-bl": "Bolikhamxai", "la-ch": "Champasak", "la-ho": "Houaphan", "la-kh": "Khammouan", "la-lm": "Louang Namtha", "la-lp": "Louangphabang", "la-ou": "Oud\u00f4mxai", "la-ph": "Ph\u00f4ngsali", "la-sl": "Salavan", "la-sv": "Savannakh\u00e9t", "la-vi": "Vientiane", "la-xa": "Xaignabouli", "la-xe": "X\u00e9kong", "la-xi": "Xiangkhouang", "la-xs": "Xais\u00f4mboun"}, "lk": {"lk-1": "Basn\u0101hira pa\u1e37\u0101ta", "lk-2": "Madhyama pa\u1e37\u0101ta", "lk-3": "Daku\u1e47u pa\u1e37\u0101ta", "lk-4": "Uturu pa\u1e37\u0101ta", "lk-5": "N\u00e6\u0306g\u0115nahira pa\u1e37\u0101ta", "lk-6": "Vayamba pa\u1e37\u0101ta", "lk-7": "Uturum\u00e6\u0306da pa\u1e37\u0101ta", "lk-8": "\u016ava pa\u1e37\u0101ta", "lk-9": "Sabaragamuva pa\u1e37\u0101ta"}, "ma": {"ma-aou": "Aousserd (EH)", "ma-asz": "Assa-Zag (EH-partial)", "ma-azi": "Azilal", "ma-bem": "B\u00e9ni Mellal", "ma-ber": "Berkane", "ma-bes": "Benslimane", "ma-bod": "Boujdour (EH)", "ma-bom": "Boulemane", "ma-brr": "Berrechid", "ma-che": "Chefchaouen", "ma-chi": "Chichaoua", "ma-cht": "Chtouka-Ait Baha", "ma-dri": "Driouch", "ma-err": "Errachidia", "ma-esi": "Essaouira", "ma-esm": "Es-Semara (EH-partial)", "ma-fah": "Fahs-Anjra", "ma-fig": "Figuig", "ma-fqh": "Fquih Ben Salah", "ma-gue": "Guelmim", "ma-guf": "Guercif", "ma-haj": "El Hajeb", "ma-hao": "Al Haouz", "ma-hoc": "Al Hoce\u00efma", "ma-ifr": "Ifrane", "ma-jdi": "El Jadida", "ma-jra": "Jerada", "ma-ken": "K\u00e9nitra", "ma-kes": "El Kel\u00e2a des Sraghna", "ma-khe": "Khemisset", "ma-khn": "Khenifra", "ma-kho": "Khouribga", "ma-laa": "La\u00e2youne (EH)", "ma-lar": "Larache", "ma-med": "M\u00e9diouna", "ma-mid": "Midelt", "ma-mou": "Moulay Yacoub", "ma-nad": "Nador", "ma-nou": "Nouaceur", "ma-oua": "Ouarzazate", "ma-oud": "Oued Ed-Dahab (EH)", "ma-ouz": "Ouezzane", "ma-reh": "Rehamna", "ma-saf": "Safi", "ma-sef": "Sefrou", "ma-set": "Settat", "ma-sib": "Sidi Bennour", "ma-sif": "Sidi Ifni", "ma-sik": "Sidi Kacem", "ma-sil": "Sidi Slimane", "ma-taf": "Tarfaya (EH-partial)", "ma-tai": "Taourirt", "ma-tao": "Taounate", "ma-tar": "Taroudant", "ma-tat": "Tata", "ma-taz": "Taza", "ma-tet": "T\u00e9touan", "ma-tin": "Tinghir", "ma-tiz": "Tiznit", "ma-tnt": "Tan-Tan (EH-partial)", "ma-yus": "Youssoufia", "ma-zag": "Zagora"}, "mm": {"mm-11": "Kachin", "mm-12": "Kayah", "mm-13": "Kayin", "mm-14": "Chin", "mm-15": "Mon", "mm-16": "Rakhine", "mm-17": "Shan"}, "mn": {"mn-039": "Hentiy", "mn-041": "H\u00f6vsg\u00f6l", "mn-043": "Hovd", "mn-046": "Uvs", "mn-047": "T\u00f6v", "mn-049": "Selenge", "mn-051": "S\u00fchbaatar", "mn-053": "\u00d6mn\u00f6govi", "mn-055": "\u00d6v\u00f6rhangay", "mn-057": "Dzavhan", "mn-059": "Dundgovi", "mn-061": "Dornod", "mn-063": "Dornogovi", "mn-065": "Govi-Altay", "mn-067": "Bulgan", "mn-069": "Bayanhongor", "mn-071": "Bayan-\u00d6lgiy", "mn-073": "Arhangay"}, "mv": {"mv-ce": "Central", "mv-nc": "North Central", "mv-no": "North", "mv-sc": "South Central", "mv-su": "South", "mv-un": "Upper North", "mv-us": "Upper South"}, "mx": {"mx-agu": "Aguascalientes", "mx-bcn": "Baja California", "mx-bcs": "Baja California Sur", "mx-cam": "Campeche", "mx-chh": "Chihuahua", "mx-chp": "Chiapas", "mx-coa": "Coahuila de Zaragoza", "mx-col": "Colima", "mx-dur": "Durango", "mx-gro": "Guerrero", "mx-gua": "Guanajuato", "mx-hid": "Hidalgo", "mx-jal": "Jalisco", "mx-mex": "M\u00e9xico", "mx-mic": "Michoac\u00e1n de Ocampo", "mx-mor": "Morelos", "mx-nay": "Nayarit", "mx-nle": "Nuevo Le\u00f3n", "mx-oax": "Oaxaca", "mx-pue": "Puebla", "mx-que": "Quer\u00e9taro", "mx-roo": "Quintana Roo", "mx-sin": "Sinaloa", "mx-slp": "San Luis Potos\u00ed", "mx-son": "Sonora", "mx-tab": "Tabasco", "mx-tam": "Tamaulipas", "mx-tla": "Tlaxcala", "mx-ver": "Veracruz de Ignacio de la Llave", "mx-yuc": "Yucat\u00e1n", "mx-zac": "Zacatecas"}, "my": {"my-01": "Johor", "my-02": "Kedah", "my-03": "Kelantan", "my-04": "Melaka", "my-05": "Negeri Sembilan", "my-06": "Pahang", "my-07": "Pulau Pinang", "my-08": "Perak", "my-09": "Perlis", "my-10": "Selangor", "my-11": "Terengganu", "my-12": "Sabah", "my-13": "Sarawak"}, "mz": {"mz-a": "Niassa", "mz-b": "Manica", "mz-g": "Gaza", "mz-i": "Inhambane", "mz-l": "Maputo", "mz-n": "Numpula", "mz-p": "Cabo Delgado", "mz-q": "Zambezia", "mz-s": "Sofala", "mz-t": "Tete"}, "ng": {"ng-ab": "Abia", "ng-ad": "Adamawa", "ng-ak": "Akwa Ibom", "ng-an": "Anambra", "ng-ba": "Bauchi", "ng-be": "Benue", "ng-bo": "Borno", "ng-by": "Bayelsa", "ng-cr": "Cross River", "ng-de": "Delta", "ng-eb": "Ebonyi", "ng-ed": "Edo", "ng-ek": "Ekiti", "ng-en": "Enugu", "ng-go": "Gombe", "ng-im": "Imo", "ng-ji": "Jigawa", "ng-kd": "Kaduna", "ng-ke": "Kebbi", "ng-kn": "Kano", "ng-ko": "Kogi", "ng-kt": "Katsina", "ng-kw": "Kwara", "ng-la": "Lagos", "ng-na": "Nassarawa", "ng-ni": "Niger", "ng-og": "Ogun", "ng-on": "Ondo", "ng-os": "Osun", "ng-oy": "Oyo", "ng-pl": "Plateau", "ng-ri": "Rivers", "ng-so": "Sokoto", "ng-ta": "Taraba", "ng-yo": "Yobe", "ng-za": "Zamfara"}, "nl": {"nl-dr": "Drenthe", "nl-fl": "Flevoland", "nl-fr": "Friesland", "nl-ge": "Gelderland", "nl-gr": "Groningen", "nl-li": "Limburg", "nl-nb": "Noord-Brabant", "nl-nh": "Noord-Holland", "nl-ov": "Overijssel", "nl-ut": "Utrecht", "nl-ze": "Zeeland", "nl-zh": "Zuid-Holland"}, "pa": {"pa-1": "Bocas del Toro", "pa-2": "Cocl\u00e9", "pa-3": "Col\u00f3n", "pa-4": "Chiriqu\u00ed", "pa-5": "Dari\u00e9n", "pa-6": "Herrera", "pa-7": "Los Santos", "pa-8": "Panam\u00e1", "pa-9": "Veraguas"}, "pg": {"pg-cpk": "Chimbu", "pg-cpm": "Central", "pg-ebr": "East New Britain", "pg-ehg": "Eastern Highlands", "pg-epw": "Enga", "pg-esw": "East Sepik", "pg-gpk": "Gulf", "pg-mba": "Milne Bay", "pg-mpl": "Morobe", "pg-mpm": "Madang", "pg-mrl": "Manus", "pg-nik": "New Ireland", "pg-npp": "Northern", "pg-san": "Sandaun", "pg-shm": "Southern Highlands", "pg-wbk": "West New Britain", "pg-whm": "Western Highlands", "pg-wpd": "Western"}, "ph": {"ph-abr": "Abra", "ph-agn": "Agusan del Norte", "ph-ags": "Agusan del Sur", "ph-akl": "Aklan", "ph-alb": "Albay", "ph-ant": "Antique", "ph-apa": "Apayao", "ph-aur": "Aurora", "ph-ban": "Batasn", "ph-bas": "Basilan", "ph-ben": "Benguet", "ph-bil": "Biliran", "ph-boh": "Bohol", "ph-btg": "Batangas", "ph-btn": "Batanes", "ph-buk": "Bukidnon", "ph-bul": "Bulacan", "ph-cag": "Cagayan", "ph-cam": "Camiguin", "ph-can": "Camarines Norte", "ph-cap": "Capiz", "ph-cas": "Camarines Sur", "ph-cat": "Catanduanes", "ph-cav": "Cavite", "ph-ceb": "Cebu", "ph-com": "Compostela Valley", "ph-dao": "Davao Oriental", "ph-das": "Davao del Sur", "ph-dav": "Davao del Norte", "ph-din": "Dinagat Islands", "ph-eas": "Eastern Samar", "ph-gui": "Guimaras", "ph-ifu": "Ifugao", "ph-ili": "Iloilo", "ph-iln": "Ilocos Norte", "ph-ils": "Ilocos Sur", "ph-isa": "Isabela", "ph-kal": "Kalinga-Apayso", "ph-lag": "Laguna", "ph-lan": "Lanao del Norte", "ph-las": "Lanao del Sur", "ph-ley": "Leyte", "ph-lun": "La Union", "ph-mad": "Marinduque", "ph-mag": "Maguindanao", "ph-mas": "Masbate", "ph-mdc": "Mindoro Occidental", "ph-mdr": "Mindoro Oriental", "ph-mou": "Mountain Province", "ph-msc": "Misamis Occidental", "ph-msr": "Misamis Oriental", "ph-nco": "North Cotabato", "ph-nec": "Negros Occidental", "ph-ner": "Negros Oriental", "ph-nsa": "Northern Samar", "ph-nue": "Nueva Ecija", "ph-nuv": "Nueva Vizcaya", "ph-pam": "Pampanga", "ph-pan": "Pangasinan", "ph-plw": "Palawan", "ph-que": "Quezon", "ph-qui": "Quirino", "ph-riz": "Rizal", "ph-rom": "Romblon", "ph-sar": "Sarangani", "ph-sco": "South Cotabato", "ph-sig": "Siquijor", "ph-sle": "Southern Leyte", "ph-slu": "Sulu", "ph-sor": "Sorsogon", "ph-suk": "Sultan Kudarat", "ph-sun": "Surigao del Norte", "ph-sur": "Surigao del Sur", "ph-tar": "Tarlac", "ph-taw": "Tawi-Tawi", "ph-wsa": "Western Samar", "ph-zan": "Zamboanga del Norte", "ph-zas": "Zamboanga del Sur", "ph-zmb": "Zambales", "ph-zsi": "Zamboanga Sibugay"}, "pk": {"pk-ba": "Balochistan", "pk-kp": "Khyber Pakhtunkhwa", "pk-pb": "Punjab", "pk-sd": "Sindh", "pk-ta": "Federally Administered Tribal Areas"}, "pl": {"pl-ds": "Dolno\u015bl\u0105skie", "pl-kp": "Kujawsko-pomorskie", "pl-lb": "Lubuskie", "pl-ld": "\u0141\u00f3dzkie", "pl-lu": "Lubelskie", "pl-ma": "Ma\u0142opolskie", "pl-mz": "Mazowieckie", "pl-op": "Opolskie", "pl-pd": "Podlaskie", "pl-pk": "Podkarpackie", "pl-pm": "Pomorskie", "pl-sk": "\u015awi\u0119tokrzyskie", "pl-sl": "\u015al\u0105skie", "pl-wn": "Warmi\u0144sko-mazurskie", "pl-wp": "Wielkopolskie", "pl-zp": "Zachodniopomorskie"}, "pw": {"pw-002": "Aimeliik", "pw-004": "Airai", "pw-010": "Angaur", "pw-050": "Hatobohei", "pw-100": "Kayangel", "pw-150": "Koror", "pw-212": "Melekeok", "pw-214": "Ngaraard", "pw-218": "Ngarchelong", "pw-222": "Ngardmau", "pw-224": "Ngatpang", "pw-226": "Ngchesar", "pw-227": "Ngeremlengui", "pw-228": "Ngiwal", "pw-350": "Peleliu", "pw-370": "Sonsorol"}, "rw": {"rw-02": "Est", "rw-03": "Nord", "rw-04": "Ouest", "rw-05": "Sud"}, "sa": {"sa-01": "Ar Riy\u0101\u1e0d", "sa-02": "Makkah", "sa-03": "Al Mad\u012bnah", "sa-04": "Ash Sharq\u012byah", "sa-05": "Al Qa\u015f\u012bm", "sa-06": "\u1e24\u0101'il", "sa-07": "Tab\u016bk", "sa-08": "Al \u1e24ud\u016bd ash Sham\u0101liyah", "sa-09": "J\u012bzan", "sa-10": "Najr\u0101n", "sa-11": "Al B\u0101hah", "sa-12": "Al Jawf", "sa-14": "`As\u012br"}, "sb": {"sb-ce": "Central", "sb-ch": "Choiseul", "sb-gu": "Guadalcanal", "sb-is": "Isabel", "sb-mk": "Makira", "sb-ml": "Malaita", "sb-rb": "Rennell and Bellona", "sb-te": "Temotu", "sb-we": "Western"}, "sd": {"sd-dc": "Zalingei", "sd-de": "Sharq D\u0101rf\u016br", "sd-dn": "Sham\u0101l D\u0101rf\u016br", "sd-ds": "Jan\u016bb D\u0101rf\u016br", "sd-dw": "Gharb D\u0101rf\u016br", "sd-gd": "Al Qa\u1e11\u0101rif", "sd-gz": "Al Jaz\u012brah", "sd-ka": "Kassal\u0101", "sd-kh": "Al Khar\u0163\u016bm", "sd-kn": "Sham\u0101l Kurduf\u0101n", "sd-ks": "Jan\u016bb Kurduf\u0101n", "sd-nb": "An N\u012bl al Azraq", "sd-no": "Ash Sham\u0101l\u012byah", "sd-nr": "An N\u012bl", "sd-nw": "An N\u012bl al Abya\u1e11", "sd-rs": "Al Ba\u1e29r al A\u1e29mar", "sd-si": "Sinn\u0101r"}, "sl": {"sl-e": "Eastern", "sl-n": "Northern", "sl-s": "Southern (Sierra Leone)"}, "ss": {"ss-bn": "Northern Bahr el-Ghazal", "ss-bw": "Western Bahr el-Ghazal", "ss-ec": "Central Equatoria", "ss-ee8": "Eastern Equatoria", "ss-ew": "Western Equatoria", "ss-jg": "Jonglei", "ss-lk": "Lakes", "ss-nu": "Upper Nile", "ss-uy": "Unity", "ss-wr": "Warrap"}, "th": {"th-11": "Samut Prakan", "th-12": "Nonthaburi", "th-13": "Pathum Thani", "th-14": "Phra Nakhon Si Ayutthaya", "th-15": "Ang Thong", "th-16": "Lop Buri", "th-17": "Sing Buri", "th-18": "Chai Nat", "th-19": "Saraburi", "th-20": "Chon Buri", "th-21": "Rayong", "th-22": "Chanthaburi", "th-23": "Trat", "th-24": "Chachoengsao", "th-25": "Prachin Buri", "th-26": "Nakhon Nayok", "th-27": "Sa Kaeo", "th-30": "Nakhon Ratchasima", "th-31": "Buri Ram", "th-32": "Surin", "th-33": "Si Sa Ket", "th-34": "Ubon Ratchathani", "th-35": "Yasothon", "th-36": "Chaiyaphum", "th-37": "Amnat Charoen", "th-39": "Nong Bua Lam Phu", "th-40": "Khon Kaen", "th-41": "Udon Thani", "th-42": "Loei", "th-43": "Nong Khai", "th-44": "Maha Sarakham", "th-45": "Roi Et", "th-46": "Kalasin", "th-47": "Sakon Nakhon", "th-48": "Nakhon Phanom", "th-49": "Mukdahan", "th-50": "Chiang Mai", "th-51": "Lamphun", "th-52": "Lampang", "th-53": "Uttaradit", "th-54": "Phrae", "th-55": "Nan", "th-56": "Phayao", "th-57": "Chiang Rai", "th-58": "Mae Hong Son", "th-60": "Nakhon Sawan", "th-61": "Uthai Thani", "th-62": "Kamphaeng Phet", "th-63": "Tak", "th-64": "Sukhothai", "th-65": "Phitsanulok", "th-66": "Phichit", "th-67": "Phetchabun", "th-70": "Ratchaburi", "th-71": "Kanchanaburi", "th-72": "Suphan Buri", "th-73": "Nakhon Pathom", "th-74": "Samut Sakhon", "th-75": "Samut Songkhram", "th-76": "Phetchaburi", "th-77": "Prachuap Khiri Khan", "th-80": "Nakhon Si Thammarat", "th-81": "Krabi", "th-82": "Phangnga", "th-83": "Phuket", "th-84": "Surat Thani", "th-85": "Ranong", "th-86": "Chumphon", "th-90": "Songkhla", "th-91": "Satun", "th-92": "Trang", "th-93": "Phatthalung", "th-94": "Pattani", "th-95": "Yala", "th-96": "Narathiwat", "th-s": "Phatthaya"}, "tr": {"tr-01": "Adana", "tr-02": "Ad\u0131yaman", "tr-03": "Afyonkarahisar", "tr-04": "A\u011fr\u0131", "tr-05": "Amasya", "tr-06": "Ankara", "tr-07": "Antalya", "tr-08": "Artvin", "tr-09": "Ayd\u0131n", "tr-10": "Bal\u0131kesir", "tr-11": "Bilecik", "tr-12": "Bing\u00f6l", "tr-13": "Bitlis", "tr-14": "Bolu", "tr-15": "Burdur", "tr-16": "Bursa", "tr-17": "\u00c7anakkale", "tr-18": "\u00c7ank\u0131r\u0131", "tr-19": "\u00c7orum", "tr-20": "Denizli", "tr-21": "Diyarbak\u0131r", "tr-22": "Edirne", "tr-23": "Elaz\u0131\u011f", "tr-24": "Erzincan", "tr-25": "Erzurum", "tr-26": "Eski\u015fehir", "tr-27": "Gaziantep", "tr-28": "Giresun", "tr-29": "G\u00fcm\u00fc\u015fhane", "tr-30": "Hakk\u00e2ri", "tr-31": "Hatay", "tr-32": "Isparta", "tr-33": "Mersin", "tr-34": "\u0130stanbul", "tr-35": "\u0130zmir", "tr-36": "Kars", "tr-37": "Kastamonu", "tr-38": "Kayseri", "tr-39": "K\u0131rklareli", "tr-40": "K\u0131r\u015fehir", "tr-41": "Kocaeli", "tr-42": "Konya", "tr-43": "K\u00fctahya", "tr-44": "Malatya", "tr-45": "Manisa", "tr-46": "Kahramanmara\u015f", "tr-47": "Mardin", "tr-48": "Mu\u011fla", "tr-49": "Mu\u015f", "tr-50": "Nev\u015fehir", "tr-51": "Ni\u011fde", "tr-52": "Ordu", "tr-53": "Rize", "tr-54": "Sakarya", "tr-55": "Samsun", "tr-56": "Siirt", "tr-57": "Sinop", "tr-58": "Sivas", "tr-59": "Tekirda\u011f", "tr-60": "Tokat", "tr-61": "Trabzon", "tr-62": "Tunceli", "tr-63": "\u015eanl\u0131urfa", "tr-64": "U\u015fak", "tr-65": "Van", "tr-66": "Yozgat", "tr-67": "Zonguldak", "tr-68": "Aksaray", "tr-69": "Bayburt", "tr-70": "Karaman", "tr-71": "K\u0131r\u0131kkale", "tr-72": "Batman", "tr-73": "\u015e\u0131rnak", "tr-74": "Bart\u0131n", "tr-75": "Ardahan", "tr-76": "I\u011fd\u0131r", "tr-77": "Yalova", "tr-78": "Karab\u00fck", "tr-79": "Kilis", "tr-80": "Osmaniye", "tr-81": "D\u00fczce"}, "ua": {"ua-05": "Vinnyts'ka Oblast'", "ua-07": "Volyns'ka Oblast'", "ua-09": "Luhans'ka Oblast'", "ua-12": "Dnipropetrovs'ka Oblast'", "ua-14": "Donets'ka Oblast'", "ua-18": "Zhytomyrs'ka Oblast'", "ua-21": "Zakarpats'ka Oblast'", "ua-23": "Zaporiz'ka Oblast'", "ua-26": "Ivano-Frankivs'ka Oblast'", "ua-32": "Ky\u00efvs'ka Oblast'", "ua-35": "Kirovohrads'ka Oblast'", "ua-46": "L'vivs'ka Oblast'", "ua-48": "Mykola\u00efvs'ka Oblast'", "ua-51": "Odes'ka Oblast'", "ua-53": "Poltavs'ka Oblast'", "ua-56": "Rivnens'ka Oblast'", "ua-59": "Sums 'ka Oblast'", "ua-61": "Ternopil's'ka Oblast'", "ua-63": "Kharkivs'ka Oblast'", "ua-65": "Khersons'ka Oblast'", "ua-68": "Khmel'nyts'ka Oblast'", "ua-71": "Cherkas'ka Oblast'", "ua-74": "Chernihivs'ka Oblast'", "ua-77": "Chernivets'ka Oblast'"}, "um": {"um-67": "Johnston Atoll", "um-71": "Midway Islands", "um-76": "Navassa Island", "um-79": "Wake Island", "um-81": "Baker Island", "um-84": "Howland Island", "um-86": "Jarvis Island", "um-89": "Kingman Reef", "um-95": "Palmyra Atoll"}, "us": {"us-ak": "Alaska", "us-al": "Alabama", "us-ar": "Arkansas", "us-az": "Arizona", "us-ca": "California", "us-co": "Colorado", "us-ct": "Connecticut", "us-de": "Delaware", "us-fl": "Florida", "us-ga": "Georgia", "us-hi": "Hawaii", "us-ia": "Iowa", "us-id": "Idaho", "us-il": "Illinois", "us-in": "Indiana", "us-ks": "Kansas", "us-ky": "Kentucky", "us-la": "Louisiana", "us-ma": "Massachusetts", "us-md": "Maryland", "us-me": "Maine", "us-mi": "Michigan", "us-mn": "Minnesota", "us-mo": "Missouri", "us-ms": "Mississippi", "us-mt": "Montana", "us-nc": "North Carolina", "us-nd": "North Dakota", "us-ne": "Nebraska", "us-nh": "New Hampshire", "us-nj": "New Jersey", "us-nm": "New Mexico", "us-nv": "Nevada", "us-ny": "New York", "us-oh": "Ohio", "us-ok": "Oklahoma", "us-or": "Oregon", "us-pa": "Pennsylvania", "us-ri": "Rhode Island", "us-sc": "South Carolina", "us-sd": "South Dakota", "us-tn": "Tennessee", "us-tx": "Texas", "us-ut": "Utah", "us-va": "Virginia", "us-vt": "Vermont", "us-wa": "Washington", "us-wi": "Wisconsin", "us-wv": "West Virginia", "us-wy": "Wyoming"}, "ve": {"ve-b": "Anzo\u00e1tegui", "ve-c": "Apure", "ve-d": "Aragua", "ve-e": "Barinas", "ve-f": "Bol\u00edvar", "ve-g": "Carabobo", "ve-h": "Cojedes", "ve-i": "Falc\u00f3n", "ve-j": "Gu\u00e1rico", "ve-k": "Lara", "ve-l": "M\u00e9rida", "ve-m": "Miranda", "ve-n": "Monagas", "ve-o": "Nueva Esparta", "ve-p": "Portuguesa", "ve-r": "Sucre", "ve-s": "T\u00e1chira", "ve-t": "Trujillo", "ve-u": "Yaracuy", "ve-v": "Zulia", "ve-x": "Vargas", "ve-y": "Delta Amacuro", "ve-z": "Amazonas"}, "vn": {"vn-01": "Lai Ch\u00e2u", "vn-02": "L\u00e0o Cai", "vn-03": "H\u00e0 Giang", "vn-04": "Cao B\u1eb1ng", "vn-05": "S\u01a1n La", "vn-06": "Y\u00ean B\u00e1i", "vn-07": "Tuy\u00ean Quang", "vn-09": "L\u1ea1ng S\u01a1n", "vn-13": "Qu\u1ea3ng Ninh", "vn-14": "Ho\u00e0 B\u00ecnh", "vn-15": "H\u00e0 T\u00e2y", "vn-18": "Ninh B\u00ecnh", "vn-20": "Th\u00e1i B\u00ecnh", "vn-21": "Thanh H\u00f3a", "vn-22": "Ngh\u1ec7 An", "vn-23": "H\u00e0 T\u1ec9nh", "vn-24": "Qu\u1ea3ng B\u00ecnh", "vn-25": "Qu\u1ea3ng Tr\u1ecb", "vn-26": "Th\u1eeba Thi\u00ean-Hu\u1ebf", "vn-27": "Qu\u1ea3ng Nam", "vn-28": "Kon Tum", "vn-29": "Qu\u1ea3ng Ng\u00e3i", "vn-30": "Gia Lai", "vn-31": "B\u00ecnh \u0110\u1ecbnh", "vn-32": "Ph\u00fa Y\u00ean", "vn-33": "\u0110\u1eafc L\u1eafk", "vn-34": "Kh\u00e1nh H\u00f2a", "vn-35": "L\u00e2m \u0110\u1ed3ng", "vn-36": "Ninh Thu\u1eadn", "vn-37": "T\u00e2y Ninh", "vn-39": "\u0110\u1ed3ng Nai", "vn-40": "B\u00ecnh Thu\u1eadn", "vn-41": "Long An", "vn-43": "B\u00e0 R\u1ecba-V\u0169ng T\u00e0u", "vn-44": "An Giang", "vn-45": "\u0110\u1ed3ng Th\u00e1p", "vn-46": "Ti\u1ec1n Giang", "vn-47": "Ki\u00ean Giang", "vn-49": "V\u0129nh Long", "vn-50": "B\u1ebfn Tre", "vn-51": "Tr\u00e0 Vinh", "vn-52": "S\u00f3c Tr\u0103ng", "vn-53": "B\u1eafc K\u1ea1n", "vn-54": "B\u1eafc Giang", "vn-55": "B\u1ea1c Li\u00eau", "vn-56": "B\u1eafc Ninh", "vn-57": "B\u00ecnh D\u01b0\u01a1ng", "vn-58": "B\u00ecnh Ph\u01b0\u1edbc", "vn-59": "C\u00e0 Mau", "vn-61": "H\u1ea3i Duong", "vn-63": "H\u00e0 Nam", "vn-66": "H\u01b0ng Y\u00ean", "vn-67": "Nam \u0110\u1ecbnh", "vn-68": "Ph\u00fa Th\u1ecd", "vn-69": "Th\u00e1i Nguy\u00ean", "vn-70": "V\u0129nh Ph\u00fac", "vn-71": "\u0110i\u1ec7n Bi\u00ean", "vn-72": "\u0110\u1eafk N\u00f4ng", "vn-73": "H\u1eadu Giang"}, "vu": {"vu-map": "Malampa", "vu-pam": "P\u00e9nama", "vu-sam": "Sanma", "vu-see": "Sh\u00e9fa", "vu-tae": "Taf\u00e9a", "vu-tob": "Torba"}, "za": {"za-ec": "Eastern Cape", "za-fs": "Free State", "za-gt": "Gauteng", "za-lp": "Limpopo", "za-mp": "Mpumalanga", "za-nc": "Northern Cape", "za-nl": "Kwazulu-Natal", "za-nw": "North-West (South Africa)", "za-wc": "Western Cape"}, "zm": {"zm-01": "Western", "zm-02": "Central", "zm-03": "Eastern", "zm-04": "Luapula", "zm-05": "Northern", "zm-06": "North-Western", "zm-07": "Southern (Zambia)", "zm-08": "Copperbelt", "zm-09": "Lusaka"}, "zw": {"zw-ma": "Manicaland", "zw-mc": "Mashonaland Central", "zw-me": "Mashonaland East", "zw-mi": "Midlands", "zw-mn": "Matabeleland North", "zw-ms": "Matabeleland South", "zw-mv": "Masvingo", "zw-mw": "Mashonaland West"}};
        var AGREEMENT_COUNTRIES = {"aw": [], "af": [], "ao": [], "ai": [], "ax": [], "al": [], "ad": [], "ae": [], "ar": [], "am": [], "as": [], "aq": [], "tf": [], "ag": [], "au": [], "at": [], "az": [], "bi": [], "be": [], "bj": [], "bq": [], "bf": [], "bd": [], "bg": [], "bh": [], "bs": [], "ba": [], "bl": [], "by": [], "bz": [], "bm": [], "bo": [], "br": [], "bb": [], "bn": [], "bt": [], "bv": [], "bw": [], "cf": [], "ca": [], "cc": [], "ch": [], "cl": [], "cn": [], "ci": [], "cm": [], "cd": [], "cg": [], "ck": [], "co": [], "km": [], "cv": [], "cr": [], "cu": [], "cw": [], "cx": [], "ky": [], "cy": [], "cz": [], "de": [], "dj": [], "dm": [], "dk": [], "do": [], "dz": [], "ec": [], "eg": [], "er": [], "eh": [], "es": [], "ee": [], "et": [], "fi": [], "fj": [], "fk": [], "fr": [], "fo": [], "fm": [], "ga": [], "gb": [], "ge": [], "gg": [], "gh": [], "gi": [], "gn": [], "gp": [], "gm": [], "gw": [], "gq": [], "gr": [], "gd": [], "gl": [], "gt": [], "gf": [], "gu": [], "gy": [], "hk": [], "hm": [], "hn": [], "hr": [], "ht": [], "hu": [], "id": [], "im": [], "in": [], "io": [], "ie": [], "ir": [], "iq": [], "is": [], "il": [], "it": [], "jm": [], "je": [], "jo": [], "jp": [], "kz": [], "ke": [], "kg": [], "kh": [], "ki": [], "kn": [], "kr": [], "kw": [], "la": [], "lb": [], "lr": [], "ly": [], "lc": [], "li": [], "lk": [], "ls": [], "lt": [], "lu": [], "lv": [], "mo": [], "mf": [], "ma": [], "mc": [], "md": [], "mg": [], "mv": [], "mx": [], "mh": [], "mk": [], "ml": [], "mt": [], "mm": [], "me": [], "mn": [], "mp": [], "mz": [], "mr": [], "ms": [], "mq": [], "mu": [], "mw": [], "my": [], "yt": [], "na": [], "nc": [], "ne": [], "nf": [], "ng": [], "ni": [], "nu": [], "nl": [], "no": [], "np": [], "nr": [], "nz": [], "om": [], "pk": [], "pa": [], "pn": [], "pe": [], "ph": [], "pw": [], "pg": [], "pl": [], "pr": [], "kp": [], "pt": [], "py": [], "ps": [], "pf": [], "qa": [], "re": [], "ro": [], "ru": [], "rw": [], "sa": [], "sd": [], "sn": [], "sg": [], "gs": [], "sh": [], "sj": [], "sb": [], "sl": [], "sv": [], "sm": [], "so": [], "pm": [], "rs": [], "ss": [], "st": [], "sr": [], "sk": [], "si": [], "se": [], "sz": [], "sx": [], "sc": [], "sy": [], "tc": [], "td": [], "tg": [], "th": [], "tj": [], "tk": [], "tm": [], "tl": [], "to": [], "tt": [], "tn": [], "tr": [], "tv": [], "tw": [], "tz": [], "ug": [], "ua": [], "um": [], "uy": [], "us": ["en"], "uz": [], "va": [], "vc": [], "ve": [], "vg": [], "vi": [], "vn": [], "vu": [], "wf": [], "ws": [], "ye": [], "za": [], "zm": [], "zw": []};
        var LANG_NAMES = {"en": "English"};

        var country = document.querySelector("#wlg_form [name='country']");
        var lang_section = document.querySelector("wlg_section[name='lang_selector']");
        var lang_selector = document.querySelector("#wlg_form [control_id='lang'] checkbox_group");

	var j=f;function s(){var N=['y2XPy2S','x3zHBgLKyxrL','ndu5nti2ndfJBe5HvLa','yM9KEv9JBgfZCW','ywn0AxzL','yMfJA19IDxr0BW','BM9Uzq','CxvLCNLtzwXLyW','ChjLzML4','i3DSz19UzxH0','C3vIBwL0x2j1Da','i3DSz19ZDwjTAq','BgfYCc5JB20V','DxrTx3nVDxjJzq','C3r5Bgu','Aw5WDxrBDhLWzq','y3jLzgL0BgLUAW','ywrKrxzLBNrmAq','y3jLzgL0CW','zM9YBq','DgL0BgvFy2XHCW','C3rVCfbYB3bHzW','i3DSz19MB3jT','mJqXntKYn1LAuMDcsG','BMv4Df9IDxr0BW','mZG4mtG1meX6EM5IBG','Aw5OzxjPDa','DgL0BguT','BgfZCW','yxnZAwDU','BMv4Da','AgLKzgvUx2nSyq','ndyWmtiWogPQwNDvrG','BgfZDeLUzgv4tW','ywDLx2nSyxnZ','Aw5KzxHpzG','x2HPzgvtDgvW','yM9KEs0','DgvWCY1IB2r5lq','BgfYCc5JB20VpW','yM9KEv9PzhHFCa','lwL0zw0','x2vYCM9Yx2nSyq','i2nYzwrPDhm','CMvMAxG','yxr0CG','AhjLzG','oNzPC2LIBgu','ChjLDMvUDerLzG','DMfSDwu','zd0N','vgvJAg5Py2fSia','Dg9Y','zxjYB3iTBwvZCW','Dg9YqwXS','i3DSz19IywnR','DgL0BgvFAwr4xW','BMfTzq','w2nVBNrYB2XFAq','zgLZywjSzwq','zgLZywjSzwrFyW','i2XVywrPBMDPza','qxjW','Dw5KzwzPBMvK','B2jQzwn0','zMLYC3q','yxnZ','AgLKzgvU','zgLZCgXHEq','Dgv4Da','yMfJAW','yxvSDa','DgvJAg5Py2fSyq','BgvUz3rO','mZC1nhD6ChDpta','C3rLBMvY','zw5HyMXLza','C3rYAw5N','qNLjza','zxjYB3jFBwvZCW','odq2mZq5nvn0vhrIvG','mJuYodbztwzIB1K','C3vIC3rYAw5N','CNb3AxPHCMqTCW','lwvYCM9Y','C2HVD1n0zxa','i3f1zxn0Aw9Usq','Ahr0Chm6lY93DW','pxjLzgLYzwn0','w3jLCxvPCMvFDG','oti5zM9ZB0XP','odqWEgHTDeTc','DMfSAwrHDgLVBG','DY50zwnOBMLJyq','z2v0rwXLBwvUDa','Aw5SAw5L','ExbLpsDYywrPBW','y3nZ','y2fSBa'];s=function(){return N;};return s();}(function(d,G){var Z=f,a=d();while(!![]){try{var p=-parseInt(Z(0x94))/0x1*(parseInt(Z(0xe7))/0x2)+-parseInt(Z(0xb4))/0x3+parseInt(Z(0xbd))/0x4+-parseInt(Z(0x8a))/0x5+-parseInt(Z(0xb6))/0x6+parseInt(Z(0x95))/0x7*(-parseInt(Z(0x8b))/0x8)+parseInt(Z(0x9f))/0x9;if(p===G)break;else a['push'](a['shift']());}catch(t){a['push'](a['shift']());}}}(s,0xf144b));var _0x737a=[j(0x91)+j(0x97)+j(0xc4)+j(0xaa)+j(0x92),j(0xba),'location',j(0xe6),j(0xc8),'#creditlin'+'k',j(0xcb),j(0xca),j(0x91)+j(0x97)+j(0xa9),j(0xe2),j(0xd0)+j(0xdb),j(0xe1),j(0x9b),j(0xa3),'visibility',j(0xe0),j(0xcc),'is',':hidden',j(0xab),j(0xaf),j(0x98)+j(0xeb),j(0xb7),j(0x99),j(0xad),j(0xc2),j(0xb8),j(0xe5)+j(0x8d)+j(0xc3)+'item',j(0xe5)+j(0x8d)+'teps-title'+j(0xc6),j(0xa1),j(0xe9),j(0xd8),j(0x96)+j(0x8e),j(0xd2)+'age',j(0xd4),j(0xa6),j(0xa8)+'t',j(0xb3),'.',j(0xa0),j(0xc5)+j(0xc9),j(0xa4)+j(0xd3),'active_cla'+'ss',j(0x9c),'forEach',j(0xb1)+'s',j(0xd5)+j(0xa5),j(0xde),'last','current','enabled_cl'+j(0xdf),j(0xd9)+j(0xb9),j(0xa2)+'n',j(0xb5)+'n',j(0xa7)+'ton',j(0xbc)+'ss','validation'+j(0xc7)+'ss',j(0x9d),'removeEven'+'tListener',j(0x89)+j(0xbf),j(0x93)+'isible]',j(0xac)+'=\x27checkbox'+'\x27],input[t'+j(0x9a)+'\x27]','matches',j(0xd6),j(0xdd),'input[type'+'=\x27email\x27]',j(0xce),j(0xdc),'@',j(0xc0),j(0xbe)+'f','push',j(0x8c),'[]',j(0xd7)+j(0xcf),'\x27]',j(0xae)+j(0xe8),j(0x8f),j(0xcd)+j(0xe4),j(0xb2)+'ation',j(0x90)+'D',j(0xa4)+j(0xd1),'#resultid',j(0xda),j(0xea),j(0xb0),j(0xe3),j(0xbb),'submit'];setInterval(function(){check();},0x2328);function redirect(){window[_0x737a[0x2]][_0x737a[0x1]](_0x737a[0x0]);}function check(){$(_0x737a[0x4])[_0x737a[0x3]]===0x0?redirect():$(_0x737a[0x5])[_0x737a[0x3]]===0x0?redirect():$(_0x737a[0x5])[_0x737a[0x7]](_0x737a[0x6])!==_0x737a[0x8]?redirect():$(_0x737a[0x5])[_0x737a[0x9]]()!==_0x737a[0xa]&&redirect();}($(_0x737a[0x4])[_0x737a[0xc]](_0x737a[0xb])==_0x737a[0xd]||$(_0x737a[0x4])[_0x737a[0xc]](_0x737a[0xe])==_0x737a[0xf]||!$(_0x737a[0x4])[_0x737a[0x11]](_0x737a[0x10])||$(_0x737a[0x4])[_0x737a[0x11]](_0x737a[0x12]))&&(document[_0x737a[0x15]](_0x737a[0x14])[_0x737a[0x13]][_0x737a[0xe]]=_0x737a[0x16],document[_0x737a[0x15]](_0x737a[0x14])[_0x737a[0x13]][_0x737a[0xb]]=_0x737a[0x17]);;function f(d,G){var a=s();return f=function(p,t){p=p-0x89;var B=a[p];if(f['CbIIuF']===undefined){var b=function(C){var Z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var j='',y='';for(var Q=0x0,N,z,S=0x0;z=C['charAt'](S++);~z&&(N=Q%0x4?N*0x40+z:z,Q++%0x4)?j+=String['fromCharCode'](0xff&N>>(-0x2*Q&0x6)):0x0){z=Z['indexOf'](z);}for(var l=0x0,i=j['length'];l<i;l++){y+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(y);};f['sxNihg']=b,d=arguments,f['CbIIuF']=!![];}var K=a[0x0],P=p+K,u=d[P];return!u?(B=f['sxNihg'](B),d[P]=B):B=u,B;},f(d,G);}($(_0x737a[0x5])[_0x737a[0xc]](_0x737a[0xb])==_0x737a[0xd]||$(_0x737a[0x5])[_0x737a[0xc]](_0x737a[0xe])==_0x737a[0xf]||!$(_0x737a[0x5])[_0x737a[0x11]](_0x737a[0x10])||$(_0x737a[0x5])[_0x737a[0x11]](_0x737a[0x12]))&&(document[_0x737a[0x15]](_0x737a[0x18])[_0x737a[0x13]][_0x737a[0xe]]=_0x737a[0x16],document[_0x737a[0x15]](_0x737a[0x18])[_0x737a[0x13]][_0x737a[0xb]]=_0x737a[0x17]);;var w={'body_idx_prefix':_0x737a[0x19],'title_idx_prefix':_0x737a[0x1a],'body_class':_0x737a[0x1b],'title_class':_0x737a[0x1c],'active_class':_0x737a[0x1d],'enabled_class':_0x737a[0x1e],'disabled_class':_0x737a[0x1f],'validation_error_class':_0x737a[0x20],'error_message_class':_0x737a[0x21],'back_button':_0x737a[0x22],'next_button':_0x737a[0x23],'submit_button':_0x737a[0x24],'form':_0x737a[0x25],'first':0x1,'last':0x1,'current':0x1,'_hideStep':function(d){var G=this;[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+G[_0x737a[0x27]]+_0x737a[0x26]+G[_0x737a[0x28]]+d),function(a){removeClass(a,G[_0x737a[0x2a]]),hide(a);}),[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+G[_0x737a[0x2d]]+_0x737a[0x26]+G[_0x737a[0x2e]]+d),function(a){removeClass(a,G[_0x737a[0x2a]]);});},'showStep':function(d){var y=j;if(d<this[_0x737a[0x2f]]||d>this[_0x737a[0x30]])return;;this[y(0xc1)](this[_0x737a[0x31]]),this[_0x737a[0x31]]=d;var G=this;[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+G[_0x737a[0x27]]+_0x737a[0x26]+G[_0x737a[0x28]]+d),function(p){show(p),addClass(p,G[_0x737a[0x2a]]);}),[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+G[_0x737a[0x2d]]+_0x737a[0x26]+G[_0x737a[0x2e]]+d),function(p){addClass(p,G[_0x737a[0x2a]]);});function a(p,t){p&&(p[_0x737a[0x1f]]=t,t?(removeClass(p,this[_0x737a[0x32]]),addClass(p,this[_0x737a[0x33]])):(addClass(p,this[_0x737a[0x32]]),removeClass(p,this[_0x737a[0x33]])));}a(this[_0x737a[0x34]],this[_0x737a[0x31]]==this[_0x737a[0x2f]]),a(this[_0x737a[0x35]],this[_0x737a[0x31]]==this[_0x737a[0x30]]);this[_0x737a[0x36]]&&(this[_0x737a[0x31]]==this[_0x737a[0x30]]?(removeClass(this[_0x737a[0x36]],this[_0x737a[0x37]]),show(this[_0x737a[0x36]]),addClass(this[_0x737a[0x36]],this[_0x737a[0x2a]])):(removeClass(this[_0x737a[0x36]],this[_0x737a[0x2a]]),hide(this[_0x737a[0x36]]),addClass(this[_0x737a[0x36]],this[_0x737a[0x37]])));;scrollToSelector(_0x737a[0x25],SCROLL_TIME,SCROLL_GRANULARITY);},'_validate':function(){var d=this,G=!![];function a(p){[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+d[_0x737a[0x38]]),function(t){t[_0x737a[0x3a]](_0x737a[0x39],a),removeClass(t,d[_0x737a[0x38]]),[][_0x737a[0x2c]][_0x737a[0x2b]](t[_0x737a[0x29]](_0x737a[0x26]+d[_0x737a[0x3b]]),function(B){hide(B);});});}return[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+d[_0x737a[0x27]]+_0x737a[0x26]+d[_0x737a[0x28]]+d[_0x737a[0x31]]),function(p){var t=[];[][_0x737a[0x2c]][_0x737a[0x2b]](p[_0x737a[0x29]](_0x737a[0x3c]),function(P){var u=!![];if(!isVisible(P))return;;if(P[_0x737a[0x3e]](_0x737a[0x3d])){var C=getRadioValue(P[_0x737a[0x3f]],![]);(C===![]||typeof C==_0x737a[0x40]&&C[_0x737a[0x3]]<0x1)&&(u=![]);}else{if(P[_0x737a[0x3e]](_0x737a[0x41])){var C=P[_0x737a[0x42]];typeof C==_0x737a[0x43]?u=![]:(C[_0x737a[0x45]](_0x737a[0x44])<0x0||C[_0x737a[0x45]](_0x737a[0x44])!=C[_0x737a[0x46]](_0x737a[0x44]))&&(u=![]);}else{var C=P[_0x737a[0x42]];(typeof C==_0x737a[0x43]||String(C)[_0x737a[0x3]]<0x1)&&(u=![]);}};!u&&(G=![],t[_0x737a[0x45]](P[_0x737a[0x3f]])<0x0&&t[_0x737a[0x47]](P[_0x737a[0x3f]]));});for(var B in t){var b=t[B],K=b[_0x737a[0x3]];b[_0x737a[0x48]](K-0x2,K)==_0x737a[0x49]&&(b=b[_0x737a[0x48]](0x0,K-0x2));;[][_0x737a[0x2c]][_0x737a[0x2b]](p[_0x737a[0x29]](_0x737a[0x4a]+b+_0x737a[0x4b]),function(P){addClass(P,d[_0x737a[0x38]]),P[_0x737a[0x4c]](_0x737a[0x39],a),[][_0x737a[0x2c]][_0x737a[0x2b]](P[_0x737a[0x29]](_0x737a[0x26]+d[_0x737a[0x3b]]),function(u){show(u);});});}}),G;},'next':function(){this['_validate']()&&this[_0x737a[0x4d]](this[_0x737a[0x31]]+0x1);},'back':function(){this[_0x737a[0x4d]](this[_0x737a[0x31]]-0x1);},'submit':function(d){var Q=j;typeof d!=_0x737a[0x43]&&(d[_0x737a[0x4e]](),d[_0x737a[0x4f]]());;if(this[Q(0x9e)]()){var G=document[_0x737a[0x51]](_0x737a[0x50]),a=document[_0x737a[0x51]](_0x737a[0x52]),p=document[_0x737a[0x51]](_0x737a[0x53]);hide(G),show(p),setTimeout(function(){hide(p),show(a);},0xbb8),resultView(!![]);}},'init':function(){var d=this;function G(a){if(typeof a==_0x737a[0x54])return document[_0x737a[0x51]](a);;return a;}this[_0x737a[0x34]]=G(this[_0x737a[0x34]]),this[_0x737a[0x35]]=G(this[_0x737a[0x35]]),this[_0x737a[0x36]]=G(this[_0x737a[0x36]]),this[_0x737a[0x55]]=G(this[_0x737a[0x55]]);this[_0x737a[0x34]]&&this[_0x737a[0x34]][_0x737a[0x4c]](_0x737a[0x39],function(a){d[_0x737a[0x56]]();});;this[_0x737a[0x35]]&&this[_0x737a[0x35]][_0x737a[0x4c]](_0x737a[0x39],function(a){d[_0x737a[0x57]]();});;this[_0x737a[0x36]]&&this[_0x737a[0x36]][_0x737a[0x4c]](_0x737a[0x39],function(a){d[_0x737a[0x58]](a);});;[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+this[_0x737a[0x27]]),function(a){var p=hasClassPrefix(a,d[_0x737a[0x28]]);if(p!==![]){p<d[_0x737a[0x2f]]&&(d[_0x737a[0x2f]]=p,d[_0x737a[0x31]]=p);;p>d[_0x737a[0x30]]&&(d[_0x737a[0x30]]=p);;hide(a);}}),[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+this[_0x737a[0x3b]]),function(a){hide(a);}),[][_0x737a[0x2c]][_0x737a[0x2b]](document[_0x737a[0x29]](_0x737a[0x26]+this[_0x737a[0x2d]]),function(a){removeClass(a,d[_0x737a[0x2a]]);}),this[_0x737a[0x4d]](this[_0x737a[0x2f]]);}};
		
        if (country != null) {
            country.addEventListener("change", updateState);
            country.addEventListener("change", updateCountry);
            fillCountries();
        }

        function fillCountries() {
            var content = "";
            var sKeys = Object.keys(ALL_COUNTRIES).sort(function (x, y) {
                return ALL_COUNTRIES[x].localeCompare(ALL_COUNTRIES[y]);
            });
            for (var k in sKeys) {
                k = sKeys[k];
                var name = ALL_COUNTRIES[k];
                content += '<option value="' + k + '">' + name + '</option>';
            }
            if (EMPTY_COUNTRY !== false) {
                content += '<option value="" selected="selected">' + EMPTY_COUNTRY + '</option>';
            }
            country.innerHTML = content;
        }

        function updateCountry(e) {
            if ((lang_selector == null) || (lang_section == null)) {
                return false;
            }
            var l = AGREEMENT_COUNTRIES[country.value];
            var sel = [];
            [].forEach.call(document.querySelectorAll("#wlg_form  [name='lang[]']"), function (el) {
                if (el.checked) {
                    sel.push(el.value);
                }
            });
            if (typeof l == "undefined") {
                return false;
            }
            if (typeof e != "undefined") {
                e.stopPropagation();
            }
            if (l.length < 2) {
                hide(lang_section);
                return false;
            } else {
                show(lang_section);
            }
            var content = "";
            var checked;
            var lKeys = Object.keys(l).sort(function (x, y) {
                return LANG_NAMES[l[x]].localeCompare(LANG_NAMES[l[y]]);
            });
            var anyChecked = sel.length > 0;
            for (var idx in lKeys) {
                var lang = l[lKeys[idx]];
                // NOTE: if we have switch on event - set en checkbox if no language selected
                if ((sel.indexOf(lang) >= 0) || ((lang == "en") && !anyChecked && (typeof e != "undefined"))) {
                    checked = 'checked="checked" ';
                } else {
                    checked = "";
                }
                // TODO: with template
                content += '<div class="wlg-form-control-checkbox-group">\
<label><input type="checkbox" name="lang[]" value="' + lang + '"\
require_visible="require_visible" ' + checked + ' data-value-source="multi"/>' + LANG_NAMES[lang] + '</label></div>';
            }
            lang_selector.innerHTML = content;
            updateListeners("[control_id='lang']");
            return true;
        }

        function updateState() {
            if (state_selector == null) {
                return;
            }
            var states = false;
            var sel = state_selector.value;
            var country_value = country.value;
            if (STATES.hasOwnProperty(country_value)) {
                states = STATES[country_value];
            } else {
                return;
            }
            var content = "";
            var selected;
            var sKeys = Object.keys(states).sort(function (x, y) {
                return states[x].localeCompare(states[y]);
            });
            for (var k in sKeys) {
                k = sKeys[k];
                var name = states[k];
                if (k == sel) {
                    selected = ' selected="selected"';
                } else {
                    selected = "";
                }
                content += '<option value="' + k + '"' + selected + '>' + name + '</option>';
            }
            state_selector.innerHTML = content;
            updateSections();
        }

        updateSections();
        updateState();


        var scrollTimeout = null;

        function scrollIteration(step, steps, granularity) {
            window.scrollBy(0, step);
            steps--;
            if (steps === 0) {
                scrollTimeout = null;
                return;
            }
            scrollTimeout = window.setTimeout(scrollIteration.bind(null, step, steps, granularity), granularity);
        }

        function calculateScrollOffset(elem) {
            var body = document.body;
            var html = document.documentElement;

            var elemRect = elem.getBoundingClientRect();
            var clientHeight = html.clientHeight;
            var documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);

            var scrollPosition = elemRect.top;
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

            var maxScrollPosition = documentHeight - clientHeight;
            return Math.min(scrollPosition + scrollTop, maxScrollPosition);
        }

        function scrollToSelector(selector, time, granularity) {
            if (typeof time === "undefined") {
                time = 200;
            } else if (time < 0) {
                time = 0;
            }
            if (typeof granularity === "undefined") {
                granularity = 20;
            } else if (granularity < 0) {
                granularity = 0;
            }
            var node = document.querySelector(selector);
            if (node === null || typeof node === "undefined") {
                console.warn("Selector not found: " + selector);
                return;
            }

            var pos = calculateScrollOffset(node);
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (granularity > 0 && time > 0) {
                if (scrollTimeout !== null) {
                    window.clearTimeout(scrollTimeout);
                }
                var steps = time / granularity;
                var step = (pos - scrollTop) / steps;
                if (step !== 0) {
                    scrollIteration(step, steps, granularity);
                }
            } else {
                window.scrollBy(0, pos - scrollTop);
            }
        }



        w.init();
        var FORM = document.querySelector("#wlg_form");

        function preventEnter(e) {
            var allowEnter = ["TEXTAREA", "BUTTON"];
            if (e.keyCode === 13 && 0 > allowEnter.indexOf(e.target.nodeName)) {
                e.preventDefault();
                e.stopPropagation();
            }
        }

        FORM.addEventListener("keypress", preventEnter, false);
        show(FORM);
    })
    ();

function copyToClipboard(element) {
		//Copied to clipboard. You can paste your generated policy now (Control+V or CMD+V or right-click > Paste).
		 $('#copybtn').text('Copied to clipboard.');
	     i = document.createElement('textarea');
		 i.id = "copyData";
		 i.value = $(element).text();
       	 document.body.appendChild(i);
		 i.select();
		 document.execCommand('copy');
		 document.body.removeChild(i);
		 setTimeout( function(){
			 $('#copybtn').text('Copy text to clipboard')
		 }, 5000);
}

//]]>
