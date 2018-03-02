const sha = require('crypto-js/sha256');
const Block = require('./block');
const Transaction = require('./transaction');

class Blockchain {

    constructor() {
        this.chain = [new Block(new Transaction('[GenesisBlock]', '[GenesisBlock]', null), '0000000000000000000000000000000000000000000000000000000000000000')];
    }

    append(sen, rec, val) {
        let newOne = new Block(new Transaction(sen, rec, val), this.peekLast().hash);
        console.log('Mining...');
        newOne.mine();
        console.log('Mined!');
        this.chain.push(newOne);
    }

    validateBlockchain() {
        for (var i = 1; i < this.chain.length; i++) {
            if (this.chain[i].prevHash !== this.chain[i - 1].hash) {
                return false;
            }

            if (this.chain[i].hash !== sha((this.chain[i].transaction.sender + this.chain[i].transaction.recipient + this.chain[i].transaction.value + this.chain[i].prevHash)).toString()) {
                return false;
            }

            return true;
        }
    }

    peekLast() {
        return this.chain[this.chain.length - 1];
    }

    getBlock(i) {
        return this.chain[i];
    }
}

module.exports = Blockchain;