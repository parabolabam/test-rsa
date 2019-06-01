"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color = require("ansi-colors");
const utils_1 = require("./utils");
const decrypt_1 = require("./decrypt");
const encrypt_1 = require("./encrypt");
function init(message = 'test message') {
    const p = utils_1.randomPrimeNumber(); // choice prime
    const q = utils_1.randomPrimeNumber(); // choice prime
    const n = utils_1.getModular(p, q);
    const eiler = utils_1.calculateEilerFunc(p, q);
    const openExponent = utils_1.getOpenExponent(eiler);
    const closedExponent = utils_1.getClosedExponent(openExponent, eiler); // choice
    console.log(color.red(`Gotta be encrypted: ${message}`));
    const encrypted = encrypt_1.encrypt(message, openExponent, n);
    console.log(color.green(`encrypted '${encrypted}'`));
    const decrypted = decrypt_1.decrypt(encrypted, closedExponent, n);
    console.log(color.yellow(`decrypted '${decrypted}'`));
}
init(process.argv[2]);
//# sourceMappingURL=index.js.map