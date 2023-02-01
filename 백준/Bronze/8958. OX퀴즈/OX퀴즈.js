const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
    // 정답을 담을 배열
    let answer = [];

    // 각 테스트케이스만큼 차례대로 점수 계산
    for (let i = 0; i < arr.length; i++) {
        let stringScore = [];
        let oCount = 0;
        // 한 테스트케이스(문자열)의 연속된'O' 개수 구하기
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'O') oCount += 1;
            else oCount = 0;
            stringScore.push(oCount);
        }
        // 각 문제의 점수를 모두 더한 최종 점수 구하기
        let sumScore = stringScore.reduce((acc, curr) => acc += curr, 0);
        answer.push(sumScore);
    }
    return answer.join('\n');
}

console.log(solution(arr));