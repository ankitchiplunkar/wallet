"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const cipher_ethereum_1 = require("cipher-ethereum");
class Wallet {
    constructor(mnemonic, hdKey) {
        this._mnemonic = mnemonic;
        this._hdKey = hdKey;
    }
    static generateWallet(words) {
        const mnemonic = cipher_ethereum_1.Mnemonic.parse(words);
        const seed = mnemonic.toSeed();
        const hdKey = cipher_ethereum_1.HDKey.parseMasterSeed(seed);
        return new Wallet(mnemonic, hdKey);
    }
    get address() {
        const publicKey = this._hdKey.publicKey;
        const address = cipher_ethereum_1.Address.from(publicKey);
        return address;
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map