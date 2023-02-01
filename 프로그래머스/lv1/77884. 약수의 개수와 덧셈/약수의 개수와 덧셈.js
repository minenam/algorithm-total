function solution(left, right) {
    let answer = 0;
    
    // 약수 개수 구하는 함수
    const countDivisor = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count+= 1;
        }
        return count;
    };
    
    // 약수 개수의 짝/홀수로 계산
    for (let i = left; i < right+1; i++) {
        if (countDivisor(i) % 2 === 0) answer += i;
        else answer -= i;
    }
    
    return answer;
}