const sha = require('crypto-js/sha256');
const Transaction = require('./transaction');

class Block {

    constructor(transaction, prevHash) {
        this.transaction = transaction;
        this.prevHash = prevHash;
        this.hash = this.hashIt();
        this.timestamp = this.getToday();
        this.nonce = 0;
    }

    mine() {
        let guess = this.hashIt();
        while (!this.validProof(guess)) {
            guess = this.hashIt();
            this.nonce++;
        }
    }

    getToday() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var hh = today.getHours();
        var mmm = today.getMinutes();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mmm < 10) {
            mmm = '0' + mmm;
        }

        today = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + mmm;
        return today.toString();
    }

    validProof(g) {
        //console.log(g.substring(0, 3))
        if (g.substring(0, 4) !== '0000') {
            return false;
        }
        return true;
    }

    hashIt() {
        return sha((this.transaction.sender + this.transaction.recipient + this.transaction.value + this.prevHash + this.nonce)).toString();
    }


}

module.exports = Block;