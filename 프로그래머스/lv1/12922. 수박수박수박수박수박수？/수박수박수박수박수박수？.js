function solution(n) {
    let answer = '';

    // 나머지로 접근
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            answer += "박";
        } else {
            answer += "수";
        }
    }

    return answer;
}
