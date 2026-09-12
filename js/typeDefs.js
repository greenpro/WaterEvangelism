"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuButton = exports.CheckLocation = void 0;
var CheckLocation;
(function (CheckLocation) {
    CheckLocation[CheckLocation["Glow"] = 0] = "Glow";
    CheckLocation[CheckLocation["AmazingFacts"] = 1] = "AmazingFacts";
    CheckLocation[CheckLocation["HopeChannel"] = 2] = "HopeChannel";
    CheckLocation[CheckLocation["EGW"] = 3] = "EGW";
    CheckLocation[CheckLocation["Youtube"] = 4] = "Youtube";
})(CheckLocation || (exports.CheckLocation = CheckLocation = {}));
class MenuButton {
    constructor() {
        this.HrefPrefix = "";
        this.ButtonClass = "";
    }
}
exports.MenuButton = MenuButton;
