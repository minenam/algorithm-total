function solution(n) {
    let answer = [n];
    let x = n;
    
    while (x > 1) {
        console.log(x, answer);
        if (x % 2 === 0) {
            x = x / 2;
        } else {
            x = 3 * x + 1;
        }
        answer.push(x);
    }
    
    return answer;
}