"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decrypt(encryptedMessage, closedExponent, n) {
    const decrypted = [];
    encryptedMessage.split('')
        .map((char) => char.charCodeAt(0))
        .forEach((char) => {
        let mod = 1;
        for (let i = 0; i < closedExponent; i++) {
            mod = (mod * char) % n;
        }
        let char_ = String.fromCharCode(mod + 64);
        if (char_ === '_') {
            char_ = ' ';
        }
        decrypted.push(char_);
    });
    return decrypted.join('').toLowerCase();
}
exports.decrypt = decrypt;
//# sourceMappingURL=decrypt.js.map