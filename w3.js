"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.W3 = void 0;
const jsonrpc_ts_1 = require("jsonrpc-ts");
class W3 {
    constructor(url) {
        const options = {
            url: url,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
            },
            timeout: 5000
        };
        this.client = new jsonrpc_ts_1.RpcClient(options);
    }
    async getBalance(address) {
        return await this.client.makeRequest({
            method: "eth_getBalance",
            params: [address, "latest"],
            id: 1,
            jsonrpc: '2.0'
        });
    }
    async getBlock() {
        return await this.client.makeRequest({
            method: "eth_blockNumber",
            params: [],
            id: 1,
            jsonrpc: '2.0'
        });
    }
}
exports.W3 = W3;
//# sourceMappingURL=w3.js.map