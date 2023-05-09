function solution(n) {
    let answer = 1;
    let factorial = 1;
    
    // 최댓값이 10이므로 1! ~ 10! 범위내에서 구하면 됨
    while (answer < n) {
        factorial++;
        answer *= factorial;
        if (answer > n) {
            factorial -= 1;
            break;
        }
    }
    return factorial;
    
}