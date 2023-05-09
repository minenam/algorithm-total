const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let answer = '';
    
    for (let s of str) {
        if (s == s.toUpperCase()) {
            s = s.toLowerCase();
        } else {
            s = s.toUpperCase();
        }
        answer += s;
    }
    console.log(answer);
});