import { RpcClient, RpcClientOptions } from 'jsonrpc-ts';

export class W3 {
    client: RpcClient
    
    constructor(url: string) {
        const options: RpcClientOptions= {
            url: url,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
              },
            timeout: 5000 // 5 seconds
            };
        this.client = new RpcClient(options)
    }

    public async getBalance(address: string): Promise<number> {
        const result = await this.client.makeRequest({
            method: "eth_getBalance",
            params: [address, "latest"],
            id: 1,
            jsonrpc: '2.0'
        });
        return parseInt(result.data["result"])
    }

    public async getBlock(): Promise<number> {
        const result = await this.client.makeRequest({
            method: "eth_blockNumber",
            params: [],
            id: 1,
            jsonrpc: '2.0'
        });
        return parseInt(result.data["result"])
    }


} 