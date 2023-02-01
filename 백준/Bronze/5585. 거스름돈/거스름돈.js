let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
    const TAROMONEY = 1000;
    const CHANGES = [500, 100, 50, 10, 5, 1];

    // 남은 거스름돈 총액
    let totalChanges = TAROMONEY - input;

    // 결과로 반환할 잔돈 개수
    let answer = 0; 

    for (let i = 0; i < CHANGES.length; i++) {
        // 남은 거스름돈을 잔돈 금액으로 나눈 몫을 누적해 더하기
        answer += parseInt(totalChanges / CHANGES[i]);
        // 남은 거스름돈은 잔돈 금액으로 나눈 나머지로 할당
        totalChanges = (totalChanges % CHANGES[i]);
    }

    return answer;
}

console.log(solution(input));