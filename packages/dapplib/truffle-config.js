require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strong crawl noble social install force orange teach'; 
let testAccounts = [
"0x9d8d10ff5b3195004d20ba832c3cc1201885a172fe613319c532e3ae76c14b73",
"0x7f7637a78c8703d2d1854bce2eba2e5ec23eb65bb7181909f8569bf272cff996",
"0x35de4aa61b5f9d176651ca474ecb918be0504332c30524668ed62e3878f072b6",
"0xc0953c7c7f20e71f16928685631423ae3a89ace5a74f4e74026585ed482205f8",
"0xf4b28a9f0cc4ea838b487c913087f3d391ae303a97e73225a4c96b096744058f",
"0x0c5402eea76f970560a2b309eae5a8aff27dd6dd220acd0bf2c3ec195b982044",
"0x941783cd7c9b477d811e9dad21f8c07d189f50cf807924bc87e99d2e8d9dd801",
"0x3724accf6b9fb237187f7deac0a01d71b195ab307601979b268a7df6d4a568ac",
"0x6df0ffb3e2d0319a6fa838e7ae9fe4d9310fab9526ce7ad28ee2568475b24985",
"0x3213b302749402383e40fbbc3dc25df883c1ba70831c4c2e42371c7ce654e117"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

