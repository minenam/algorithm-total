function solution(n) {
    let answer = 0;
    
    let divisor = n;
    while (divisor > 0) {
        answer += divisor % 10;
        divisor = Math.floor(divisor / 10);
    }
    
    return answer;
}