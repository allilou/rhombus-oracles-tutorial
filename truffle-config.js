/*
                                  Insert Code Snippet 6 Here
*/
var HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
var infura = "https://rinkeby.infura.io/v3/ff6a5f66567945d987ad794f47b97472";

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
            provider : function () {
                return new HDWalletProvider(mnemonic, infura);
            },
            network_id : 4,
            gas: 4500000
        }
    }
};

