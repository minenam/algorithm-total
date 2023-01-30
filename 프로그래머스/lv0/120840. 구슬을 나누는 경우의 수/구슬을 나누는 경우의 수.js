function solution(balls, share) {
    // 조합 (nCm) = n! / (n-m)!*m!
    let answer = 0;
    
    const factorial = (number) => {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result
    };
    
    let nFactorial = factorial(balls);
    let mFactorial = factorial(share);
    let nMinusM = factorial(balls-share);
    
    answer = Math.round(nFactorial / (nMinusM * mFactorial));
    return answer;
}