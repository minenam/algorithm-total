function solution(n) {
    // 에라토스테네스 체를 활용해서 n까지 약수 구하기
    // n까지 소수 개수를 n에서 빼기?
    const answer = new Set();
    // let divisor = 1; // 제수(나누는 수)
    let dividend = 1; // 피제수 (나누어지는 수)
    
    while (dividend <= n) {
        let primeCount = 0;
        for (let i = 2; i < dividend; i++) {
            // console.log(`dividend: ${dividend} / i: ${i} / primeCount: ${primeCount}`);
            if (dividend % i === 0) {
                primeCount++;
                answer.add(dividend);
            }
        }
        dividend++;
    }
    return answer.size;
}