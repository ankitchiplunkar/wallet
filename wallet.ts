import { Mnemonic, HDKey, Address } from "cipher-ethereum";

export class Wallet{
    private _mnemonic: Mnemonic
    private _hdKey: HDKey

    constructor (mnemonic: Mnemonic, hdKey: HDKey) {
        this._mnemonic = mnemonic
        this._hdKey = hdKey
      }

    static generateWallet(words: string): Wallet {
        const mnemonic = Mnemonic.parse(words)
        const seed = mnemonic.toSeed()
        const hdKey = HDKey.parseMasterSeed(seed)
        return new Wallet(mnemonic, hdKey)
    }

    get address (): Address {
        const publicKey = this._hdKey.publicKey
        const address = Address.from(publicKey)
        return address
    }

}