/*
                                  Insert Code Snippet 6 Here
*/
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = ''; // the mnemonic for testnet Rinkeby

const path = require("path");

module.exports = {

    contracts_build_directory: path.join(__dirname, "./build"),

    networks : {
        develop : {
            host : '127.0.0.1',
            port : 8545,
            network_id : '*' // Match any network id
        },
        rinkeby : {
            privider : function () {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/[key]");
            },
            network_id : 4
        }
    }
};

