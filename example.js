const Blockchain = require('./blockchain');

let bc = new Blockchain();

bc.append('Mark', 'Bill', 10);
bc.append('Bill', 'Elon', 4);
bc.append('Mark', 'Jeff', 8);

console.log('\n');
bc.chain.forEach(blc => {
    console.log('-------------------------');
    console.log(blc.transaction.sender + '\t\t\t\t');
    console.log(blc.transaction.recipient + '\t\t\t\t');
    console.log(blc.transaction.value + '\t\t\t\t');
    console.log(blc.timestamp + '\t');
});
console.log('-------------------------');

console.log('Blockchain valid: ' + bc.validateBlockchain());