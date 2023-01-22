function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    // 통분하여 덧셈 구하기
    let denom = denom1 * denom2;
    let numer = (numer1 * denom2) + (numer2 * denom1);
    
    let num = Math.min(denom, numer);
    
    // 기약분수 만들기
    
    while (true) {
        if (denom % num === 0 && numer % num === 0) {
            break
        }
        num--;
    }
    
    if (num === 0) {
        answer.push(numer, denom);
    }
    answer.push(parseInt(numer / num), parseInt(denom / num));
    
    return answer;
}
