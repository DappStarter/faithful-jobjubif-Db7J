require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember evil give father flat spoon'; 
let testAccounts = [
"0x2a213721aef516bc19b401079185c99118302b78ff21301d431ad84741870209",
"0x7b7160d9c1048c78dd0a44a4468a6692474f56652203a69e22d5dd3f3d4e1624",
"0x3a11ae943c808532f322daae53d5589b8698e3bdf94e94d630af1c96fa2ab283",
"0x17976db2e25a646e50970e80b575bd2f41643beaadfe652704368636ba2fd69d",
"0x137942701bc2d8a9e2bfc2febe026c41f4c1edc2c86db057a0619ac04075ae8e",
"0x735c43ef77e2b4cd44ae900f80be0ab0a4657950094311e7d05b6fc64de95275",
"0xc84f62f96d4e5486203ba1aa71ab98578be4e00b687de62da89b13981303649a",
"0xf48f58e76cf454ef91f9554a816c99ee028f756c8a9cf72d02d62bf402d85d31",
"0x8479ea4d804b94a9438ed2abe5764e51d4080c947d289f21571b6716bada75b1",
"0x2b92dec6e7e40985621b253ff694c9557fc74a1269e5bf3e9f25e802652b53f9"
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

