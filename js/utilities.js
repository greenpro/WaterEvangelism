"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
class Utilities {
}
exports.Utilities = Utilities;
Utilities.sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
