function solution(n) {
    let reverseN = String(n).split('').reverse();

    answer = Array.from(reverseN, (v) => Number(v));

    return answer;
}