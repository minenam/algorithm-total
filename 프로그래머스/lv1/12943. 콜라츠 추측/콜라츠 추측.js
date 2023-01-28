function solution(num) {
    // num 이 1인 경우
    if (num === 1) {
        return 0
    }
    
    let count = 0; 
    
    // num이 1이 될 때까지 반복
    while (num !== 1) {
        // 짝수인 경우, / 2
        if (num % 2 === 0) {
            num /= 2;
        // 홀수인 경우, * 3 + 1
        } else {
            num = num * 3 + 1
        }
        count ++;
        
        // 반복횟수가 500이 넘는 경우
        if (count > 500) {
            return -1;
        }
    }
    
    return count;
}