"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isCoprime_1 = require("./isCoprime");
function getOpenExponent(eiler) {
    for (let e = 2; e < Infinity; e++) {
        if (isCoprime_1.isCoprime(e, eiler)) {
            return e;
        }
        continue;
    }
    throw new Error('error in getOpenExponent()');
}
exports.getOpenExponent = getOpenExponent;
//# sourceMappingURL=getOpenExponent.js.map