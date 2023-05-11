function solution(a, b) {
    let answer = 0;
    
    const first = String(a).concat(String(b));
    const second = String(2 * a * b);
    
    answer = Math.max(first, second);
    return answer;
}