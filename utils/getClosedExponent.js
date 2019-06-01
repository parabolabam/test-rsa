"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getClosedExponent(openExponent, eiler) {
    for (let d = 0; d < Infinity; d++) {
        if ((d * openExponent) % eiler === 1) {
            return d;
        }
    }
    throw new Error('Error in getClosedExponent()');
}
exports.getClosedExponent = getClosedExponent;
//# sourceMappingURL=getClosedExponent.js.map