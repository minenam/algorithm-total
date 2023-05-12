function solution(n) {
    let answer = 0;
    let i = 0;
    
    // n 이 홀수
    if (n % 2 === 1) {
        // 모든 양의 홀수의 합
        while (i <= n) {
            if (i % 2 === 1) {
                answer += i;
            }
            i++;
        }
    } else { // n 이 짝수
        // 모든 양의 짝수들의 제곱합
        while (i <= n) {
            if (i % 2 === 0) {
                answer += i**2;
            }
            i++;
        }
    }
    return answer;
}