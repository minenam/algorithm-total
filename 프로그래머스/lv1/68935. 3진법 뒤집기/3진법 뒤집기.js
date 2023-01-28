function solution(n) {
    // 3진법 변환 >> 역순
    let reverseThreeString = n.toString(3).split('').reverse().join('');
    // 다시 10진법으로 변환
    let answer = parseInt(reverseThreeString, 3);
    return answer;
}