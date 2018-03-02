class Transaction {

    constructor(sender, recipient, value) {
        this.sender = sender;
        this.recipient = recipient;
        this.value = value;
    }
}

module.exports = Transaction;