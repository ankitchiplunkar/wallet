import { Wallet } from './Wallet'

describe('generate', () => {
  test('Successfully generates wallet from mnemonic', () => {    
    const mnemonic_phrase = 'essay wasp gain consider media wage wave sick bachelor knock observe undo'
    const publicAddress = '0x1E94B100137989631eCa3EdAC82B36Bc1E8A12A5'
    
    const wallet = Wallet.generateWallet(mnemonic_phrase)
    expect(wallet).not.toBe(null)
    expect(wallet.address.address).toBe(publicAddress)
    
  })
  
})