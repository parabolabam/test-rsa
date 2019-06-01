"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPrimeNumber_1 = require("./isPrimeNumber");
function randomPrimeNumber() {
    let randomPrime = parseInt((Math.random() * 100 + 1) + '', 10);
    if (!isPrimeNumber_1.isPrimeNumber(randomPrime)) {
        return randomPrimeNumber();
    }
    return randomPrime;
}
exports.randomPrimeNumber = randomPrimeNumber;
;
//# sourceMappingURL=randomPrimeNumber.js.map