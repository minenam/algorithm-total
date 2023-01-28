function solution(n) {
    let answer = Number(n.toString().split('').sort().reverse().join(''));
    return answer;
}