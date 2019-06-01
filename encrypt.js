"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encrypt(message, openExponent, n) {
    const encrypted = [];
    message = message.toUpperCase();
    message.split('')
        .map((char) => {
        if (char === ' ') {
            char = '_';
        }
        return char.charCodeAt(0) - 64;
    })
        .forEach((char) => {
        const pow = Math.pow(char, openExponent); // m^e
        const mod = pow % n; // mod n
        encrypted.push(String.fromCharCode(mod));
    });
    return encrypted.join('');
}
exports.encrypt = encrypt;
//# sourceMappingURL=encrypt.js.map