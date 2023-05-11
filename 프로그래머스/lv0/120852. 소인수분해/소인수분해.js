function solution(n) {
    let answer = new Set(); // 중복된 인수 제거를 위해 Set 활용
    let divisor = 2; // n의 제수
    let dividendN = n;
    
    while (dividendN > 1) {
        // 소인수가 있는 경우
        if (dividendN % divisor === 0) {
            answer.add(divisor);
            dividendN = dividendN / divisor;
            divisor = 2;
        } else {
            divisor++;
        }
    }
    // 소인수가 하나도 없는 경우
    if (answer.length === 0) answer.push(n);
    return [...answer];
}