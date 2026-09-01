"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
class Utilities {
    static async DocumentReady() {
        // check that the document is ready
        while (!document.getElementById("menu-div")) {
            await Utilities.sleep(10);
        }
    }
}
exports.Utilities = Utilities;
Utilities.sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
