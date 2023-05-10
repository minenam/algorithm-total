const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const [ str1, str2 ] = input;
    const num1 = Number(str1);
    const num2 = Number(str2);
    
    console.log(`${num1} + ${num2} = ${num1+num2}`);
});