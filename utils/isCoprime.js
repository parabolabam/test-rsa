"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCoprime(first, second) {
    let num;
    while (second) {
        num = first % second;
        first = second;
        second = num;
    }
    if (Math.abs(first) === 1) {
        return true;
    }
    return false;
}
exports.isCoprime = isCoprime;
//# sourceMappingURL=isCoprime.js.map