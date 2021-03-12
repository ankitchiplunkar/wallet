import { W3 } from './W3'

const url = 'https://cloudflare-eth.com'
const publicAddress = '0x1E94B100137989631eCa3EdAC82B36Bc1E8A12A5'
    

describe('W3', () => {
  test('Successfully gets blocknumber from a w3 client', async () => {    
    
    const w3 = new W3(url)
    const result = await w3.getBlock(); 
  })
  
  test('Successfully gets balance from a w3 client', async () => {    
    
    const w3 = new W3(url)
    const result = await w3.getBalance(publicAddress); 
    expect(result).not.toBeNull()
  })
})